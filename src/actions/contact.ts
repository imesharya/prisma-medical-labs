'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { contactSchema, TContactScheme } from '@/lib/validators/contact-validator'
import { APIError } from 'payload'

const payload = await getPayload({ config: configPromise })

export type SubmitContactFormCode = 'SUCCESS' | 'ERROR_INVALID_INPUT' | 'ERROR_SERVER'

type SubmitContactResponse =
  | { success: false; code: Exclude<SubmitContactFormCode, 'SUCCESS'>; message?: string }
  | { success: true; code: 'SUCCESS' }

export const submitContactForm = async (data: TContactScheme): Promise<SubmitContactResponse> => {
  try {
    const validated = contactSchema.safeParse(data)
    if (!validated.success) {
      return { success: false, code: 'ERROR_INVALID_INPUT' }
    }

    const { fullName, phoneNumber, email, subject, message, preferredContactMethod } =
      validated.data

    await payload.create({
      collection: 'contact-messages',
      data: {
        fullName,
        phoneNumber,
        email: email || undefined,
        subject,
        message,
        preferredContactMethod,
        status: 'new',
      },
    })

    return { success: true, code: 'SUCCESS' }
  } catch (error: any) {
    console.error('Contact form error:', error)

    if (error instanceof APIError) {
      return {
        success: false,
        code: 'ERROR_SERVER',
        message: 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',
      }
    }

    return {
      success: false,
      code: 'ERROR_SERVER',
      message: 'حدث خطأ غير متوقع. يرجى المحاولة لاحقاً.',
    }
  }
}
