import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import { tajawal } from './(app)/config/fonts'
import './(app)/globals.css'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'الصفحة غير موجودة',
  description: 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.',
}

export default function NotFound() {
  return (
    <html lang="ar" dir="rtl" className={tajawal.className}>
      <body>
        <div className="min-h-dvh flex flex-col items-center justify-center px-4 py-16 bg-background relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
            {/* 404 Number */}
            <div className="relative mb-6">
              <span className="text-[10rem] sm:text-[12rem] font-bold leading-none gradient-text select-none">
                404
              </span>
              <div className="absolute inset-0 gradient-bg opacity-10 blur-3xl -z-10" />
            </div>

            {/* Message */}
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-balance">
              الصفحة غير موجودة
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 text-pretty">
              عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/">
                <Button
                  variant={'gradient'}
                  className="group flex items-center justify-center gap-2 w-full"
                >
                  <Home className="w-5 h-5" />
                  <span>العودة للرئيسية</span>
                  <ArrowLeft className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
