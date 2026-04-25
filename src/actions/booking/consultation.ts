'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { consultationSchema, TConsultationScheme } from '@/lib/validators/consultation-validator'
import { generateRef } from '@/lib/utils'
import { APIError } from 'payload'

const payload = await getPayload({ config: configPromise })

export type SubmitConsultationFormCode =
  | 'SUCCESS'
  | 'ERROR_INVALID_INPUT'
  | 'ERROR_DOUBLE_BOOKING'
  | 'ERROR_SERVER'

type SubmitConsultationResponse =
  | { success: false; code: Exclude<SubmitConsultationFormCode, 'SUCCESS'>; message?: string }
  | { success: true; code: 'SUCCESS'; referenceNumber: string }

export const submitConsultationForm = async (
  data: TConsultationScheme,
): Promise<SubmitConsultationResponse> => {
  try {
    // Zod validation
    const validated = consultationSchema.safeParse(data)
    if (!validated.success) {
      return { success: false, code: 'ERROR_INVALID_INPUT' }
    }

    const {
      step1: { fullName, phoneNumber, consultationType },
      step2: { requestedDate, requestedTimeSlot },
    } = validated.data

    const referenceNumber = generateRef()

    // Create booking via Payload Local API
    await payload.create({
      collection: 'consultations',
      data: {
        fullName,
        phoneNumber,
        consultationType,
        date: requestedDate,
        time: requestedTimeSlot,
        referenceNumber,
        status: 'pending',
      },
    })

    return {
      success: true,
      code: 'SUCCESS',
      referenceNumber,
    }
  } catch (error: any) {
    console.error('Booking error:', error)

    // Handle double-booking from Payload hook
    if (
      error instanceof APIError ||
      error.message?.includes('محجوز') ||
      error.message?.includes('double booking')
    ) {
      return {
        success: false,
        code: 'ERROR_DOUBLE_BOOKING',
        message: 'هذا الموعد محجوز بالفعل. يرجى اختيار موعد آخر.',
      }
    }

    return {
      success: false,
      code: 'ERROR_SERVER',
      message: 'حدث خطأ أثناء معالجة الطلب. يرجى المحاولة مرة أخرى.',
    }
  }
}
