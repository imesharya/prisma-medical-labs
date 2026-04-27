'use client'

import { homeVisitSchema, THomeVisitScheme } from '@/lib/validators/home-visit-validator'
import { useMemo, useState } from 'react'
import { useForm, Controller, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { submitHomeVisitForm } from '@/actions/booking/home-visit'

const TIMEZONE = 'Asia/Riyadh'

type HomeVisitTimeSlot = {
  id: string
  date: string
  startTime: string
  endTime: string
  maxCapacity: number
  autoCloseWhenFull?: boolean | null
  availabilityStatus?: ('available' | 'full' | 'manually_closed') | null
  bookedCount?: number | null
  remainingCapacity?: number | null
  displayTitle?: string | null
  updatedAt: string
  createdAt: string
}

type Props = {
  availableSlots: HomeVisitTimeSlot[]
}

const getDateKey = (d: Date | string, tz: string): string => {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(d))
}

const generateWeekDates = (tz: string): string[] => {
  const dates: string[] = []
  const now = new Date()
  const todayKey = getDateKey(now, tz)
  const [y, m, d] = todayKey.split('-').map(Number)

  for (let i = 0; i < 7; i++) {
    const candidate = new Date(Date.UTC(y, m - 1, d + i, 12, 0, 0))
    dates.push(getDateKey(candidate, tz))
  }

  return dates
}

const HomeVisitForm = ({ availableSlots }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState('')
  const [serverError, setServerError] = useState('')

  const form = useForm<THomeVisitScheme>({
    resolver: zodResolver(homeVisitSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      requestedDate: '',
      requestedTimeSlot: '',
    },
  })

  const { control, setValue, handleSubmit } = form
  const requestedDate = useWatch({ control, name: 'requestedDate' })
  const requestedTimeSlot = useWatch({ control, name: 'requestedTimeSlot' })

  const now = useMemo(() => new Date(), [])
  const weekDates = useMemo(() => generateWeekDates(TIMEZONE), [])

  const slotsByDate = useMemo(() => {
    const map = new Map<string, HomeVisitTimeSlot[]>()
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

  const getSlotMeta = (slot: HomeVisitTimeSlot) => {
    const slotStart = new Date(slot.startTime)
    const oneHourAhead = new Date(now.getTime() + 60 * 60 * 1000)

    if (slotStart.getTime() <= oneHourAhead.getTime()) {
      return { available: false, badge: 'انتهى', style: 'bg-gray-200 text-gray-600' }
    }
    if (slot.availabilityStatus === 'manually_closed') {
      return { available: false, badge: 'مغلق', style: 'bg-red-100 text-red-700' }
    }
    if (slot.availabilityStatus === 'full' || (slot.remainingCapacity ?? 0) <= 0) {
      return { available: false, badge: 'ممتلئ', style: 'bg-orange-100 text-orange-700' }
    }
    return {
      available: true,
      badge: `${slot.remainingCapacity} متبقية`,
      style: 'bg-teal-100 text-teal-800',
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

  const onSubmit = async (data: THomeVisitScheme) => {
    setIsLoading(true)
    setServerError('')

    try {
      const result = await submitHomeVisitForm(data)

      if (result.success) {
        setReferenceNumber(result.referenceNumber)
        setIsSuccess(true)
      } else {
        if (result.code === 'ERROR_INVALID_INPUT') {
          setServerError('البيانات المدخلة غير صحيحة. يرجى التحقق من الحقول.')
        } else if (result.code === 'ERROR_DOUBLE_BOOKING') {
          setServerError('هذا الموعد محجوز بالفعل. يرجى اختيار موعد آخر.')
        } else {
          setServerError('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.')
        }
      }
    } catch (error: any) {
      setServerError(error.message || 'حدث خطأ في الاتصال بالخادم.')
    } finally {
      setIsLoading(false)
    }
  }

  // Build WhatsApp message and link
  const buildWhatsAppLink = () => {
    const fullName = form.getValues('fullName') || ''
    const phone = form.getValues('phoneNumber') || ''
    const date = requestedTimeSlot
      ? new Intl.DateTimeFormat('ar-EG', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
        }).format(new Date(requestedTimeSlot))
      : ''
    const time = selectedSlot
      ? `${formatTime(selectedSlot.startTime)} – ${formatTime(selectedSlot.endTime)}`
      : ''

    const message = `السلام عليكم ورحمة الله وبركاته

تم تأكيد حجز الزيارة المنزلية بنجاح

الاسم: ${fullName}
رقم الجوال: ${phone}

التاريخ: ${date}
الوقت: ${time}

رقم الحجز: ${referenceNumber}

أرجو التكرم بالتواصل معي للتأكيد النهائي.
`

    const encodedMessage = encodeURIComponent(message)

    return `https://wa.me/+966920031642?text=${encodedMessage}`
  }

  return (
    <section className="relative max-w-3xl mx-auto px-2 md:px-4 pb-16" id="form-sec">
      <div className="bg-background border border-gray-200 rounded-2xl p-8 md:p-12 shadow-xl">
        {!isSuccess ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">طلب زيارة منزلية</h2>
              <p className="text-gray-500 text-sm">
                أدخل بياناتك واختر الموعد المناسب وسنتواصل معك للتأكيد
              </p>
            </div>

            <FieldGroup className="space-y-8">
              {/* Full Name */}
              <Controller
                control={control}
                name="fullName"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="fullName" className="block mb-2 font-medium text-gray-700">
                      الاسم الكامل *
                    </FieldLabel>
                    <Input
                      {...field}
                      id="fullName"
                      aria-invalid={fieldState.invalid}
                      placeholder="أدخل اسمك الكامل"
                      autoComplete="name"
                      className="h-12 w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500 focus-visible:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-400 text-right"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              {/* Phone Number */}
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="phoneNumber"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      رقم الجوال *
                    </FieldLabel>
                    <Input
                      {...field}
                      id="phoneNumber"
                      aria-invalid={fieldState.invalid}
                      placeholder="05xxxxxxxx"
                      autoComplete="tel"
                      className="h-12 w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500 focus-visible:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              {/* ----------------- DATE ----------------- */}
              <Controller
                control={control}
                name="requestedDate"
                rules={{ required: 'الرجاء اختيار التاريخ' }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="block mb-2 font-medium text-gray-700">
                      اختر التاريخ *
                    </FieldLabel>

                    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300">
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
                                setValue('requestedTimeSlot', '')
                              }}
                              className="peer hidden"
                            />
                            <div
                              className={[
                                'whitespace-nowrap border-2 px-6 py-4 rounded-3xl transition-all select-none',
                                'bg-white border-gray-200 text-gray-900',
                                enabled
                                  ? 'peer-checked:border-teal-500 peer-checked:bg-teal-50 peer-checked:text-teal-900 hover:border-gray-300'
                                  : 'opacity-50 bg-gray-100',
                              ].join(' ')}
                            >
                              <div className="text-center font-semibold mb-2">
                                {formatDateLabel(dateKey)}
                              </div>
                              <div
                                className={[
                                  'text-[10px] text-center px-2 py-0.5 rounded-full font-medium',
                                  enabled
                                    ? 'bg-teal-100 text-teal-800'
                                    : hasSlots
                                      ? 'bg-red-100 text-red-700'
                                      : 'bg-gray-200 text-gray-600',
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
                  name="requestedTimeSlot"
                  rules={{ required: 'الرجاء اختيار الموعد' }}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel className="block mb-2 font-medium text-gray-700">
                        اختر الموعد *
                      </FieldLabel>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {currentSlots.length === 0 && (
                          <div className="col-span-full text-center text-gray-400 py-8 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
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
                                  'bg-white border-gray-200 text-gray-900',
                                  meta.available
                                    ? 'peer-checked:border-teal-500 peer-checked:bg-teal-50 peer-checked:text-teal-900 hover:border-gray-300'
                                    : 'opacity-50 bg-gray-100',
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

            {serverError && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p>{serverError}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 transition-opacity text-white"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  جاري الإرسال... <Loader2 className="w-4 h-4 animate-spin" />
                </span>
              ) : (
                'تأكيد الطلب'
              )}
            </Button>
          </form>
        ) : (
          <div className="text-center py-12 relative overflow-hidden">
            {/* Animated Checkmark */}
            <div className="mx-auto w-32 h-32 relative mb-8">
              <div className="absolute inset-0 border-4 border-green-200 rounded-full animate-[ping_1.5s_ease-out_infinite]" />
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                <svg width="70" height="70" viewBox="0 0 52 52" className="text-white">
                  <path
                    className="check-path"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 27l10 10 16-20"
                  />
                </svg>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
              تم التأكيد
            </div>

            <h2 className="text-3xl font-bold mb-3 text-gray-900">تم حجز زيارتك المنزلية بنجاح</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              سيتواصل معك فريقنا في أقرب وقت لتحديد التفاصيل النهائية
            </p>

            {referenceNumber && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 font-mono text-green-800">
                رقم الطلب: <span className="font-bold">{referenceNumber}</span>
              </div>
            )}

            {selectedSlot && (
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-8 space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-500">التاريخ</span>
                  <span className="font-medium">
                    {formatDateLabel(getDateKey(selectedSlot.date, TIMEZONE))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">الوقت</span>
                  <span className="font-medium">
                    {formatTime(selectedSlot.startTime)} – {formatTime(selectedSlot.endTime)}
                  </span>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="bg-[#25D366] hover:bg-[#128C7E] w-full text-lg py-6">
                  استلم التأكيد عبر واتساب
                </Button>
              </a>

              <Link href="/">
                <Button
                  variant="secondary"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900"
                  onClick={() => window.location.reload()}
                >
                  العودة للرئيسية
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HomeVisitForm
