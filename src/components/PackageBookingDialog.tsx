'use client'

import { useMemo, useEffect } from 'react'
import { useForm, Controller, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft } from 'lucide-react'
import SaudiPrice from '@/components/shared/SaudiPrice'
import { Package } from '@/payload-types'
import { ConsultationRequest } from '@/payload-types'
import { Field, FieldLabel, FieldError, FieldGroup } from '@/components/ui/field'

/* -------------------------------------------------- */
/* 1.  schema (mirrors consultation step2)            */
/* -------------------------------------------------- */
const bookingSchema = z.object({
  patientName: z.string().min(1, 'الرجاء إدخال الاسم'),
  patientPhone: z.string().regex(/05\d{8}/, 'رقم الجوال يجب أن يكون 05xxxxxxxx'),
  clinicBranch: z.string().optional(),
  requestedDate: z.string().min(1, 'الرجاء اختيار التاريخ'),
  requestedTimeSlot: z.string().min(1, 'الرجاء اختيار الموعد'),
})

type TForm = z.infer<typeof bookingSchema>

/* -------------------------------------------------- */
/* 2.  component props                                */
/* -------------------------------------------------- */
interface Props {
  pkg: Package
  activeConsultations?: ConsultationRequest[] // <-- same as Step2
}

export default function PackageBookingDialog({ pkg, activeConsultations = [] }: Props) {
  const price = pkg.discountedPrice ?? pkg.price

  const form = useForm<TForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      patientName: '',
      patientPhone: '',
      clinicBranch: '',
      requestedDate: '',
      requestedTimeSlot: '',
    },
  })

  const { control, setValue, trigger, resetField, handleSubmit, formState, watch } = form

  /* -------------------------------------------------- */
  /* 3.  same helpers as Step2                          */
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

  const isSlotBooked = (start: Date, end: Date) =>
    activeConsultations.some((c) => {
      if (c.status === 'cancelled') return false
      const cStart = new Date(c.date) // already full ISO
      const cEnd = new Date(c.time) // already full ISO
      return cStart < end && cEnd > start
    })

  const isDayFullyBooked = (day: Date) => {
    const slots = buildSlotsFor(day)
    if (!slots.length) return true
    return slots.every((s) => isSlotBooked(s.startTime, s.endTime))
  }

  /* -------------------------------------------------- */
  /* 4.  dates & slots (same as Step2)                  */
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

  const requestedDate = useWatch({ control, name: 'requestedDate' })

  const timeSlots = useMemo(() => {
    if (!requestedDate) return []
    return buildSlotsFor(new Date(requestedDate))
  }, [requestedDate])

  useEffect(() => {
    resetField('requestedTimeSlot', { defaultValue: '' })
  }, [requestedDate, resetField])

  /* -------------------------------------------------- */
  /* 5.  same formatters as Step2                       */
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
  /* 6.  submit                                           */
  /* -------------------------------------------------- */
  const onSubmit = (data: TForm) => {
    const payload = {
      ...data,
      packageName: pkg.name,
      packageId: pkg.id,
      price,
    }
    console.log('📦 booking', payload)
    alert('✅ تم إرسال طلب الحجز بنجاح! سنتواصل معك قريباً')
    form.reset()
  }

  /* -------------------------------------------------- */
  /* 7.  render                                           */
  /* -------------------------------------------------- */
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-auto gap-2 rounded-lg">
          اختر الباقة
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0 bg-background text-foreground">
        <div className="p-6 space-y-6">
          <DialogTitle className="text-2xl font-bold">حجز الباقة</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            يرجى ملء البيانات التالية لإتمام طلب الحجز
          </DialogDescription>

          {/*  package card  */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">الباقة المختارة</p>
              <p className="font-semibold text-lg">{pkg.name}</p>
            </div>
            <SaudiPrice amount={price.toFixed(2)} />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FieldGroup>
              {/*  name  */}
              <Field>
                <FieldLabel className="block mb-2 font-medium">الاسم الكامل *</FieldLabel>
                <Controller
                  name="patientName"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <Input {...field} placeholder="أدخل الاسم الكامل" />
                      {fieldState.error && <FieldError errors={[fieldState.error]} />}
                    </>
                  )}
                />
              </Field>

              {/*  phone  */}
              <Field>
                <FieldLabel className="block mb-2 font-medium">رقم الجوال *</FieldLabel>
                <Controller
                  name="patientPhone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <Input {...field} type="tel" placeholder="05xxxxxxxx" pattern="05[0-9]{8}" />
                      {fieldState.error && <FieldError errors={[fieldState.error]} />}
                    </>
                  )}
                />
              </Field>

              {/*  branch selector  */}
              <Field>
                <FieldLabel className="block mb-2 font-medium">فرع العيادة *</FieldLabel>
                <Controller
                  name="clinicBranch"
                  control={control}
                  rules={{ required: 'الرجاء اختيار الفرع' }}
                  render={({ field, fieldState }) => (
                    <>
                      <Select value={field.value} onValueChange={field.onChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الفرع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="النرجس">فرع النرجس</SelectItem>
                          <SelectItem value="القادسية">فرع القادسية</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.error && <FieldError errors={[fieldState.error]} />}
                    </>
                  )}
                />
              </Field>

              {/*  date (same cards as Step2)  */}
              <Field>
                <FieldLabel className="block mb-2 font-medium">اختر التاريخ *</FieldLabel>
                <Controller
                  name="requestedDate"
                  control={control}
                  rules={{ required: 'الرجاء اختيار التاريخ' }}
                  render={({ field, fieldState }) => (
                    <>
                      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-cyan-500/30">
                        {validDates.map((d) => {
                          const iso = d.toISOString()
                          const isSelected = field.value === iso
                          const fullyBooked = isDayFullyBooked(d)
                          return (
                            <label
                              key={iso}
                              className={`flex-shrink-0 w-20 border rounded-3xl p-3 text-center cursor-pointer transition-all snap-center relative ${
                                isSelected
                                  ? 'border-teal-500 bg-teal-500/10 text-teal-400'
                                  : 'border-white/10 bg-white/5 hover:border-white/20'
                              } ${fullyBooked ? 'opacity-40 cursor-not-allowed' : ''}`}
                            >
                              <input
                                type="radio"
                                {...field}
                                value={iso}
                                checked={isSelected}
                                onChange={() => field.onChange(iso)}
                                disabled={fullyBooked}
                                className="peer hidden"
                              />
                              <div className="text-sm font-medium">
                                {d.toLocaleDateString('ar-EG', { weekday: 'short' })}
                              </div>
                              <div className="text-3xl font-bold mt-1 leading-none">
                                {d.getDate()}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {d.toLocaleDateString('ar-EG', { month: 'short' })}
                              </div>
                              {/* badge */}
                              <div className="text-[10px] mt-2 px-2 py-0.5 rounded-full bg-white/10">
                                {badgeText(fullyBooked)}
                              </div>
                            </label>
                          )
                        })}
                      </div>
                      {fieldState.error && <FieldError errors={[fieldState.error]} />}
                    </>
                  )}
                />
              </Field>

              {/*  time slots (same cards as Step2)  */}
              <Field>
                <FieldLabel className="block mb-2 font-medium">اختر الموعد *</FieldLabel>
                <Controller
                  name="requestedTimeSlot"
                  control={control}
                  rules={{ required: 'الرجاء اختيار الموعد' }}
                  render={({ field, fieldState }) => (
                    <>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {timeSlots.map((slot) => {
                          const iso = slot.startTime.toISOString()
                          const booked = isSlotBooked(slot.startTime, slot.endTime)
                          const isSelected = field.value === iso
                          return (
                            <label
                              key={iso}
                              className={`relative border rounded-3xl p-4 text-center cursor-pointer transition-all ${
                                !booked
                                  ? isSelected
                                    ? 'border-teal-500 bg-teal-500/10 text-teal-400'
                                    : 'border-white/10 bg-white/5 hover:border-white/20'
                                  : 'opacity-40 cursor-not-allowed line-through'
                              }`}
                            >
                              <input
                                type="radio"
                                {...field}
                                value={iso}
                                checked={isSelected}
                                onChange={() => field.onChange(iso)}
                                disabled={booked}
                                className="peer hidden"
                              />
                              <div className="text-lg font-semibold">
                                {formatTime(slot.startTime)}
                              </div>
                              {/* badge */}
                              <div className="text-[10px] mt-2 px-2 py-0.5 rounded-full bg-white/10">
                                {badgeText(booked)}
                              </div>
                            </label>
                          )
                        })}
                      </div>
                      {fieldState.error && <FieldError errors={[fieldState.error]} />}
                    </>
                  )}
                />
              </Field>
            </FieldGroup>

            {/*  price bar  */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">السعر الإجمالي</span>
              <span className="font-bold text-teal-400 text-xl">
                <SaudiPrice amount={price.toFixed(2)} />
              </span>
            </div>

            <Button type="submit" size="lg" className="w-full h-12 text-base">
              تأكيد الحجز وإرسال الطلب
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
