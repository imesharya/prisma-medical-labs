import { makeUniqueSlug } from '@/lib/makeUniqueSlug'
import { slugField, type CollectionConfig } from 'payload'

export const PackageCategories: CollectionConfig = {
  slug: 'package-categories',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'فئة باقة',
    plural: 'فئات الباقات',
  },
  admin: {
    useAsTitle: 'name',
    group: 'الباقات',
    defaultColumns: ['name', 'slug'],
    listSearchableFields: ['name'],
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'اسم الفئة' },
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
  ],
  timestamps: true,
}
