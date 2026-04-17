import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'ملف وسائط',
    plural: 'الوسائط',
  },
  admin: {
    useAsTitle: 'filename',
    group: 'الوسائط',
    defaultColumns: ['filename', 'mimeType', 'size'],
  },
  upload: {
    disableLocalStorage: true,
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300 },
      { name: 'card', width: 768, height: 480 },
      { name: 'hero', width: 1920, height: 1080 },
    ],
    mimeTypes: ['image/*'],
    adminThumbnail: 'thumbnail',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'الوصف البديل',
    },
  ],
  timestamps: true,
}
