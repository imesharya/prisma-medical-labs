import { makeUniqueSlug } from '@/lib/makeUniqueSlug'
import { slugField, type CollectionConfig } from 'payload'

export const Packages: CollectionConfig = {
  slug: 'packages',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'باقة',
    plural: 'الباقات',
  },
  admin: {
    useAsTitle: 'name',
    group: 'الباقات',
    defaultColumns: ['name', 'packageType', 'price', 'discountedPrice', 'isActive'],
    listSearchableFields: ['name', 'slug'],
    pagination: { defaultLimit: 30 },
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'اسم الباقة' },
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

    { name: 'price', type: 'number', required: true, min: 0, label: 'السعر الأصلي (ريال)' },
    { name: 'discountedPrice', type: 'number', min: 0, label: 'السعر بعد الخصم (ريال)' },
    { name: 'badge', type: 'text', label: 'البادج' },

    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'صورة الباقة',
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

    {
      name: 'packageType',
      type: 'relationship',
      relationTo: 'package-types',
      label: 'نوع الباقة',
      admin: { position: 'sidebar' },
    },
    {
      name: 'packageCategory',
      type: 'relationship',
      relationTo: 'package-categories',
      label: 'فئة الباقة',
      admin: { position: 'sidebar' },
    },

    {
      name: 'tests',
      type: 'relationship',
      relationTo: 'tests',
      hasMany: true,
      label: 'التحاليل المضمنة',
      admin: {
        position: 'main',
        description: 'اختر التحاليل التي تريد إضافتها إلى هذه الباقة',
      },
    },
  ],
  timestamps: true,
}
