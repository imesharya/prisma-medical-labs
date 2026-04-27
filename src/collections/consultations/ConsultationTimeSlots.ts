import { hasSlotOverlap } from '@/lib/checkSlotOverlap'
import type { CollectionConfig } from 'payload'

export const ConsultationTimeSlots: CollectionConfig = {
  slug: 'consultation-time-slots',
  labels: {
    singular: 'موعد إستشارة',
    plural: 'مواعيد الإستشارات',
  },
  admin: {
    useAsTitle: 'displayTitle',
    defaultColumns: [
      'date',
      'startTime',
      'endTime',
      'maxCapacity',
      'availabilityStatus',
      'updatedAt',
    ],
    group: 'الإستشارات',
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'التاريخ',
      index: true,
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'EEEE, MMMM d, yyyy' },
      },
    },
    {
      name: 'startTime',
      type: 'date',
      required: true,
      label: 'وقت البدء',
      admin: {
        date: { pickerAppearance: 'timeOnly', displayFormat: 'hh:mm a' },
      },
    },
    {
      name: 'endTime',
      type: 'date',
      required: true,
      label: 'وقت الانتهاء',
      admin: {
        date: { pickerAppearance: 'timeOnly', displayFormat: 'hh:mm a' },
      },
    },
    {
      name: 'maxCapacity',
      type: 'number',
      required: true,
      defaultValue: 1,
      min: 1,
      label: 'السعة القصوى',
    },
    {
      name: 'autoCloseWhenFull',
      type: 'checkbox',
      defaultValue: false,
      label: 'إغلاق تلقائي عند الاكتمال',
      admin: { description: 'عند الوصول للسعة القصوى، سيتم تغيير الحالة إلى "ممتلئ" تلقائياً' },
    },
    {
      name: 'availabilityStatus',
      type: 'select',
      defaultValue: 'available',
      label: 'حالة التوفر',
      options: [
        { label: 'متاح', value: 'available' },
        { label: 'ممتلئ', value: 'full' },
        { label: 'مغلق يدوياً', value: 'manually_closed' },
      ],
    },
    {
      name: 'bookedCount',
      type: 'number',
      label: 'عدد الحجوزات',
      admin: { readOnly: true, position: 'sidebar' },
      hooks: {
        afterRead: [
          async ({ data, req }) => {
            if (!data?.id) return 0
            const result = await req.payload.find({
              collection: 'consultation-requests',
              where: {
                slot: { equals: data.id },
                status: { not_equals: 'cancelled' },
              },
              limit: 1000,
              depth: 0,
            })
            return result.docs.length
          },
        ],
      },
    },
    {
      name: 'remainingCapacity',
      type: 'number',
      label: 'السعة المتبقية',
      admin: { readOnly: true, position: 'sidebar' },
      hooks: {
        afterRead: [
          async ({ data, req }) => {
            if (!data?.id) return data?.maxCapacity ?? 1
            const result = await req.payload.find({
              collection: 'consultation-requests',
              where: {
                slot: { equals: data.id },
                status: { not_equals: 'cancelled' },
              },
              limit: 1000,
              depth: 0,
            })
            return Math.max(0, (data?.maxCapacity ?? 1) - result.docs.length)
          },
        ],
      },
    },
    {
      name: 'displayTitle',
      type: 'text',
      admin: { hidden: true },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data?.date && data?.startTime && data?.endTime) {
              const d = new Intl.DateTimeFormat('ar-EG', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                timeZone: 'Asia/Riyadh',
              }).format(new Date(data.date))
              const s = new Intl.DateTimeFormat('ar-EG', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'Asia/Riyadh',
              }).format(new Date(data.startTime))
              const e = new Intl.DateTimeFormat('ar-EG', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'Asia/Riyadh',
              }).format(new Date(data.endTime))
              return `${d} | ${s} – ${e}`
            }
          },
        ],
      },
    },
    {
      name: 'bookings',
      type: 'join',
      collection: 'consultation-requests',
      on: 'slot',
      label: 'الحجوزات المرتبطة',
      admin: { allowCreate: false },
    },
  ],
  hooks: {
    beforeChange: [
      // 1. End must be after start
      ({ data }) => {
        if (data?.startTime && data?.endTime) {
          const start = new Date(data.startTime).getTime()
          const end = new Date(data.endTime).getTime()
          if (end <= start) {
            throw new Error('وقت الانتهاء يجب أن يكون بعد وقت البدء')
          }
        }
        return data
      },

      // 2. Prevent reducing capacity below current active bookings (unchanged)
      async ({ data, req, operation, originalDoc }) => {
        if (
          operation === 'update' &&
          originalDoc &&
          data.maxCapacity !== undefined &&
          data.maxCapacity < originalDoc.maxCapacity
        ) {
          const activeBookings = await req.payload.find({
            collection: 'consultation-requests',
            where: {
              slot: { equals: originalDoc.id },
              status: { not_equals: 'cancelled' },
            },
            limit: 1000,
          })
          if (activeBookings.docs.length > data.maxCapacity) {
            throw new Error(
              `لا يمكن تقليل السعة لأقل من ${activeBookings.docs.length} (عدد الحجوزات الحالية غير الملغاة)`,
            )
          }
        }
        return data
      },

      // 3. Prevent overlapping slots — now uses shared utility
      async ({ data, req, operation, originalDoc }) => {
        if (!data?.date || !data?.startTime || !data?.endTime) return data

        const dateString =
          typeof data.date === 'string'
            ? data.date.split('T')[0]
            : new Date(data.date).toISOString().split('T')[0]

        const hasOverlap = await hasSlotOverlap({
          payload: req.payload,
          date: dateString,
          newStartTime: data.startTime,
          newEndTime: data.endTime,
          excludeSlotId: operation === 'update' && originalDoc?.id ? originalDoc.id : undefined,
        })

        if (hasOverlap) {
          throw new Error('يوجد تداخل في المواعيد مع موعد آخر في نفس اليوم')
        }

        return data
      },
    ],
  },
}
