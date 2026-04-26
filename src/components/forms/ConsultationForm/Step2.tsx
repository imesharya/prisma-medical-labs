'use client'

import { useMemo } from 'react'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { TConsultationScheme } from '@/lib/validators/consultation-validator'
import { ConsultationTimeSlot } from '@/payload-types'
import { Controller, UseFormReturn, useWatch } from 'react-hook-form'

const TIMEZONE = 'Asia/Riyadh'

type Props = {
  form: UseFormReturn<TConsultationScheme>
  availableSlots: ConsultationTimeSlot[]
}

/** Extract YYYY-MM-DD for a given timezone */
const getDateKey = (d: Date | string, tz: string): string => {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(d))
}

/** Build 7 date strings starting from "today" in the target timezone */
const generateWeekDates = (tz: string): string[] => {
  const dates: string[] = []
  const now = new Date()
  const todayKey = getDateKey(now, tz)
  const [y, m, d] = todayKey.split('-').map(Number)

  for (let i = 0; i < 7; i++) {
    // Use noon UTC to avoid midnight-boundary drift
    const candidate = new Date(Date.UTC(y, m - 1, d + i, 12, 0, 0))
    dates.push(getDateKey(candidate, tz))
  }

  return dates
}

const Step2 = ({ form, availableSlots }: Props) => {
  const { control, setValue } = form
  const requestedDate = useWatch({ control, name: 'step2.requestedDate' })

  // Snapshot "now" once so the 1-hour gate is stable across renders
  const now = useMemo(() => new Date(), [])

  const weekDates = useMemo(() => generateWeekDates(TIMEZONE), [])

  // Group API slots by their calendar date
  const slotsByDate = useMemo(() => {
    const map = new Map<string, ConsultationTimeSlot[]>()

    availableSlots.forEach((slot) => {
      const key = getDateKey(slot.date, TIMEZONE)
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(slot)
    })

    map.forEach((slots) =>
      slots.sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()),
    )

    return map
  }, [availableSlots])

  const getSlotMeta = (slot: ConsultationTimeSlot) => {
    const slotStart = new Date(slot.startTime)
    const oneHourAhead = new Date(now.getTime() + 60 * 60 * 1000)

    if (slotStart.getTime() <= oneHourAhead.getTime()) {
      return { available: false, badge: 'انتهى', style: 'bg-gray-500/10 text-gray-500' }
    }
    if (slot.availabilityStatus === 'manually_closed') {
      return { available: false, badge: 'مغلق', style: 'bg-red-500/10 text-red-600' }
    }
    if (slot.availabilityStatus === 'full' || (slot.remainingCapacity ?? 0) <= 0) {
      return { available: false, badge: 'ممتلئ', style: 'bg-orange-500/10 text-orange-600' }
    }
    return {
      available: true,
      badge: `${slot.remainingCapacity} متبقية`,
      style: 'bg-teal-500/10 text-teal-600',
    }
  }

  const isDateEnabled = (dateKey: string): boolean => {
    const daySlots = slotsByDate.get(dateKey) ?? []
    if (daySlots.length === 0) return false
    return daySlots.some((s) => getSlotMeta(s).available)
  }

  const currentSlots = useMemo(() => {
    if (!requestedDate) return []
    return slotsByDate.get(requestedDate) ?? []
  }, [requestedDate, slotsByDate])

  const formatDateLabel = (dateKey: string) => {
    const [y, m, d] = dateKey.split('-').map(Number)
    const safeDate = new Date(Date.UTC(y, m - 1, d, 12, 0, 0))
    return new Intl.DateTimeFormat('ar-EG', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      timeZone: TIMEZONE,
    }).format(safeDate)
  }

  const formatTime = (iso: string) =>
    new Intl.DateTimeFormat('ar-EG', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: TIMEZONE,
    }).format(new Date(iso))

  return (
    <div className="space-y-8">
      <FieldGroup>
        {/* ----------------- DATE ----------------- */}
        <Controller
          control={control}
          name="step2.requestedDate"
          rules={{ required: 'الرجاء اختيار التاريخ' }}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="block mb-2 font-medium">اختر التاريخ *</FieldLabel>

              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-cyan-500/30">
                {weekDates.map((dateKey) => {
                  const enabled = isDateEnabled(dateKey)
                  const hasSlots = (slotsByDate.get(dateKey) ?? []).length > 0

                  return (
                    <label
                      key={dateKey}
                      className={enabled ? 'cursor-pointer' : 'cursor-not-allowed'}
                    >
                      <input
                        type="radio"
                        name={field.name}
                        value={dateKey}
                        checked={field.value === dateKey}
                        disabled={!enabled}
                        onChange={() => {
                          field.onChange(dateKey)
                          // Clear time slot when date changes
                          setValue('step2.requestedTimeSlot', '')
                        }}
                        className="peer hidden"
                      />
                      <div
                        className={[
                          'whitespace-nowrap border-2 px-6 py-4 rounded-3xl transition-all select-none',
                          'border-white/10 bg-white/5',
                          enabled
                            ? 'peer-checked:border-teal-500 peer-checked:bg-teal-500/10'
                            : 'opacity-50',
                        ].join(' ')}
                      >
                        <div className="text-center font-semibold mb-2">
                          {formatDateLabel(dateKey)}
                        </div>
                        <div
                          className={[
                            'text-[10px] text-center px-2 py-0.5 rounded-full',
                            enabled
                              ? 'bg-teal-500/10 text-teal-600'
                              : hasSlots
                                ? 'bg-red-500/10 text-red-600'
                                : 'bg-gray-500/10 text-gray-500',
                          ].join(' ')}
                        >
                          {enabled ? 'متاح' : hasSlots ? 'غير متاح' : 'لا يوجد مواعيد'}
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

        {/* ----------------- TIME ----------------- */}
        {requestedDate && (
          <Controller
            control={control}
            name="step2.requestedTimeSlot"
            rules={{ required: 'الرجاء اختيار الموعد' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="block mb-2 font-medium">اختر الموعد *</FieldLabel>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {currentSlots.length === 0 && (
                    <div className="col-span-full text-center text-white/50 py-8">
                      لا توجد مواعيد لهذا اليوم
                    </div>
                  )}

                  {currentSlots.map((slot) => {
                    const meta = getSlotMeta(slot)

                    return (
                      <label
                        key={slot.id}
                        className={meta.available ? 'cursor-pointer' : 'cursor-not-allowed'}
                      >
                        <input
                          type="radio"
                          name={field.name}
                          value={slot.id}
                          checked={field.value === slot.id}
                          disabled={!meta.available}
                          onChange={() => field.onChange(slot.id)}
                          className="peer hidden"
                        />
                        <div
                          className={[
                            'relative whitespace-nowrap border-2 p-4 rounded-3xl transition-all select-none',
                            'border-white/10 bg-white/5',
                            meta.available
                              ? 'peer-checked:border-teal-500 peer-checked:bg-teal-500/10'
                              : 'opacity-50 grayscale',
                          ].join(' ')}
                        >
                          <div className="text-lg text-center font-semibold">
                            {formatTime(slot.startTime)} – {formatTime(slot.endTime)}
                          </div>
                          <div
                            className={[
                              'text-[10px] text-center mt-2 px-3 py-1 rounded-full font-medium',
                              meta.style,
                            ].join(' ')}
                          >
                            {meta.badge}
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
        )}
      </FieldGroup>
    </div>
  )
}

export default Step2
