'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { homeVisitSchema, THomeVisitScheme } from '@/lib/validators/home-visit-validator'
import { generateRef } from '@/lib/utils'
import { APIError } from 'payload'

const payload = await getPayload({ config: configPromise })

export type SubmitHomeVisitFormCode =
  | 'SUCCESS'
  | 'ERROR_INVALID_INPUT'
  | 'ERROR_DOUBLE_BOOKING'
  | 'ERROR_SERVER'

type SubmitHomeVisitResponse =
  | { success: false; code: Exclude<SubmitHomeVisitFormCode, 'SUCCESS'>; message?: string }
  | { success: true; code: 'SUCCESS'; referenceNumber: string }

export const submitHomeVisitForm = async (
  data: THomeVisitScheme,
): Promise<SubmitHomeVisitResponse> => {
  try {
    // 1. Zod validation
    const validated = homeVisitSchema.safeParse(data)
    if (!validated.success) {
      return { success: false, code: 'ERROR_INVALID_INPUT' }
    }

    const { fullName, phoneNumber, requestedTimeSlot } = validated.data

    // 2. Proactive slot guard
    const slotCheck = await payload.find({
      collection: 'home-visit-time-slots',
      where: {
        id: { equals: requestedTimeSlot },
        availabilityStatus: { not_equals: 'manually_closed' },
      },
      limit: 1,
      depth: 0,
    })

    const slot = slotCheck.docs[0]

    if (!slot) {
      return {
        success: false,
        code: 'ERROR_DOUBLE_BOOKING',
        message: 'الموعد غير موجود أو لم يعد متاحاً.',
      }
    }

    if (slot.availabilityStatus === 'full' || (slot.remainingCapacity ?? 0) <= 0) {
      return {
        success: false,
        code: 'ERROR_DOUBLE_BOOKING',
        message: 'هذا الموعد ممتلئ.',
      }
    }

    // 3. Create booking
    const referenceNumber = generateRef()

    await payload.create({
      collection: 'home-visit-requests',
      data: {
        fullName,
        phoneNumber,
        slot: requestedTimeSlot,
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
    console.error('Home visit booking error:', error)

    // 4. Handle hook-level rejection
    if (
      error instanceof APIError ||
      error.message?.includes('محجوز') ||
      error.message?.includes('ممتلئ') ||
      error.message?.includes('double booking') ||
      error.message?.includes('capacity')
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
