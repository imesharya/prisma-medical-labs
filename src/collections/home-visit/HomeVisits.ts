import type { CollectionConfig } from 'payload'

export const HomeVisits: CollectionConfig = {
  slug: 'home-visits',
  labels: {
    singular: 'زيارة منزلية',
    plural: 'الزيارات المنزلية',
  },
  admin: {
    useAsTitle: 'homeVisitRequest',
    defaultColumns: ['homeVisitRequest', 'status', 'completedAt', 'createdAt'],
    group: 'الزيارات المنزلية',
  },
  fields: [
    {
      name: 'homeVisitRequest',
      type: 'relationship',
      relationTo: 'home-visit-requests',
      required: true,
      unique: true,
      label: 'طلب الزيارة المرتبط',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'scheduled',
      label: 'حالة الزيارة',
      options: [
        { label: 'مجدولة', value: 'scheduled' },
        { label: 'جارية', value: 'in_progress' },
        { label: 'مكتملة', value: 'completed' },
        { label: 'ملغاة', value: 'cancelled' },
      ],
    },
    {
      name: 'chiefComplaint',
      type: 'textarea',
      label: 'الشكوى الرئيسية',
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'ملاحظات الطبيب',
    },
    {
      name: 'diagnosis',
      type: 'textarea',
      label: 'التشخيص',
    },
    {
      name: 'treatmentPlan',
      type: 'textarea',
      label: 'خطة العلاج',
    },
    {
      name: 'prescriptions',
      type: 'array',
      label: 'الوصفات الطبية',
      labels: {
        singular: 'وصفة طبية',
        plural: 'الوصفات الطبية',
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
      label: 'تاريخ إكمال الزيارة',
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
  ],
}
