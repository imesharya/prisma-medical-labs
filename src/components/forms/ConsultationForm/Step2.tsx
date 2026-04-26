'use client'

import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { TConsultationScheme } from '@/lib/validators/consultation-validator'
import { ConsultationRequest } from '@/payload-types'
import { useMemo, useEffect } from 'react'
import { Controller, UseFormReturn, useWatch } from 'react-hook-form'
import { toClinicISO, fromClinicISO } from '@/lib/utils'

type Props = {
  form: UseFormReturn<TConsultationScheme>
  activeConsultations: ConsultationRequest[]
}

const Step2 = ({ form, activeConsultations }: Props) => {
  const { control } = form

  /* -------------------------------------------------- */
  /* 1.  buildSlotsFor     */
  /* -------------------------------------------------- */
  const buildSlotsFor = (day: Date) => {
    // day arrives as a Date representing midnight in clinic time
    const startHour = 9
    const slots: { startTime: Date; endTime: Date; iso: string }[] = []

    for (let h = startHour; h < 17; h++) {
      const start = new Date(day)
      start.setHours(h, 0, 0, 0)
      const end = new Date(day)
      end.setHours(h + 1, 0, 0, 0)
      slots.push({
        startTime: start,
        endTime: end,
        iso: toClinicISO(start), // ← explicit +03:00 offset
      })
    }
    return slots
  }

  /* -------------------------------------------------- */
  /* 2.  isSlotBooked – FIXED                           */
  /* -------------------------------------------------- */
  const isSlotBooked = (slotStart: Date, slotEnd: Date) =>
    activeConsultations.some((c) => {
      if (c.status === 'cancelled') return false

      // c.date = dayOnly value, c.time = actual appointment start (both ISO strings)
      const apptStart = fromClinicISO(c.time as string) // appointment start datetime
      const apptEnd = new Date(apptStart)
      apptEnd.setHours(apptStart.getHours() + 1) // assume 1-hour slots

      // standard interval overlap: [apptStart, apptEnd) vs [slotStart, slotEnd)
      return apptStart < slotEnd && apptEnd > slotStart
    })

  /* -------------------------------------------------- */
  /* 3.  isDayFullyBooked                               */
  /* -------------------------------------------------- */
  const isDayFullyBooked = (day: Date) => {
    const slots = buildSlotsFor(day)
    if (!slots.length) return true
    return slots.every((s) => isSlotBooked(s.startTime, s.endTime))
  }

  /* -------------------------------------------------- */
  /* 4.  validDates                                     */
  /* -------------------------------------------------- */
  const validDates = useMemo(() => {
    const dates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date()
      d.setDate(d.getDate() + i)
      d.setHours(0, 0, 0, 0)
      return d
    })
    // Filter out today if it's past 4 PM (no slots left)
    return dates.filter((d) => buildSlotsFor(d).length > 0)
  }, [])

  /* -------------------------------------------------- */
  /* 5.  requestedDate + timeSlots                      */
  /* -------------------------------------------------- */
  const requestedDate = useWatch({ control, name: 'step2.requestedDate' })

  const timeSlots = useMemo(() => {
    if (!requestedDate) return []
    // Parse back from the offset string to a Date for display logic
    return buildSlotsFor(fromClinicISO(requestedDate))
  }, [requestedDate])

  /* -------------------------------------------------- */
  /* 6.  clear slot on day change                       */
  /* -------------------------------------------------- */
  useEffect(() => {
    form.resetField('step2.requestedTimeSlot', { defaultValue: '' })
  }, [requestedDate])

  /* -------------------------------------------------- */
  /* 7.  formatters                                     */
  /* -------------------------------------------------- */
  const formatDate = (d: Date) =>
    new Intl.DateTimeFormat('ar-EG', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      timeZone: 'Asia/Riyadh',
    }).format(d)

  const formatTime = (d: Date) =>
    new Intl.DateTimeFormat('ar-EG', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Riyadh',
    }).format(d)

  const badgeText = (booked: boolean) => (booked ? 'محجوز' : 'متاح')

  /* -------------------------------------------------- */
  /* 8.  render                                         */
  /* -------------------------------------------------- */
  return (
    <div className="space-y-8">
      <FieldGroup>
        {/* -----------------  DATE  ----------------- */}
        <Controller
          control={control}
          name="step2.requestedDate"
          rules={{ required: 'الرجاء اختيار التاريخ' }}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="block mb-2 font-medium">اختر التاريخ *</FieldLabel>

              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-cyan-500/30">
                {validDates.map((d) => {
                  const iso = toClinicISO(d) // ← explicit offset
                  const fullyBooked = isDayFullyBooked(d)
                  return (
                    <label
                      key={iso}
                      className={`cursor-pointer relative ${
                        fullyBooked ? 'opacity-40 cursor-not-allowed' : ''
                      }`}
                    >
                      <input
                        {...field}
                        type="radio"
                        value={iso}
                        checked={field.value === iso}
                        disabled={fullyBooked}
                        required
                        className="peer hidden"
                      />
                      <div
                        className={`whitespace-nowrap peer-checked:border-teal-500 peer-checked:bg-teal-500/10 border-2 border-white/10 bg-white/5 px-6 py-4 rounded-3xl transition-all`}
                      >
                        <div className="text-center font-semibold mb-2">{formatDate(d)}</div>
                        <div className="text-[10px] text-center px-2 py-0.5 rounded-full bg-white/10">
                          {badgeText(fullyBooked)}
                        </div>
                      </div>
                    </label>
                  )
                })}
              </div>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* -----------------  TIME  ----------------- */}
        <Controller
          control={control}
          name="step2.requestedTimeSlot"
          rules={{ required: 'الرجاء اختيار الموعد' }}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="block mb-2 font-medium">اختر الموعد *</FieldLabel>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {timeSlots.map((slot) => {
                  const iso = slot.iso // ← already formatted with offset
                  const booked = isSlotBooked(slot.startTime, slot.endTime)
                  return (
                    <label
                      key={iso}
                      className={`cursor-pointer ${booked ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      <input
                        {...field}
                        type="radio"
                        value={iso}
                        checked={field.value === iso}
                        disabled={booked}
                        required
                        className="peer hidden"
                      />
                      <div
                        className={`relative whitespace-nowrap peer-checked:border-teal-500 peer-checked:bg-teal-500/10 border-2 border-white/10 bg-white/5 p-4 rounded-3xl transition-all`}
                      >
                        <div className="text-lg text-center font-semibold">
                          {formatTime(slot.startTime)}
                        </div>
                        <div className="text-[10px] text-center mt-1 px-2 py-0.5 rounded-full bg-white/10">
                          {badgeText(booked)}
                        </div>
                      </div>
                    </label>
                  )
                })}
              </div>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </div>
  )
}

export default Step2
