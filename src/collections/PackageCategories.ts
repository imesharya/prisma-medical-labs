import { makeUniqueSlug } from '@/lib/makeUniqueSlug'
import { slugField, type CollectionConfig } from 'payload'
import slugify from 'slugify'

export const PackageCategories: CollectionConfig = {
  slug: 'package-categories',
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
      slugify: ({ valueToSlugify }) =>
        slugify(valueToSlugify, {
          lower: true,
        }),
      overrides: makeUniqueSlug,
    }),
  ],
  timestamps: true,
}
