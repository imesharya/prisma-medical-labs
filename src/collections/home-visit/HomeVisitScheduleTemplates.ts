import { customRowLabel } from '@/components/admin/array-row-label/utility'
import { hasSlotOverlap } from '@/lib/checkSlotOverlap'
import type { CollectionConfig, PayloadRequest } from 'payload'

export const HomeVisitScheduleTemplates: CollectionConfig = {
  slug: 'home-visit-schedule-templates',
  labels: {
    singular: 'جدول مواعيد الزيارة المنزلية',
    plural: 'جداول مواعيد الزيارة المنزلية',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'startDate', 'endDate', 'lastGeneratedAt', 'updatedAt'],
    group: 'الزيارات المنزلية',
    description: 'قم بإنشاء نموذج أسبوعي للمواعيد ثم توليده تلقائياً',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'اسم النموذج',
      admin: { description: 'مثال: جدول العيادة الصباحي - رمضان 2026' },
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      label: 'تاريخ البدء',
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'yyyy-MM-dd' },
        description: 'أول يوم يبدأ فيه تطبيق النموذج',
      },
    },
    {
      name: 'endDate',
      type: 'date',
      required: true,
      label: 'تاريخ الانتهاء',
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'yyyy-MM-dd' },
        description: 'آخر يوم ينتهي فيه تطبيق النموذج',
      },
    },

    /* ────── Schedule Array (unchanged) ────── */
    {
      name: 'schedule',
      type: 'array',
      required: true,
      labels: { singular: 'جدول يوم', plural: 'جداول يومية' },
      label: 'الجدول الأسبوعي',
      admin: {
        description: 'حدد أيام الأسبوع وفترات الوقت المتاحة لكل يوم',
        ...customRowLabel({
          fieldToUse: 'جدول يوم {{dayOfWeek}}',
          template: true,
          fallbackLabel: 'جدول يوم {{index}}',
        }),
      },
      fields: [
        {
          name: 'dayOfWeek',
          type: 'select',
          required: true,
          label: 'اليوم',
          options: [
            { label: 'الأحد', value: '0' },
            { label: 'الإثنين', value: '1' },
            { label: 'الثلاثاء', value: '2' },
            { label: 'الأربعاء', value: '3' },
            { label: 'الخميس', value: '4' },
            { label: 'الجمعة', value: '5' },
            { label: 'السبت', value: '6' },
          ],
        },
        {
          name: 'timeSlots',
          type: 'array',
          required: true,
          labels: { singular: 'فترة زمنية', plural: 'فترات زمنية' },
          label: 'الفترات الزمنية',
          admin: {
            ...customRowLabel({
              fieldToUse: 'فترة {{startTime|time}} - {{endTime|time}}',
              template: true,
              fallbackLabel: 'فترة {{index}}',
            }),
          },
          fields: [
            {
              name: 'startTime',
              type: 'date',
              required: true,
              label: 'وقت البدء',
              admin: { date: { pickerAppearance: 'timeOnly' } },
            },
            {
              name: 'endTime',
              type: 'date',
              required: true,
              label: 'وقت الانتهاء',
              admin: { date: { pickerAppearance: 'timeOnly' } },
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
            },
          ],
        },
      ],
    },

    /* ────── New: Last Generated Timestamp ────── */
    {
      name: 'lastGeneratedAt',
      type: 'date',
      label: 'آخر توليد',
      admin: {
        position: 'sidebar',
        date: { displayFormat: 'yyyy-MM-dd HH:mm' },
        readOnly: true,
        description: 'يتم تحديثه تلقائياً بعد كل عملية توليد ناجحة',
      },
    },

    /* ────── Generation Panel ────── */
    {
      name: 'scheduleGenerator',
      type: 'ui',
      admin: {
        components: {
          Field: '@/components/admin/HomeVisitScheduleGenerator',
        },
      },
    },
  ],

  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data?.startDate && data?.endDate) {
          const start = new Date(data.startDate).getTime()
          const end = new Date(data.endDate).getTime()
          if (end < start) {
            throw new Error('تاريخ الانتهاء يجب أن يكون بعد تاريخ البدء')
          }
        }
        return data
      },
    ],
  },

  endpoints: [
    {
      path: '/:id/generate',
      method: 'post',
      handler: async (req: PayloadRequest) => {
        if (!req.user) return Response.json({ error: 'غير مصرح' }, { status: 401 })

        const id = req.routeParams?.id as string
        if (!id) return Response.json({ error: 'معرف النموذج مطلوب' }, { status: 400 })

        let preview = false

        if (typeof req.json === 'function') {
          try {
            const body = await req.json()
            preview = !!body?.preview
          } catch {
            // ignore invalid JSON
          }
        }

        const template = await req.payload.findByID({
          collection: 'home-visit-schedule-templates',
          id,
        })

        if (!template) return Response.json({ error: 'النموذج غير موجود' }, { status: 404 })

        const start = new Date(template.startDate as string)
        const end = new Date(template.endDate as string)

        const created: any[] = []
        const skipped: Array<{ date: string; startTime: string; endTime: string }> = []

        let cursor = new Date(start)
        let totalProcessed = 0

        while (cursor <= end) {
          const dayOfWeek = cursor.getDay().toString()
          const daySchedules = ((template.schedule as any[]) || []).filter(
            (s) => s.dayOfWeek === dayOfWeek,
          )

          for (const daySchedule of daySchedules) {
            for (const timeSlot of (daySchedule.timeSlots as any[]) || []) {
              totalProcessed++

              const slotStart = new Date(cursor)
              const s = new Date(timeSlot.startTime)
              slotStart.setHours(s.getHours(), s.getMinutes(), 0, 0)

              const slotEnd = new Date(cursor)
              const e = new Date(timeSlot.endTime)
              slotEnd.setHours(e.getHours(), e.getMinutes(), 0, 0)

              const dateStr = cursor.toISOString().split('T')[0]
              const sIso = slotStart.toISOString()
              const eIso = slotEnd.toISOString()

              // === Uses the exact same abstracted logic ===
              const hasOverlap = await hasSlotOverlap({
                payload: req.payload,
                date: dateStr,
                newStartTime: slotStart,
                newEndTime: slotEnd,
                // no excludeSlotId because we are only creating new slots
              })
              // ===========================================

              if (hasOverlap) {
                skipped.push({ date: dateStr, startTime: sIso, endTime: eIso })
              } else if (!preview) {
                const slot = await req.payload.create({
                  collection: 'home-visit-time-slots',
                  data: {
                    date: dateStr,
                    startTime: sIso,
                    endTime: eIso,
                    maxCapacity: timeSlot.maxCapacity,
                    availabilityStatus: 'available',
                    autoCloseWhenFull: timeSlot.autoCloseWhenFull,
                  },
                  user: req.user,
                })
                created.push(slot)
              }
            }
          }
          cursor.setDate(cursor.getDate() + 1)
        }

        if (!preview) {
          await req.payload.update({
            collection: 'home-visit-schedule-templates',
            id,
            data: { lastGeneratedAt: new Date().toISOString() },
            user: req.user,
          })
        }

        const totalDays = Math.ceil((end.getTime() - start.getTime()) / 86400000) + 1

        if (preview) {
          return Response.json({
            preview: true,
            estimatedCreated: totalProcessed - skipped.length,
            estimatedSkipped: skipped.length,
            totalDays,
            message: `سيتم إنشاء ${totalProcessed - skipped.length} موعد جديد وتخطي ${skipped.length} بسبب التداخل`,
          })
        }

        return Response.json({
          message: 'تم إنشاء المواعيد بنجاح',
          created: created.length,
          skipped: skipped.length,
          totalDays,
          slots: created.map((s) => ({
            id: s.id,
            date: s.date,
            startTime: s.startTime,
            endTime: s.endTime,
          })),
        })
      },
    },
  ],
}
