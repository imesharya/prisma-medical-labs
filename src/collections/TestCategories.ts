import { makeUniqueSlug } from '@/lib/makeUniqueSlug'
import { slugField, type CollectionConfig } from 'payload'
import slugify from 'slugify'

export const TestCategories: CollectionConfig = {
  slug: 'test-categories',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'فئة تحليل',
    plural: 'فئات التحاليل',
  },
  admin: {
    useAsTitle: 'name',
    group: 'التحاليل',
    defaultColumns: ['name', 'slug'],
    listSearchableFields: ['name', 'slug'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'اسم الفئة',
    },
    slugField({
      name: 'slug',
      useAsSlug: 'name',
      slugify: ({ valueToSlugify }) =>
        slugify(valueToSlugify, {
          lower: true,
        }),
      overrides: makeUniqueSlug,
    }),
    {
      name: 'displayOrder',
      type: 'number',
      required: false,
      defaultValue: 1,
      label: 'ترتيب العرض',
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true,
}
