'use client'

import { ArrowLeft, Home } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { Button } from '../ui/button'

interface HomeVisitFormData {
  fullName: string
  phoneNumber: string
}

const HomeVisitForm = () => {
  const [formData, setFormData] = useState<HomeVisitFormData>({
    fullName: '',
    phoneNumber: '',
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
      setSubmitMessage({
        type: 'success',
        text: 'شكراً لك! سنتواصل معك قريباً',
      })
      setFormData({
        fullName: '',
        phoneNumber: '',
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
    <div className="flex flex-col gap-8 md:flex-1 bg-card/90 backdrop-blur-sm border border-border rounded-3xl p-6 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 max-w-2xl mx-auto">
      <div className="flex flex-col items-center gap-2">
        <Button className="h-16 w-16 mb-4" variant={'outline'} size={'icon'}>
          <Home className="text-primary" style={{ height: 24, width: 24 }} />
        </Button>

        <h3 className="text-xl sm:text-lg lg:text-xl font-bold tracking-tight text-balance">
          طلب زيارة منزلية
        </h3>
        <p className="relative leading-relaxed text-base text-gray-600 flex-grow">
          أدخل بياناتك وسنتواصل معك خلال أقل من ساعة
        </p>
      </div>

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
  )
}

export default HomeVisitForm
