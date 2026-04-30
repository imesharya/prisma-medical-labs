import { checkRole } from '@/access/checkRole'
import { makeUniqueSlug } from '@/lib/makeUniqueSlug'
import { slugField, type CollectionConfig } from 'payload'

export const TestCategories: CollectionConfig = {
  slug: 'test-categories',
  access: {
    read: checkRole(['admin']),
    create: checkRole(['admin']),
    update: checkRole(['admin']),
    delete: checkRole(['admin']),
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
