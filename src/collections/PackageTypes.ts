import { makeUniqueSlug } from '@/lib/makeUniqueSlug'
import { slugField, type CollectionConfig } from 'payload'
import slugify from 'slugify'

export const PackageTypes: CollectionConfig = {
  slug: 'package-types',
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
      slugify: ({ valueToSlugify }) =>
        slugify(valueToSlugify, {
          lower: true,
        }),
      overrides: makeUniqueSlug,
    }),
    { name: 'description', type: 'textarea', label: 'الوصف' },
    {
      name: 'badgeColor',
      type: 'select',
      options: ['blue', 'violet', 'pink', 'teal', 'amber'],
      defaultValue: 'blue',
      label: 'لون البادج',
    },
    { name: 'icon', type: 'text', label: 'اسم الأيقونة' },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'صورة النوع',
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
