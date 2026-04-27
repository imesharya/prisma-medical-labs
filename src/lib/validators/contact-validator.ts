import { z } from 'zod'
import { phoneNumberSchema } from './consultation-validator'

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: 'الاسم الكامل مطلوب' })
    .min(3, { message: 'الاسم يجب أن يكون 3 أحرف على الأقل' })
    .max(100, { message: 'الاسم طويل جداً' }),

  phoneNumber: phoneNumberSchema,
  message: z.string().max(2000, { message: 'الرسالة طويلة جداً (2000 حرف كحد أقصى)' }).optional(),
})

export type TContactScheme = z.infer<typeof contactSchema>
