import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { tajawal } from './config/fonts'
import WhatsappButton from '@/components/shared/WhatsappButton'
import PhoneButton from '@/components/shared/PhoneButton'
import NextTopLoader from 'nextjs-toploader'
import { ReactNode } from 'react'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'مختبرات بريزما الطبية',
  description:
    'باقات تحاليل شاملة بأحدث التقنيات، خدمة زيارة منزلية، نتائج دقيقة وسريعة. احجز الآن!',

  applicationName: 'مختبرات بريزما الطبية',

  creator: 'Your Name',
  publisher: 'مختبرات بريزما الطبية',

  openGraph: {
    title: 'مختبرات بريزما الطبية',
    description:
      'باقات تحاليل شاملة بأحدث التقنيات، خدمة زيارة منزلية، نتائج دقيقة وسريعة. احجز الآن!',
    siteName: 'مختبرات بريزما الطبية',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'مختبرات بريزما الطبية preview',
      },
    ],
    locale: 'ar',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'مختبرات بريزما الطبية',
    description:
      'باقات تحاليل شاملة بأحدث التقنيات، خدمة زيارة منزلية، نتائج دقيقة وسريعة. احجز الآن!',
    images: [`${process.env.NEXT_PUBLIC_SERVER_URL}/og-image.png`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html dir="rtl" lang="ar">
      <body className={`${tajawal.variable} font-tajawal flex flex-col w-full antialiased`}>
        <NextTopLoader color="#006bfa" showSpinner={false} />
        <Navbar />
        <main className="flex flex-col min-h-[calc(100vh-80px)] bg-background">{children}</main>
        <Footer />
        <WhatsappButton />
        <PhoneButton />
        <Toaster />
      </body>
    </html>
  )
}
