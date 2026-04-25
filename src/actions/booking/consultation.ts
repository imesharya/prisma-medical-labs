'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { consultationSchema, TConsultationScheme } from '@/lib/validators/consultation-validator'
import { CLINIC_TZ_OFFSET, generateRef } from '@/lib/utils'
import { APIError } from 'payload'

function normalizeToClinicISO(isoString: string): string {
  // If the frontend already sends +03:00, this is a no-op.
  // If it sends a Z string, we convert it to the required offset.
  const d = new Date(isoString)
  const pad = (n: number) => String(n).padStart(2, '0')
  // Use Intl to get clinic-time parts
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: CLINIC_TZ_OFFSET,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(d)

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '00'
  return `${get('year')}-${get('month')}-${get('day')}T${get('hour')}:${get('minute')}:${get('second')}+03:00`
}

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
        date: normalizeToClinicISO(requestedDate),
        time: normalizeToClinicISO(requestedTimeSlot),
        date_tz: 'Asia/Riyadh',
        time_tz: 'Asia/Riyadh',
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
