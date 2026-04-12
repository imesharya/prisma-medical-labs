import type { Metadata } from 'next'
import { Tajawal, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const tajawal = Tajawal({
  variable: '--font-geist-sans',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

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
    <html
      dir="rtl"
      lang="ar"
      className={`${tajawal.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
