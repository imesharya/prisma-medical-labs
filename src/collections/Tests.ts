import { makeUniqueSlug } from '@/lib/makeUniqueSlug'
import { slugField, type CollectionConfig } from 'payload'

export const Tests: CollectionConfig = {
  slug: 'tests',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'تحليل',
    plural: 'التحاليل',
  },
  admin: {
    useAsTitle: 'name',
    group: 'التحاليل',
    defaultColumns: ['badge', 'price', 'testCategory', 'individualSale'],
    listSearchableFields: ['name', 'badge'],
    pagination: { defaultLimit: 50 },
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'اسم التحليل' },
    { name: 'badge', type: 'text', required: false, unique: true, label: 'البادج' },
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
    { name: 'price', type: 'number', required: true, min: 0, label: 'السعر (ريال)' },
    { name: 'individualSale', type: 'checkbox', defaultValue: false, label: 'يمكن بيعه بشكل فردي' },

    {
      name: 'testCategory',
      type: 'relationship',
      relationTo: 'test-categories',
      required: false,
      label: 'فئة التحليل',
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true,
}
