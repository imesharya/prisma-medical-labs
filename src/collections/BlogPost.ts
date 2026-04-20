import type { CollectionConfig } from 'payload'
import type { Block } from 'payload'
import { slugField } from 'payload'
import { makeUniqueSlug } from '@/lib/makeUniqueSlug'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { BlocksFeature } from '@payloadcms/richtext-lexical'

const DisclaimerBlock: Block = {
  slug: 'disclaimer',
  labels: {
    singular: 'تنبيه',
    plural: 'التنبيهات',
  },
  fields: [
    {
      name: 'variant',
      type: 'select',
      options: [
        {
          label: 'افتراضي',
          value: 'default',
        },
        {
          label: 'تحذير',
          value: 'warning',
        },
        {
          label: 'معلومة',
          value: 'info',
        },
        {
          label: 'خطأ',
          value: 'error',
        },
      ],
      defaultValue: 'default',
      label: 'نوع التنبيه',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'إخلاء مسؤولية',
      label: 'العنوان المخصص',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'المحتوى',
    },
  ],
}

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  labels: {
    singular: 'منشور مدونة',
    plural: 'منشورات المدونة',
  },
  admin: {
    useAsTitle: 'title',
    group: 'المدونة',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'العنوان',
    },
    slugField({
      name: 'slug',
      useAsSlug: 'title',
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
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'الصورة البارزة',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'المقتطف',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'المحتوى',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [DisclaimerBlock],
          }),
        ],
      }),
    },
    {
      name: 'author',
      type: 'text',
      label: 'المؤلف',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'blog-categories',
      label: 'التصنيف',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: 'الوسوم',
      fields: [
        {
          name: 'tag',
          type: 'text',
          label: 'وسم',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'تاريخ النشر',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'الحالة',
      options: [
        {
          label: 'مسودة',
          value: 'draft',
        },
        {
          label: 'منشور',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'faq',
      type: 'array',
      label: 'الأسئلة الشائعة',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'السؤال',
        },
        {
          name: 'answer',
          type: 'text',
          required: true,
          label: 'الإجابة',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'meta',
      type: 'group',
      label: 'تحسين محركات البحث (SEO)',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'عنوان الـ meta',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'وصف الـ meta',
        },
        {
          name: 'metaImage',
          type: 'upload',
          relationTo: 'media',
          label: 'صورة الـ meta',
        },
      ],
    },
  ],
}
