import type { CollectionConfig } from 'payload'

export const HomeVisitRequests: CollectionConfig = {
  slug: 'home-visit-requests',
  labels: {
    singular: 'طلب زيارة منزلية',
    plural: 'طلبات الزيارات المنزلية',
  },
  admin: {
    useAsTitle: 'referenceNumber',
    defaultColumns: ['fullName', 'phoneNumber', 'date', 'slot', 'status'],
    group: 'الزيارات المنزلية',
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
      name: 'slot',
      type: 'relationship',
      relationTo: 'home-visit-time-slots',
      required: true,
      label: 'الفترة الزمنية',
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
      hooks: {
        beforeChange: [
          ({ operation, data }) => {
            if (operation === 'create' && data && !data.referenceNumber) {
              const rand = Math.random().toString(36).substring(2, 5).toUpperCase()
              const ts = Date.now().toString(36).toUpperCase()
              return `CONS-${rand}${ts}`
            }
            return data?.referenceNumber
          },
        ],
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation, originalDoc }) => {
        if (!data?.slot) return data

        const slotId = typeof data.slot === 'string' ? data.slot : data.slot.id
        if (!slotId) return data

        const slot = await req.payload.findByID({
          collection: 'home-visit-time-slots',
          id: slotId,
        })

        if (!slot) {
          throw new Error('الموعد المحدد غير موجود')
        }

        // Sync date from slot
        data.date = slot.date

        const slotChanged =
          operation === 'create' ||
          (operation === 'update' && originalDoc?.slot?.toString() !== slotId)

        if (slotChanged) {
          if (slot.availabilityStatus !== 'available') {
            throw new Error('هذا الموعد غير متاح للحجز حالياً')
          }

          const existing = await req.payload.find({
            collection: 'home-visit-requests',
            where: {
              slot: { equals: slotId },
              status: { not_equals: 'cancelled' },
            },
            limit: 1000,
          })

          if (existing.docs.length >= slot.maxCapacity) {
            throw new Error('هذا الموعد ممتلئ. يرجى اختيار موعد آخر.')
          }
        }

        return data
      },
    ],
    afterChange: [
      // Auto-close when full / reopen when space frees up
      async ({ doc, req }) => {
        if (!doc.slot) return

        const slotId = typeof doc.slot === 'string' ? doc.slot : doc.slot.id
        if (!slotId) return

        const slot = await req.payload.findByID({
          collection: 'home-visit-time-slots',
          id: slotId,
        })

        if (!slot) return

        const bookings = await req.payload.find({
          collection: 'home-visit-requests',
          where: {
            slot: { equals: slotId },
            status: { not_equals: 'cancelled' },
          },
          limit: 1000,
          depth: 0,
        })

        const isFull = bookings.docs.length >= slot.maxCapacity

        if (isFull && slot.autoCloseWhenFull && slot.availabilityStatus === 'available') {
          await req.payload.update({
            collection: 'home-visit-time-slots',
            id: slotId,
            data: { availabilityStatus: 'full' },
            user: req.user,
          })
        } else if (!isFull && slot.availabilityStatus === 'full') {
          await req.payload.update({
            collection: 'home-visit-time-slots',
            id: slotId,
            data: { availabilityStatus: 'available' },
            user: req.user,
          })
        }
      },
    ],
  },
}
