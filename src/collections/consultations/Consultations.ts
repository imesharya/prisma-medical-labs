import { checkRole } from '@/access/checkRole'
import type { CollectionConfig, FieldAccess } from 'payload'

export const Consultations: CollectionConfig = {
  slug: 'consultations',
  labels: {
    singular: 'استشارة طبية',
    plural: 'الاستشارات الطبية',
  },
  admin: {
    useAsTitle: 'consultationRequest',
    defaultColumns: ['consultationRequest', 'status', 'completedAt', 'createdAt'],
    group: 'الإستشارات',
  },
  access: {
    read: checkRole(['admin', 'receptionist', 'doctor']),
    create: checkRole(['admin', 'doctor']),
    update: checkRole(['admin', 'receptionist', 'doctor']),
    delete: checkRole(['admin']),
  },
  fields: [
    {
      name: 'consultationRequest',
      type: 'relationship',
      relationTo: 'consultation-requests',
      required: true,
      unique: true,
      label: 'طلب الاستشارة المرتبط',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'scheduled',
      label: 'حالة الاستشارة',
      options: [
        { label: 'مجدولة', value: 'scheduled' },
        { label: 'جارية', value: 'in_progress' },
        { label: 'مكتملة', value: 'completed' },
        { label: 'لم يحضر', value: 'no_show' },
        { label: 'ملغاة', value: 'cancelled' },
      ],
    },
    {
      name: 'chiefComplaint',
      type: 'textarea',
      label: 'الشكوى الرئيسية',
      access: {
        read: checkRole(['admin', 'doctor']),
        update: checkRole(['admin', 'doctor']),
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'ملاحظات الطبيب',
      access: {
        read: checkRole(['admin', 'doctor']),
        update: checkRole(['admin', 'doctor']),
      },
    },
    {
      name: 'diagnosis',
      type: 'textarea',
      label: 'التشخيص',
      access: {
        read: checkRole(['admin', 'doctor']),
        update: checkRole(['admin', 'doctor']),
      },
    },
    {
      name: 'treatmentPlan',
      type: 'textarea',
      label: 'خطة العلاج',
      access: {
        read: checkRole(['admin', 'doctor']),
        update: checkRole(['admin', 'doctor']),
      },
    },
    {
      name: 'prescriptions',
      type: 'array',
      label: 'الوصفات الطبية',
      labels: {
        singular: 'وصفة طبية',
        plural: 'الوصفات الطبية',
      },
      access: {
        read: checkRole(['admin', 'doctor']),
        update: checkRole(['admin', 'doctor']),
      },
      fields: [
        {
          name: 'medicationName',
          type: 'text',
          required: true,
          label: 'اسم الدواء',
        },
        {
          name: 'dosage',
          type: 'text',
          label: 'الجرعة',
        },
        {
          name: 'frequency',
          type: 'text',
          label: 'التكرار',
        },
        {
          name: 'duration',
          type: 'text',
          label: 'المدة',
        },
        {
          name: 'instructions',
          type: 'textarea',
          label: 'تعليمات إضافية',
        },
      ],
    },

    {
      name: 'attachments',
      type: 'array',
      label: 'المرفقات',
      labels: {
        singular: 'مرفق',
        plural: 'المرفقات',
      },
      access: {
        read: checkRole(['admin', 'doctor']),
        update: checkRole(['admin', 'doctor']),
      },
      fields: [
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media', // make sure you have a media collection
          label: 'الملف',
        },
        {
          name: 'description',
          type: 'text',
          label: 'وصف الملف',
        },
      ],
    },
    {
      name: 'followUpRequired',
      type: 'checkbox',
      defaultValue: false,
      label: 'متابعة مطلوبة',
    },
    {
      name: 'followUpDate',
      type: 'date',
      label: 'تاريخ المتابعة',
      admin: {
        condition: (data) => Boolean(data?.followUpRequired),
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'completedAt',
      type: 'date',
      label: 'تاريخ إكمال الاستشارة',
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
  ],
}
