import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateRef = () => {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const random = Math.floor(100000 + Math.random() * 900000) // 6 digits
  return `REF-${date}-${random}`
}

export const CLINIC_TZ_OFFSET = '+03:00' // Asia/Riyadh standard time;

/** Convert a local Date to an offset ISO string */
export function toClinicISO(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  const Y = d.getFullYear()
  const M = pad(d.getMonth() + 1)
  const D = pad(d.getDate())
  const h = pad(d.getHours())
  const m = pad(d.getMinutes())
  const s = pad(d.getSeconds())
  return `${Y}-${M}-${D}T${h}:${m}:${s}${CLINIC_TZ_OFFSET}`
}

/** Parse an ISO string from the DB back to a Date object */
export function fromClinicISO(iso: string): Date {
  return new Date(iso)
}
