import { makeUniqueSlug } from '@/lib/makeUniqueSlug'
import { slugField, type CollectionConfig } from 'payload'

export const PackageTypes: CollectionConfig = {
  slug: 'package-types',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'نوع باقة',
    plural: 'أنواع الباقات',
  },
  admin: {
    useAsTitle: 'name',
    group: 'الباقات',
    defaultColumns: ['name', 'displayOrder', 'isActive'],
    listSearchableFields: ['name'],
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'نوع الباقة' },
    slugField({
      name: 'slug',
      useAsSlug: 'name',
      slugify: ({ valueToSlugify }) => {
        if (!valueToSlugify) return ''
        return valueToSlugify
          .trim()
          .replace(/[\s:]+/g, '-')
          .replace(
            /[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFa-zA-Z0-9-]/g,
            '',
          )
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')
          .toLowerCase()
      },
      overrides: makeUniqueSlug,
    }),
    { name: 'description', type: 'textarea', label: 'الوصف' },
    { name: 'headline', type: 'textarea', label: 'العنوان' },
    { name: 'subheadline', type: 'textarea', label: 'عنوان فرعي' },
    {
      name: 'color',
      type: 'text',
      label: 'اللون السائد',
      admin: {
        components: {
          Field: '@/components/admin/CustomColorPicker',
        },
      },
    },
    { name: 'icon', type: 'text', label: 'اسم الأيقونة' },
    { name: 'badge', type: 'text', label: 'شارة' },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'صورة النوع',
    },
    {
      name: 'badges',
      type: 'array',
      label: 'الشارات',
      labels: { singular: 'شارة', plural: 'شارات' },
      fields: [
        {
          name: 'customIcon',
          type: 'textarea',
          label: 'أيقونة / HTML مخصص',
          admin: {
            description: 'الصق كود SVG كاملاً أو HTML. اتركه فارغاً لإظهار نقطة افتراضية.',
          },
        },
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'النص',
        },
      ],
    },
    {
      name: 'enableFiltering',
      type: 'checkbox',
      defaultValue: false,
      label: 'تفعيل البحث والتصفية',
      admin: {
        description: 'إظهار خيارات البحث والتصفية حسب الفئة في صفحة الباقات',
      },
    },
    {
      name: 'displayOrder',
      type: 'number',
      required: false,
      defaultValue: 1,
      label: 'ترتيب العرض',
      admin: { position: 'sidebar' },
    },
    { name: 'isActive', type: 'checkbox', defaultValue: true, label: 'مفعّل' },
  ],
  timestamps: true,
}
