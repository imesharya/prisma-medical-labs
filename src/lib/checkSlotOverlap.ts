import type { Payload } from 'payload'

/**
 * Checks if a new time slot overlaps with any existing slot on the same day.
 * Uses the exact same logic as the original beforeChange hook.
 */
export const hasSlotOverlap = async ({
  payload,
  date, // YYYY-MM-DD string
  newStartTime, // ISO string or Date
  newEndTime, // ISO string or Date
  excludeSlotId, // for updates only
}: {
  payload: Payload
  date: string
  newStartTime: string | Date
  newEndTime: string | Date
  excludeSlotId?: string
}): Promise<boolean> => {
  const startMs = new Date(newStartTime).getTime()
  const endMs = new Date(newEndTime).getTime()

  const sameDaySlots = await payload.find({
    collection: 'consultation-time-slots',
    where: {
      date: { equals: date },
      ...(excludeSlotId ? { id: { not_equals: excludeSlotId } } : {}),
    },
    limit: 1000,
  })

  return sameDaySlots.docs.some((doc: any) => {
    const existingStart = new Date(doc.startTime).getTime()
    const existingEnd = new Date(doc.endTime).getTime()
    return startMs < existingEnd && endMs > existingStart
  })
}
