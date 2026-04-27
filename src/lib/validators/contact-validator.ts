import { z } from 'zod'
import { phoneNumberSchema } from './consultation-validator'

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: 'الاسم الكامل مطلوب' })
    .min(3, { message: 'الاسم يجب أن يكون 3 أحرف على الأقل' })
    .max(100, { message: 'الاسم طويل جداً' }),

  phoneNumber: phoneNumberSchema,

  email: z.string().email({ message: 'البريد الإلكتروني غير صحيح' }).optional().or(z.literal('')),

  subject: z.enum(['general', 'complaint', 'suggestion', 'partnership', 'other'], {
    error: () => ({ message: 'يرجى اختيار الموضوع' }),
  }),

  message: z
    .string()
    .min(1, { message: 'الرسالة مطلوبة' })
    .min(10, { message: 'الرسالة قصيرة جداً (10 أحرف على الأقل)' })
    .max(2000, { message: 'الرسالة طويلة جداً (2000 حرف كحد أقصى)' }),

  preferredContactMethod: z.enum(['phone', 'email', 'whatsapp'], {
    error: () => ({ message: 'يرجى اختيار طريقة التواصل المفضلة' }),
  }),
})

export type TContactScheme = z.infer<typeof contactSchema>
