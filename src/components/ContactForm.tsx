'use client'

import { useState, FormEvent } from 'react'
import { Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'

interface ContactFormData {
  fullName: string
  phoneNumber: string
  package: string
  service: string
  date: string
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void | Promise<void>
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    package: '',
    service: '',
    date: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (onSubmit) {
        await onSubmit(formData)
      }
      setSubmitMessage({
        type: 'success',
        text: 'شكراً لك! سنتواصل معك قريباً',
      })
      setFormData({
        fullName: '',
        phoneNumber: '',
        package: '',
        service: '',
        date: '',
      })
      setTimeout(() => setSubmitMessage(null), 5000)
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'حدث خطأ. يرجى المحاولة مرة أخرى',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="md:p-4">
      <div
        className="relative w-full overflow-hidden py-16 md:py-20 lg:py-28 rounded-3xl shadow-md border border-gray-100"
        style={{
          background: `linear-gradient(180deg, #2563EB08 0%, transparent 60%)`,
        }}
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mx-auto px-4 md:px-6 lg:px-8 w-full max-w-7xl">
          {/* Header Section */}
          <div className="md:flex-1 flex flex-col items-center md:items-start text-center md:text-start p-8 md:p-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">تواصل معنا</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance">
              احجز موعدك الآن
            </h2>

            {/* Subheadline */}
            <p className="mt-6 text-base md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              فريقنا سيتواصل معك خلال أقل من ساعة
            </p>

            <ul className="space-y-3 mt-6 max-md:hidden">
              {/* Address */}
              <li>
                <Link
                  href="https://maps.app.goo.gl/7thyVBCaKtArjii97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-foreground/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <MapPin className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/50 mb-0.5 group-hover:text-foreground/70 transition-colors">
                      العنوان
                    </p>
                    <p className="font-medium text-sm group-hover:text-foreground transition-colors">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </Link>
              </li>
              {/* Phone */}
              <li>
                <Link
                  href="tel:+966920031642"
                  className="group flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-foreground/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/50 mb-0.5 group-hover:text-foreground/70 transition-colors">
                      اتصل بنا
                    </p>
                    <p
                      className="text-end font-medium text-sm group-hover:text-foreground transition-colors"
                      dir="ltr"
                    >
                      +966920031642
                    </p>
                  </div>
                </Link>
              </li>
              {/* WhatsApp */}
              <li>
                <Link
                  href="https://wa.me/+966920031642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-foreground/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <BsWhatsapp color="white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/50 mb-0.5 group-hover:text-foreground/70 transition-colors">
                      واتساب
                    </p>
                    <p
                      className="text-end font-medium text-sm group-hover:text-foreground transition-colors"
                      dir="ltr"
                    >
                      +966920031642
                    </p>
                  </div>
                </Link>
              </li>
              {/* Email */}
              <li>
                <Link
                  href="mailto:info@prismalaboratory.com"
                  className="group flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-foreground/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Mail className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/50 mb-0.5 group-hover:text-foreground/70 transition-colors">
                      البريد الإلكتروني
                    </p>
                    <p className="font-medium text-sm group-hover:text-foreground transition-colors">
                      info@prismalaboratory.com
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Form Container */}
          <div className="md:flex-1 bg-card/90 backdrop-blur-sm border border-border rounded-3xl p-4 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-sm font-semibold text-foreground">
                  الاسم الكامل
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber" className="text-sm font-semibold text-foreground">
                  رقم الجوال
                </label>
                <input
                  id="phoneNumber"
                  dir="rtl"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  placeholder="أدخل رقم جوالك"
                />
              </div>

              {/* Package Select */}
              <div className="flex flex-col gap-2">
                <label htmlFor="package" className="text-sm font-semibold text-foreground">
                  الباقة
                </label>
                <div className="border border-input rounded-xl">
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-e-16 border-e-transparent bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 cursor-pointer"
                  >
                    <option value="">اختر الباقة</option>
                    <option value="comprehensive">الباقات الشاملة</option>
                    <option value="specialized">الباقات المختصة</option>
                    <option value="sexual-health">الصحة الجنسية</option>
                    <option value="marriage">باقة الزواج</option>
                    <option value="offers">العروض</option>
                  </select>
                </div>
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-semibold text-foreground">
                  الخدمة
                </label>
                <div className="border border-input rounded-xl">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-e-16 border-e-transparent bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 cursor-pointer"
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="home-visit">زيارة منزلية</option>
                    <option value="clinic">عيادة</option>
                    <option value="online">استشارة أونلاين</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-sm font-semibold text-foreground">
                  التاريخ
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div
                  className={`w-full px-4 py-3 rounded-xl text-sm font-medium ${
                    submitMessage.type === 'success'
                      ? 'bg-green-500/10 text-green-700 border border-green-500/20'
                      : 'bg-destructive/10 text-destructive border border-destructive/20'
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 mt-4 text-base font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? 'جاري الإرسال...' : 'احجز الآن'}
                <ArrowLeft className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
