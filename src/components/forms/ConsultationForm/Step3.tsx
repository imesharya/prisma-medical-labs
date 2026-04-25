'use client'

import { TConsultationScheme } from '@/lib/validators/consultation-validator'
import { UseFormReturn, useWatch } from 'react-hook-form'

const Step3 = ({ form }: { form: UseFormReturn<TConsultationScheme> }) => {
  const { control } = form
  const fullName = useWatch({
    control,
    name: 'step1.fullName',
  })
  const phoneNumber = useWatch({
    control,
    name: 'step1.phoneNumber',
  })
  const consultationType = useWatch({
    control,
    name: 'step1.consultationType',
  })
  const requestedDate = useWatch({
    control,
    name: 'step2.requestedDate',
  })
  const requestedTimeSlot = useWatch({
    control,
    name: 'step2.requestedTimeSlot',
  })

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
              {new Intl.DateTimeFormat('ar-EG', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
              }).format(new Date(requestedDate))}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a8b5c3]">الموعد</span>
            <span>
              {new Intl.DateTimeFormat('ar-EG', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              }).format(new Date(requestedTimeSlot))}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="terms" className="mt-1 accent-teal-500" required />
        <label htmlFor="terms" className="text-sm text-[#a8b5c3]">
          أوافق على{' '}
          <a href="#" className="text-cyan-400 hover:text-teal-400">
            سياسة الخصوصية
          </a>{' '}
          و
          <a href="#" className="text-cyan-400 hover:text-teal-400">
            {' '}
            شروط الخدمة
          </a>
        </label>
      </div>
    </div>
  )
}

export default Step3
