'use client'
import { useRowLabel } from '@payloadcms/ui'
import { ArrayRowLabelArgs } from './types'
import { useMemo } from 'react'

/**
 * Helper function to get nested value from an object using dot notation
 */
const getNestedValue = (obj: unknown, path: string): unknown => {
  return path.split('.').reduce((acc, part) => {
    if (acc && typeof acc === 'object' && acc !== null && part in acc) {
      return (acc as Record<string, unknown>)[part]
    }
    return undefined
  }, obj)
}

/**
 * Day-of-week Arabic label map
 */
const dayOfWeekMap: Record<string, string> = {
  '0': 'الأحد',
  '1': 'الإثنين',
  '2': 'الثلاثاء',
  '3': 'الأربعاء',
  '4': 'الخميس',
  '5': 'الجمعة',
  '6': 'السبت',
}

/**
 * Format a value (especially dates) based on formatter
 */
const formatValue = (value: unknown, formatter?: string): string => {
  if (!value) return ''

  const strValue = String(value)

  if (formatter === 'time') {
    try {
      const date = new Date(strValue)
      if (!isNaN(date.getTime())) {
        return new Intl.DateTimeFormat('ar-EG', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: 'Asia/Riyadh',
        }).format(date)
      }
    } catch {
      // fallback
    }
  }

  return strValue
}

/**
 * 1-based zero-padded index (01, 02, 03 … 10, 11…)
 */
const getFormattedIndex = (rowNumber?: number): string => {
  const num = (rowNumber ?? 0) + 1
  return num.toString().padStart(2, '0')
}

/**
 * Check if all field variables in a template are empty (ignores |formatter)
 */
const hasEmptyFieldValues = (template: string, data: unknown): boolean => {
  const fieldMatches = template.match(/{{\s*([\w.]+)(?:\s*\|\s*\w+)?\s*}}/g)

  if (!fieldMatches) return false

  return fieldMatches.every((match) => {
    const fieldPath = match.match(/{{\s*([\w.]+)/)?.[1] || ''

    if (fieldPath === 'index') return false

    const value = getNestedValue(data, fieldPath)
    return !value || (typeof value === 'string' && value.trim() === '')
  })
}

/**
 * Process template with support for {{field|time}} and {{index}}
 */
const processTemplate = (template: string, data: unknown, rowNumber?: number): string => {
  let result = template.replace(/{{\s*index\s*}}/g, getFormattedIndex(rowNumber))

  result = result.replace(/{{\s*([\w.]+)(?:\s*\|\s*(\w+))?\s*}}/g, (_, fieldPath, formatter) => {
    let value = getNestedValue(data, fieldPath)

    // Special handling for dayOfWeek
    if (fieldPath === 'dayOfWeek') {
      return dayOfWeekMap[String(value)] || ''
    }

    // Apply formatter (e.g. |time)
    if (typeof value === 'string' || typeof value === 'number') {
      return formatValue(value, formatter)
    }

    return ''
  })

  return result
}

const ArrayCustomLabel: React.FC<ArrayRowLabelArgs> = ({
  fieldToUse,
  template = false,
  fallbackLabel = 'Item {{index}}',
}) => {
  const { data, rowNumber } = useRowLabel<any>()

  const customLabel = useMemo(() => {
    let labelValue = ''
    let shouldUseFallback = false

    if (!template) {
      // === Simple field mode (dayOfWeek) ===
      const rawValue = getNestedValue(data, fieldToUse)
      let displayValue = ''

      if (fieldToUse === 'dayOfWeek') {
        displayValue = dayOfWeekMap[String(rawValue)] || ''
      } else if (typeof rawValue === 'string' || typeof rawValue === 'number') {
        displayValue = String(rawValue).trim()
      }

      labelValue = displayValue
      shouldUseFallback = !displayValue
    } else {
      // === Template mode ===
      shouldUseFallback = hasEmptyFieldValues(fieldToUse, data)

      if (!shouldUseFallback) {
        labelValue = processTemplate(fieldToUse, data, rowNumber).trim()
      }
    }

    // Apply fallback when needed
    if (shouldUseFallback) {
      labelValue = processTemplate(fallbackLabel, data, rowNumber)
    }

    return labelValue
  }, [data, fieldToUse, template, fallbackLabel, rowNumber])

  return <>{customLabel}</>
}

export default ArrayCustomLabel
