import type { CollectionConfig } from 'payload'

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  labels: {
    singular: 'رسالة تواصل',
    plural: 'رسائل التواصل',
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'subject', 'status', 'preferredContactMethod', 'createdAt'],
    group: 'التواصل',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'الاسم الكامل',
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: true,
      label: 'رقم الجوال',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'الرسالة',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      label: 'حالة الرسالة',
      options: [
        { label: 'جديدة', value: 'new' },
        { label: 'مقروءة', value: 'read' },
        { label: 'تم الرد', value: 'replied' },
        { label: 'مؤرشفة', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'ملاحظات داخلية',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
