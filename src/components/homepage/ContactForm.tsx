'use client'

import { contactSchema, TContactScheme } from '@/lib/validators/contact-validator'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { AlertCircle, Loader2, Phone, Mail, MapPin } from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'
import { submitContactForm } from '@/actions/contact'
import FadeIn from '@/components/shared/FadeIn'

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const form = useForm<TContactScheme>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      message: '',
    },
  })

  const { control, handleSubmit } = form

  const onSubmit = async (data: TContactScheme) => {
    setIsLoading(true)
    setServerError('')

    try {
      const result = await submitContactForm(data)

      if (result.success) {
        setIsSuccess(true)
      } else {
        if (result.code === 'ERROR_INVALID_INPUT') {
          setServerError('البيانات المدخلة غير صحيحة. يرجى التحقق من الحقول.')
        } else {
          setServerError(result.message || 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.')
        }
      }
    } catch (error: any) {
      setServerError(error.message || 'حدث خطأ في الاتصال بالخادم.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactLinks = [
    {
      href: 'https://maps.app.goo.gl/7thyVBCaKtArjii97',
      icon: MapPin,
      label: 'العنوان',
      value: 'الرياض، المملكة العربية السعودية',
      external: true,
    },
    {
      href: 'tel:+966920031642',
      icon: Phone,
      label: 'اتصل بنا',
      value: '+966920031642',
      external: false,
    },
    {
      href: 'https://wa.me/+966920031642',
      icon: BsWhatsapp,
      label: 'واتساب',
      value: '+966920031642',
      external: true,
    },
    {
      href: 'mailto:info@prismalaboratory.com',
      icon: Mail,
      label: 'البريد الإلكتروني',
      value: 'info@prismalaboratory.com',
      external: false,
    },
  ]

  return (
    <section className="md:p-4" id="contact">
      <div
        className="relative w-full overflow-hidden py-16 md:py-24 rounded-3xl shadow-md border border-gray-100"
        style={{
          background: `linear-gradient(180deg, #2563EB08 0%, transparent 60%)`,
        }}
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mx-auto px-4 md:px-6 lg:px-8 w-full max-w-[1800px]">
          {/* Left column — header + contact info, slides in from right */}
          <div className="md:flex-1 flex flex-col items-center md:items-start text-center md:text-start">
            <FadeIn delay={200} direction="left" distance={30}>
              <div className="text-center md:text-start mb-10 md:mb-12">
                <div className="text-[10px] tracking-[0.4em] mb-3 text-[#0A84FF]">CONTACT</div>
                <h2 className="text-[34px] md:text-[52px] font-bold mb-3 md:mb-4">
                  تواصل معنا الآن
                </h2>
                <p className="text-[13px] md:text-[14px] text-[#0A0A128C]">
                  فريقنا سيتواصل معك خلال أقل من ساعة
                </p>
              </div>
            </FadeIn>

            <ul className="space-y-3 mt-6 max-md:hidden">
              {contactLinks.map((link, i) => (
                <li key={link.label}>
                  <FadeIn delay={400 + i * 100} direction="left" distance={20}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-foreground/5 transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <link.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-foreground/50 mb-0.5 group-hover:text-foreground/70 transition-colors">
                          {link.label}
                        </p>
                        <p
                          className="font-medium text-sm group-hover:text-foreground transition-colors"
                          dir={link.label !== 'البريد الإلكتروني' ? 'ltr' : undefined}
                        >
                          {link.value}
                        </p>
                      </div>
                    </Link>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — form card, slides in from left */}
          <div className="md:flex-1">
            <FadeIn delay={400} direction="right" distance={40}>
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-3xl p-4 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    {/* Full Name */}
                    <Controller
                      control={control}
                      name="fullName"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="fullName"
                            className="text-sm font-semibold text-foreground"
                          >
                            الاسم الكامل *
                          </FieldLabel>
                          <Input
                            {...field}
                            id="fullName"
                            aria-invalid={fieldState.invalid}
                            placeholder="أدخل اسمك الكامل"
                            autoComplete="name"
                            className="h-12 w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
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
                            className="text-sm font-semibold text-foreground"
                          >
                            رقم الجوال *
                          </FieldLabel>
                          <Input
                            {...field}
                            id="phoneNumber"
                            aria-invalid={fieldState.invalid}
                            placeholder="05xxxxxxxx"
                            autoComplete="tel"
                            className="h-12 w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                          />
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />

                    {/* Message */}
                    <Controller
                      control={control}
                      name="message"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="message"
                            className="text-sm font-semibold text-foreground"
                          >
                            الرسالة{' '}
                            <span className="text-muted-foreground font-normal">(اختياري)</span>
                          </FieldLabel>
                          <textarea
                            {...field}
                            id="message"
                            rows={4}
                            aria-invalid={fieldState.invalid}
                            placeholder="اكتب رسالتك هنا..."
                            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none text-right"
                          />
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />

                    {/* Server Error */}
                    {serverError && (
                      <div className="bg-red-500/10 border border-red-500/30 text-red-700 p-4 rounded-xl flex items-start gap-3 text-sm font-medium">
                        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <p>{serverError}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      variant={'gradient'}
                      type="submit"
                      disabled={isLoading}
                      className="h-12 inline-flex items-center justify-center gap-2 w-full px-6 py-4 mt-2 text-base font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          جاري الإرسال... <Loader2 className="w-4 h-4 animate-spin" />
                        </span>
                      ) : (
                        'إرسال الرسالة'
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12 relative overflow-hidden">
                    <div className="mx-auto w-24 h-24 relative mb-6">
                      <div className="absolute inset-0 border-4 border-green-200 rounded-full animate-[ping_1.5s_ease-out_infinite]" />
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                        <svg width="50" height="50" viewBox="0 0 52 52" className="text-white">
                          <path
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

                    <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-800 px-5 py-1.5 rounded-full text-sm font-semibold mb-4">
                      <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                      تم الإرسال بنجاح
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-foreground">شكراً لتواصلك معنا</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                      تم استلام رسالتك وسيقوم فريقنا بالرد عليك في أقرب وقت
                    </p>

                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => {
                        setIsSuccess(false)
                        form.reset()
                      }}
                    >
                      إرسال رسالة جديدة
                    </Button>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
