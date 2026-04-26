'use client'

import { useMemo } from 'react'
import { TConsultationScheme } from '@/lib/validators/consultation-validator'
import { ConsultationTimeSlot } from '@/payload-types'
import { UseFormReturn, useWatch, Controller } from 'react-hook-form'

const TIMEZONE = 'Asia/Riyadh'

type Props = {
  form: UseFormReturn<TConsultationScheme>
  availableSlots: ConsultationTimeSlot[]
}

const getDateKey = (d: Date | string, tz: string): string => {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(d))
}

const Step3 = ({ form, availableSlots }: Props) => {
  const { control } = form

  const fullName = useWatch({ control, name: 'step1.fullName' })
  const phoneNumber = useWatch({ control, name: 'step1.phoneNumber' })
  const consultationType = useWatch({ control, name: 'step1.consultationType' })
  const requestedDate = useWatch({ control, name: 'step2.requestedDate' })
  const requestedTimeSlot = useWatch({ control, name: 'step2.requestedTimeSlot' })

  const selectedSlot = useMemo(
    () => availableSlots.find((s) => s.id === requestedTimeSlot),
    [availableSlots, requestedTimeSlot],
  )

  const formatDateLabel = (dateKey: string) => {
    if (!dateKey) return '—'
    const [y, m, d] = dateKey.split('-').map(Number)
    const safeDate = new Date(Date.UTC(y, m - 1, d, 12, 0, 0))
    return new Intl.DateTimeFormat('ar-EG', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      timeZone: TIMEZONE,
    }).format(safeDate)
  }

  const formatTime = (iso: string | undefined | null) => {
    if (!iso) return '—'
    return new Intl.DateTimeFormat('ar-EG', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: TIMEZONE,
    }).format(new Date(iso))
  }

  return (
    <div className="space-y-8">
      <div className="bg-teal-500/5 border border-teal-500/20 rounded-2xl p-6">
        <h3 className="font-semibold mb-4">ملخص الحجز</h3>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-[#a8b5c3]">الاسم</span>
            <span>{fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a8b5c3]">رقم الجوال</span>
            <span>{phoneNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a8b5c3]">نوع الاستشارة</span>
            <span>{consultationType === 'pre_analysis' ? 'ما قبل التحليل' : 'شرح النتائج'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a8b5c3]">التاريخ</span>
            <span>
              {selectedSlot
                ? formatDateLabel(getDateKey(selectedSlot.date, TIMEZONE))
                : formatDateLabel(requestedDate)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a8b5c3]">الموعد</span>
            <span>
              {selectedSlot
                ? `${formatTime(selectedSlot.startTime)} – ${formatTime(selectedSlot.endTime)}`
                : '—'}
            </span>
          </div>
        </div>
      </div>

      <Controller
        control={control}
        name="step3.agree"
        rules={{ required: 'يجب الموافقة على الشروط والأحكام' }}
        render={({ field, fieldState }) => (
          <div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 accent-teal-500"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm text-[#a8b5c3]">
                أوافق على{' '}
                <a href="#" className="text-cyan-400 hover:text-teal-400">
                  سياسة الخصوصية
                </a>{' '}
                و{' '}
                <a href="#" className="text-cyan-400 hover:text-teal-400">
                  شروط الخدمة
                </a>
              </label>
            </div>
            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
            )}
          </div>
        )}
      />
    </div>
  )
}

export default Step3
