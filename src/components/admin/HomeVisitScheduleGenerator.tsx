'use client'
import { useDocumentInfo, Button } from '@payloadcms/ui'
import { toast } from '@payloadcms/ui' // ← Correct import (no useToast)
import { useState } from 'react'

const HomeVisitScheduleGenerator = () => {
  const { id, data } = useDocumentInfo()
  const [loading, setLoading] = useState<'preview' | 'generate' | null>(null)

  const lastGenerated = data?.lastGeneratedAt
    ? new Intl.DateTimeFormat('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(data.lastGeneratedAt))
    : null

  const callGenerate = async (preview: boolean) => {
    if (!id) return
    setLoading(preview ? 'preview' : 'generate')

    try {
      const res = await fetch(`/api/home-visit-schedule-templates/${id}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preview }),
      })

      const result = await res.json()

      if (!res.ok) throw new Error(result.error || 'حدث خطأ')

      if (preview) {
        toast.info(result.message, {
          description: 'معاينة الإنشاء (لن يتم إنشاء أي مواعيد)',
          duration: 8000,
        })
      } else {
        toast.success(`تم الإنشاء بنجاح!`, {
          description: `تم إنشاء ${result.created} موعد • تم تخطي ${result.skipped} بسبب التداخل`,
          duration: 6000,
        })
      }
    } catch (err: any) {
      toast.error(err.message || 'فشل في العملية', {
        duration: 6000,
      })
    } finally {
      setLoading(null)
    }
  }

  if (!data?.startDate || !data?.endDate || !data?.schedule?.length) {
    return (
      <div className="p-6 border rounded-lg bg-gray-50 text-gray-500 text-center">
        يرجى ملء اسم النموذج، تاريخ البدء، تاريخ الانتهاء، والجدول الأسبوعي أولاً
      </div>
    )
  }

  return (
    <div className="space-y-6 border-t pt-8 mt-8">
      <div>
        <h3 className="text-lg font-semibold">توليد المواعيد التلقائي</h3>
        <p className="text-sm text-gray-600">
          بعد حفظ النموذج يمكنك معاينة أو إنشاء جميع المواعيد تلقائياً
        </p>
        {lastGenerated && (
          <p className="text-xs text-emerald-600 mt-1">
            آخر توليد: <strong>{lastGenerated}</strong>
          </p>
        )}
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => callGenerate(true)}
          disabled={loading !== null}
          buttonStyle="secondary"
        >
          {loading === 'preview' ? 'جاري المعاينة...' : 'معاينة الإنشاء'}
        </Button>

        <Button onClick={() => callGenerate(false)} disabled={loading !== null}>
          {loading === 'generate' ? 'جاري الإنشاء...' : 'إنشاء المواعيد الآن'}
        </Button>
      </div>

      <p className="text-xs text-gray-500">
        • يتم منع أي تكرار تلقائياً
        <br />• اضغط على "معاينة" أولاً لمعرفة العدد المتوقع
      </p>
    </div>
  )
}

export default HomeVisitScheduleGenerator
