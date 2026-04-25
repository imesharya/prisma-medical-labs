import type { CollectionConfig } from 'payload'

export const Consultations: CollectionConfig = {
  slug: 'consultations',
  labels: {
    singular: 'إستشارة طبيية',
    plural: 'الإستشارات الطبية',
  },
  admin: {
    useAsTitle: 'referenceNumber',
    defaultColumns: ['fullName', 'phoneNumber', 'date', 'time', 'consultationType', 'status'],
    group: 'الحجوزات',
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
      name: 'consultationType',
      type: 'select',
      required: true,
      label: 'نوع الاستشارة',
      options: [
        { label: 'استشارة ما قبل التحليل', value: 'pre_analysis' },
        { label: 'استشارة لشرح نتائج التحاليل', value: 'results_review' },
      ],
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      timezone: true,
      label: 'التاريخ',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'yyyy-MM-dd',
        },
      },
    },
    {
      name: 'time',
      type: 'date',
      required: true,
      timezone: true,
      label: 'الوقت',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      label: 'الحالة',
      options: [
        { label: 'قيد الانتظار', value: 'pending' },
        { label: 'مؤكد', value: 'confirmed' },
        { label: 'ملغي', value: 'cancelled' },
        { label: 'مكتمل', value: 'completed' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'referenceNumber',
      label: 'الرقم المرجعي',
      type: 'text',
      unique: true,
      admin: { readOnly: true, position: 'sidebar' },
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ data, req, operation }) => {
        if (operation === 'create' && data?.time) {
          const existing = await req.payload.find({
            collection: 'consultations',
            where: {
              time: { equals: data.time },
              status: { not_equals: 'cancelled' },
            },
            limit: 1,
          })

          if (existing.docs.length > 0) {
            throw new Error('هذا الموعد محجوز بالفعل. يرجى اختيار موعد آخر.')
          }
        }
      },
    ],
  },
}
