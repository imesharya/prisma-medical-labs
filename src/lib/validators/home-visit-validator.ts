import { z } from 'zod'
import { phoneNumberSchema } from './consultation-validator'

export const homeVisitSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: 'الاسم الكامل مطلوب' })
    .min(3, { message: 'الاسم يجب أن يكون 3 أحرف على الأقل' })
    .max(100, { message: 'الاسم طويل جداً' }),

  phoneNumber: phoneNumberSchema,

  requestedDate: z.string().min(1, { message: 'يرجى اختيار التاريخ' }),
  requestedTimeSlot: z.string().min(1, { message: 'يرجى اختيار الموعد' }),
})

export type THomeVisitScheme = z.infer<typeof homeVisitSchema>
