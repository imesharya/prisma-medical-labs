import { makeUniqueSlug } from '@/lib/makeUniqueSlug'
import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const BlogCategories: CollectionConfig = {
  slug: 'blog-categories',
  labels: {
    singular: 'تصنيف',
    plural: 'تصنيفات المدونة',
  },
  admin: {
    useAsTitle: 'name',
    group: 'المدونة',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'الاسم',
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
      name: 'description',
      type: 'textarea',
      label: 'الوصف',
    },
  ],
}
