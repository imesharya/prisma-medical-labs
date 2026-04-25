'use client'

import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { TConsultationScheme } from '@/lib/validators/consultation-validator'
import { Controller, UseFormReturn } from 'react-hook-form'

const Step1 = ({ form }: { form: UseFormReturn<TConsultationScheme> }) => {
  const { control } = form

  return (
    <div className="space-y-8">
      <FieldGroup>
        {/* Full Name Field */}
        <Controller
          control={control}
          name="step1.fullName"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="fullName" className="block mb-2 font-medium">
                الاسم الكامل *
              </FieldLabel>
              <Input
                {...field}
                id="fullName"
                aria-invalid={fieldState.invalid}
                placeholder="أدخل اسمك الكامل"
                autoComplete="on"
                className="h-12 w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus-visible:ring-0 focus-visible:border-cyan-400 focus-visible:bg-white/10 outline-none transition-all"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Phone Number Field */}
        <Controller
          control={control}
          name="step1.phoneNumber"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="phoneNumber" className="block mb-2 font-medium">
                رقم الجوال *
              </FieldLabel>
              <Input
                {...field}
                id="phoneNumber"
                aria-invalid={fieldState.invalid}
                placeholder="05xxxxxxxx"
                autoComplete="on"
                className="h-12 w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus-visible:ring-0 focus-visible:border-cyan-400 focus-visible:bg-white/10 outline-none transition-all"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/*  Radio Group with Controller */}
        <Controller
          control={control}
          name="step1.consultationType"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="block mb-3 font-medium">نوع الاستشارة *</FieldLabel>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    value: 'pre_analysis',
                    label: 'استشارة ما قبل التحليل',
                    desc: 'نساعدك تختار التحاليل المناسبة لحالتك',
                    icon: '🔍',
                  },
                  {
                    value: 'results_review',
                    label: 'استشارة لشرح / قراءة نتائج التحاليل',
                    desc: 'نشرح لك نتائجك بطريقة واضحة ومفصلة',
                    icon: '📊',
                  },
                ].map((option) => (
                  <label key={option.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name={field.name}
                      value={option.value}
                      checked={field.value === option.value}
                      onChange={field.onChange}
                      className="peer hidden"
                    />
                    <div className="peer-checked:border-teal-500 peer-checked:bg-teal-500/10 border-2 border-white/10 bg-white/5 rounded-2xl p-6 transition-all hover:border-white/30">
                      <div className="text-4xl mb-4">{option.icon}</div>
                      <div className="font-semibold mb-2">{option.label}</div>
                      <div className="text-sm text-[#a8b5c3]">{option.desc}</div>
                    </div>
                  </label>
                ))}
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </div>
  )
}

export default Step1
