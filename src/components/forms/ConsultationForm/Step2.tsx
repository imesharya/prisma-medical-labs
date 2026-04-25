'use client'

import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { TConsultationScheme } from '@/lib/validators/consultation-validator'
import { Consultation } from '@/payload-types'
import { useMemo, useEffect } from 'react'
import { Controller, UseFormReturn, useWatch } from 'react-hook-form'

type Props = {
  form: UseFormReturn<TConsultationScheme>
  activeConsultations: Consultation[]
}

const Step2 = ({ form, activeConsultations }: Props) => {
  const { control, setValue, trigger } = form

  /* -------------------------------------------------- */
  /* 1.  buildSlotsFor – unchanged                      */
  /* -------------------------------------------------- */
  const buildSlotsFor = (day: Date) => {
    const selectedDay = new Date(day)
    selectedDay.setHours(0, 0, 0, 0)

    const now = new Date()
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const isToday = selectedDay.getTime() === today.getTime()

    let startHour = 9
    if (isToday) {
      const nextHour = new Date(now)
      nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0)
      startHour = Math.max(9, nextHour.getHours())
    }

    const slots: { startTime: Date; endTime: Date }[] = []
    for (let h = startHour; h < 17; h++) {
      const start = new Date(selectedDay)
      start.setHours(h, 0, 0, 0)
      const end = new Date(selectedDay)
      end.setHours(h + 1, 0, 0, 0)
      slots.push({ startTime: start, endTime: end })
    }
    return slots
  }

  /* -------------------------------------------------- */
  /* 2.  isSlotBooked  –  NEW                           */
  /* -------------------------------------------------- */
  const isSlotBooked = (start: Date, end: Date) =>
    activeConsultations.some((c) => {
      if (c.status === 'cancelled') return false
      const cStart = new Date(c.date) // already a full date string
      const cEnd = new Date(c.time) // already a full date string (end-time)
      return cStart < end && cEnd > start // overlap
    })

  /* -------------------------------------------------- */
  /* 3.  isDayFullyBooked  –  NEW                       */
  /* -------------------------------------------------- */
  const isDayFullyBooked = (day: Date) => {
    const slots = buildSlotsFor(day)
    if (!slots.length) return true
    return slots.every((s) => isSlotBooked(s.startTime, s.endTime))
  }

  /* -------------------------------------------------- */
  /* 4.  validDates – unchanged                         */
  /* -------------------------------------------------- */
  const validDates = useMemo(() => {
    const dates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date()
      d.setDate(d.getDate() + i)
      d.setHours(0, 0, 0, 0)
      return d
    })
    return dates.filter((d) => buildSlotsFor(d).length > 0)
  }, [])

  /* -------------------------------------------------- */
  /* 5.  requestedDate + timeSlots – unchanged          */
  /* -------------------------------------------------- */
  const requestedDate = useWatch({ control, name: 'step2.requestedDate' })

  const timeSlots = useMemo(() => {
    if (!requestedDate) return []
    return buildSlotsFor(new Date(requestedDate))
  }, [requestedDate])

  /* -------------------------------------------------- */
  /* 6.  clear slot on day change – unchanged           */
  /* -------------------------------------------------- */
  useEffect(() => {
    form.resetField('step2.requestedTimeSlot', { defaultValue: '' })
  }, [requestedDate])

  /* -------------------------------------------------- */
  /* 7.  formatters – unchanged                         */
  /* -------------------------------------------------- */
  const formatDate = (d: Date) =>
    new Intl.DateTimeFormat('ar-EG', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(d)

  const formatTime = (d: Date) =>
    new Intl.DateTimeFormat('ar-EG', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
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
                  const iso = d.toISOString()
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
                        {/* badge */}
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
                  const iso = slot.startTime.toISOString()
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
                        {/* badge */}
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
