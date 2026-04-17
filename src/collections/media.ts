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
