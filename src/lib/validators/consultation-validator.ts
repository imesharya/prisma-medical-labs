import { z } from 'zod'

const phoneNumberSchema = z
  .string()
  .min(1, { message: 'رقم الجوال مطلوب' })
  .transform((val) => val.replace(/[\s-]+/g, '')) // remove spaces and dashes
  .refine(
    (val) => {
      // Saudi local format: 05xxxxxxxx
      if (/^05\d{8}$/.test(val)) return true
      // Saudi international: +9665xxxxxxxx
      if (/^\+9665\d{8}$/.test(val)) return true
      // Other international numbers
      if (/^\+[1-9]\d{9,}$/.test(val) && !val.startsWith('+966')) return true
      return false
    },
    {
      message: 'رقم الجوال غير صحيح. يرجى إدخال رقم سعودي صحيح (مثال: 05xxxxxxxx) أو رقم دولي',
    },
  )

export const consultationSchema = z.object({
  step1: z.object({
    fullName: z
      .string()
      .min(1, { message: 'الاسم الكامل مطلوب' })
      .min(3, { message: 'الاسم يجب أن يكون 3 أحرف على الأقل' })
      .max(100, { message: 'الاسم طويل جداً' }),

    phoneNumber: phoneNumberSchema,

    consultationType: z.enum(['pre_analysis', 'results_review'], {
      error: () => ({ message: 'يرجى اختيار نوع الاستشارة' }),
    }),
  }),

  step2: z.object({
    requestedDate: z.string().min(1, { message: 'يرجى اختيار التاريخ' }),

    requestedTimeSlot: z.string().min(1, { message: 'يرجى اختيار الموعد' }),
  }),

  step3: z.object({
    agree: z.boolean(),
  }),
})

export type TConsultationScheme = z.infer<typeof consultationSchema>
