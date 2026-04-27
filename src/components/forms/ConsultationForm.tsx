'use client'

import { consultationSchema, TConsultationScheme } from '@/lib/validators/consultation-validator'
import { useMemo, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Step1 from '@/components/forms/ConsultationForm/Step1'
import Step2 from '@/components/forms/ConsultationForm/Step2'
import Step3 from '@/components/forms/ConsultationForm/Step3'
import { Button } from '@/components/ui/button'
import { AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { submitConsultationForm } from '@/actions/booking/consultation'
import { ConsultationTimeSlot } from '@/payload-types'

const TIMEZONE = 'Asia/Riyadh'

const ConsultationForm = ({ availableSlots }: { availableSlots: ConsultationTimeSlot[] }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState('')
  const [serverError, setServerError] = useState<string>('')

  const form = useForm<TConsultationScheme>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      step1: {
        fullName: '',
        phoneNumber: '',
        consultationType: undefined,
      },
      step2: {
        requestedDate: undefined,
        requestedTimeSlot: undefined,
      },
      step3: {
        agree: false,
      },
    },
  })
  const requestedTimeSlot = useWatch({ control: form.control, name: 'step2.requestedTimeSlot' })

  const selectedSlot = useMemo(
    () => availableSlots.find((s) => s.id === requestedTimeSlot),
    [availableSlots, requestedTimeSlot],
  )

  const nextStep = async () => {
    let fieldsToValidate: keyof TConsultationScheme

    if (currentStep === 1) {
      fieldsToValidate = 'step1'
    } else if (currentStep === 2) {
      fieldsToValidate = 'step2'
    } else {
      return
    }

    const isValid = await form.trigger(fieldsToValidate)
    if (isValid) {
      form.clearErrors()
      scrollTo({ top: 0 })
      setCurrentStep((prev) => prev + 1)
    } else {
      // Fake submit to prime re-validation (errors now clear on change)
      form.handleSubmit(() => {})()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const onSubmit = async (data: TConsultationScheme) => {
    setIsLoading(true)
    setServerError('') // reset previous error

    try {
      const result = await submitConsultationForm(data)

      if (result.success) {
        setReferenceNumber(result.referenceNumber)
        setIsSuccess(true)
      } else {
        // Show user-friendly error
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 form={form} />
      case 2:
        return <Step2 form={form} availableSlots={availableSlots} />
      case 3:
        return <Step3 form={form} availableSlots={availableSlots} />
      default:
        return null
    }
  }

  const getConsultationTypeLabel = (type?: string): string => {
    switch (type) {
      case 'pre_analysis':
        return 'استشارة ما قبل التحليل'
      case 'results_review':
        return 'استشارة شرح / قراءة نتائج التحاليل'
      default:
        return 'استشارة طبية'
    }
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

  // Build WhatsApp message and link
  const buildWhatsAppLink = () => {
    const fullName = form.getValues('step1.fullName') || ''
    const phone = form.getValues('step1.phoneNumber') || ''
    const consultationType = form.getValues('step1.consultationType')
    const date =
      new Intl.DateTimeFormat('ar-EG', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      }).format(new Date(form.getValues('step2.requestedDate'))) || ''
    const time = selectedSlot
      ? `${formatTime(selectedSlot.startTime)} – ${formatTime(selectedSlot.endTime)}`
      : ''

    const message = `السلام عليكم ورحمة الله وبركاته

تم تأكيد حجز الإستشارة الطبية بنجاح

الاسم: ${fullName}
رقم الجوال: ${phone}
نوع الاستشارة: ${getConsultationTypeLabel(consultationType)}

التاريخ: ${date}
الوقت: ${time}

رقم الحجز: ${referenceNumber}

أرجو التكرم بالتواصل معي للتأكيد النهائي.
`

    const encodedMessage = encodeURIComponent(message)

    return `https://wa.me/+966920031642?text=${encodedMessage}`
  }

  return (
    <section className="max-w-3xl mx-auto px-2 md:px-4 -mt-20 relative z-10 pb-16" id="form-sec">
      <div className="bg-gradient-to-br from-[#1a2332]/90 to-[#1a2332]/70 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
        {!isSuccess && (
          <>
            {/* Step Indicator */}
            <div className="flex justify-center items-center gap-4 mb-10">
              {[1, 2, 3].map((step) => (
                <div key={step} className={`flex items-center ${step < 3 ? 'flex-1' : ''}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      step === currentStep
                        ? 'bg-gradient-to-r from-[#00bfff] to-[#00a99d] text-[#0f1419] shadow-lg shadow-cyan-500/50'
                        : step < currentStep
                          ? 'bg-[#00a99d] text-[#0f1419]'
                          : 'bg-white/10 border-2 border-[#a8b5c3] text-[#a8b5c3]'
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`flex-1 h-0.5 mx-3 ${step < currentStep ? 'bg-gradient-to-r from-cyan-400 to-teal-400' : 'bg-white/10'}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {renderStep()}

              {serverError && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p>{serverError}</p>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                {currentStep > 1 && (
                  <Button type="button" onClick={prevStep} variant={'secondary'} className="flex-1">
                    السابق
                  </Button>
                )}

                {currentStep !== 3 && (
                  <Button type="button" onClick={nextStep} className="flex-1">
                    التالي
                  </Button>
                )}

                {currentStep === 3 && (
                  <Button onClick={nextStep} type="submit" className="flex-1">
                    تأكيد الحجز {isLoading ? <Loader2 className="animate-spin" /> : null}
                  </Button>
                )}
              </div>

              {/* SUCCESS STATE */}
            </form>
          </>
        )}
        {isSuccess && (
          <div className="text-center py-12 relative overflow-hidden">
            <div className="success-confetti absolute inset-0 pointer-events-none" />

            {/* Animated Checkmark */}
            <div className="mx-auto w-32 h-32 relative mb-8">
              <div className="absolute inset-0 border-4 border-green-500/20 rounded-full animate-[ping_1.5s_ease-out_infinite]" />
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

            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              تم التأكيد
            </div>

            <h2 className="text-3xl font-bold mb-3">تم حجز استشارتك بنجاح</h2>
            <p className="text-[#a8b5c3] max-w-md mx-auto mb-8">
              سيتواصل معك الاستشاري في الموعد المحدد لشرح النتائج ومتابعة حالتك الصحية
            </p>

            {referenceNumber && (
              <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-5 mb-8 font-mono text-green-400">
                رقم الحجز: <span className="font-bold">{referenceNumber}</span>
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
                  className="w-full"
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

export default ConsultationForm
