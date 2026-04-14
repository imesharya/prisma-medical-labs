import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { tajawal } from './config/fonts'
import WhatsappButton from '@/components/WhatsappButton'
import PhoneButton from '@/components/PhoneButton'

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
  children: React.ReactNode
}>) {
  return (
    <html dir="rtl" lang="ar">
      <body className={`${tajawal.variable} font-tajawal flex flex-col w-full antialiased`}>
        <Navbar />
        <main className="flex flex-col min-h-screen bg-background">{children}</main>
        <Footer />
        <WhatsappButton />
        <PhoneButton />
      </body>
    </html>
  )
}
