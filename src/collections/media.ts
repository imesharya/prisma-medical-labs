import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
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
    mimeTypes: ['image/*'],
    adminThumbnail: 'thumbnail',
    crop: false,
    focalPoint: false,
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
