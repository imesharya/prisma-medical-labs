import { getPayload } from 'payload'
import config from '@/payload.config'
import TestsList from '@/components/tests/TestsList'
import { Calendar, Phone } from 'lucide-react'
import FadeIn from '@/components/shared/FadeIn'

export default async function Page() {
  const payload = await getPayload({ config })

  const { docs: testCategories } = await payload.find({
    collection: 'test-categories',
    limit: 0,
    sort: 'displayOrder',
  })

  const { docs: tests } = await payload.find({
    collection: 'tests',
    where: { individualSale: { equals: true } },
    limit: 0,
  })

  const buildWhatsAppLink = () => {
    const whatsappMessage = `السلام عليكم ورحمة الله وبركاته

أريد الاستفسار عن التحاليل الفردية

أرجو التكرم بالتواصل معي للتأكيد النهائي.`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    return `https://wa.me/+966920031642?text=${encodedMessage}`
  }

  const hexToRgb = (hex: string) => {
    const cleanHex = hex.replace('#', '')
    const bigint = parseInt(cleanHex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r}, ${g}, ${b}`
  }

  const backgroundColor = '#1e293a'
  const baseColor = hexToRgb(backgroundColor)

  return (
    <div className="w-full">
      {/* Hero Section — same style as package type, no image */}
      <section className="relative h-[480px] flex items-center overflow-hidden bg-cover bg-center bg-blend-overlay pt-20 pb-10 px-8">
        <div className="absolute inset-0" style={{ backgroundColor: `rgba(${baseColor},0.85)` }} />

        <div className="relative max-w-[700px] z-10">
          <FadeIn delay={300} direction="left" distance={20}>
            <p className="text-[10px] tracking-[6px] text-white/70 font-medium uppercase mb-3">
              INDIVIDUAL TESTS
            </p>
          </FadeIn>

          <FadeIn delay={400} direction="left" distance={40}>
            <h1 className="font-extrabold text-[clamp(32px,5vw,52px)] leading-[1.3] text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              تصفح جميع التحاليل الطبية الفردية
            </h1>
          </FadeIn>

          <FadeIn delay={600} distance={24}>
            <p className="text-[15px] text-white/80 font-light leading-[1.9] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              نتائج دقيقة وسريعة بأسعار تنافسية من مختبرات بريزما
            </p>
          </FadeIn>

          <FadeIn delay={700} distance={20}>
            <div className="flex gap-3 flex-wrap">
              <a
                href={buildWhatsAppLink()}
                className="text-white text-sm font-bold cursor-pointer no-underline inline-flex items-center gap-2 transition-all duration-300 px-9 py-3.5 rounded-[10px] hover:brightness-110 hover:shadow-lg border-[1.5px] border-solid border-border/20"
                style={{ backgroundColor: backgroundColor }}
              >
                <Calendar className="size-[18px]" strokeWidth={2} />
                احجز الآن
              </a>
              <a
                href="tel:+966920031642"
                className="text-white text-sm font-semibold cursor-pointer no-underline inline-flex items-center gap-2 backdrop-blur-md transition-all duration-300 px-9 py-3.5 rounded-[10px] border-[1.5px] border-solid border-white/30 hover:bg-white/25"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <Phone className="size-[18px]" strokeWidth={2} />
                اتصل بنا
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tests List with Search & Filters */}
      <div className="w-full bg-background">
        <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
          <TestsList tests={tests} testCategories={testCategories} />
        </div>
      </div>
    </div>
  )
}
