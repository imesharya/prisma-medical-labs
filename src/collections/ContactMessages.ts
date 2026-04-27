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
      name: 'email',
      type: 'email',
      label: 'البريد الإلكتروني',
    },
    {
      name: 'subject',
      type: 'select',
      required: true,
      label: 'الموضوع',
      options: [
        { label: 'استفسار عام', value: 'general' },
        { label: 'شكوى', value: 'complaint' },
        { label: 'اقتراح', value: 'suggestion' },
        { label: 'شراكة / تعاون', value: 'partnership' },
        { label: 'أخرى', value: 'other' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'الرسالة',
    },
    {
      name: 'preferredContactMethod',
      type: 'select',
      required: true,
      label: 'طريقة التواصل المفضلة',
      options: [
        { label: 'جوال', value: 'phone' },
        { label: 'بريد إلكتروني', value: 'email' },
        { label: 'واتساب', value: 'whatsapp' },
      ],
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
