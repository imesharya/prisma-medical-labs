import { checkRole } from '@/access/checkRole'
import type { CollectionConfig } from 'payload'

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  labels: {
    singular: 'رسالة تواصل',
    plural: 'رسائل التواصل',
  },
  access: {
    read: checkRole(['admin', 'doctor', 'receptionist']),
    create: checkRole(['admin', 'doctor', 'receptionist']),
    update: checkRole(['admin', 'doctor', 'receptionist']),
    delete: checkRole(['admin', 'doctor', 'receptionist']),
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
      access: {
        create: checkRole(['admin']),
        update: checkRole(['admin']),
      },
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: true,
      label: 'رقم الجوال',
      access: {
        create: checkRole(['admin']),
        update: checkRole(['admin']),
      },
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'الرسالة',
      access: {
        create: checkRole(['admin']),
        update: checkRole(['admin']),
      },
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
