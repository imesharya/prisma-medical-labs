import DnaCanvas from '@/components/background/DnaCanvas'
import HomeVisitForm from '@/components/home-visit/HomeVisitForm'
import { Button } from '@/components/ui/button'
import { Icon } from '@/lib/icon'
import { Calendar, Home, Phone, Sparkles } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import FadeIn from '@/components/shared/FadeIn'

const METRICS: { title: string; description: string; icon: string; color: string }[] = [
  {
    title: 'تواصل سريع',
    description: 'نتواصل معك خلال أقل من ساعة',
    icon: 'zap',
    color: '#00bfff',
  },
  {
    title: 'خدمة منزلية',
    description: 'أخذ العينات في منزلك براحة تامة',
    icon: 'home',
    color: '#9B2335',
  },
  {
    title: 'حجز بسيط',
    description: 'خطوتان فقط لتأكيد الزيارة',
    icon: 'circle-check-big',
    color: '#00a99d',
  },
]

const page = async () => {
  const payload = await getPayload({ config })

  const { docs: availableSlots } = await payload.find({
    collection: 'home-visit-time-slots',
    where: {
      availabilityStatus: { not_equals: 'manually_closed' },
    },
    limit: 1000,
    depth: 0,
  })

  const hexToRgb = (hex: string) => {
    const cleanHex = hex.replace('#', '')
    const bigint = parseInt(cleanHex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r}, ${g}, ${b}`
  }

  const baseColor = '#6b4fbb'
  const hexColor = hexToRgb(baseColor)

  const buildWhatsAppLink = () => {
    const whatsappMessage = `السلام عليكم ورحمة الله وبركاته

أريد حجز زيارة منزلية

أرجو التكرم بالتواصل معي للتأكيد النهائي.`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    return `https://wa.me/+966920031642?text=${encodedMessage}`
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center overflow-hidden bg-cover bg-center bg-blend-overlay pt-20 pb-10 px-8">
        <Image
          src="/home-visit.webp"
          alt=""
          fill
          className="object-cover object-[30%] md:object-center"
          priority
        />

        {/* Mobile overlay */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ backgroundColor: `rgba(${hexColor},0.85)` }}
        />

        {/* Desktop overlay */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: `linear-gradient(
              to left,
              rgba(${hexColor},0.85) 0%,
              rgba(${hexColor},0.7) 30%,
              transparent 70%
            ),
            radial-gradient(
              ellipse at 70% 30%,
              rgba(${hexColor},0.15) 0%,
              transparent 55%
            )`,
          }}
        />

        {/* BOTTOM FADE TRANSITION */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none"
          style={{
            background: `linear-gradient(
              to top,
              rgba(${hexColor}, 1) 0%,
              rgba(${hexColor}, 0.5) 50%,
              transparent 100%
            )`,
          }}
        />

        <div className="relative max-w-[700px] z-10">
          <FadeIn delay={300} direction="left" distance={20}>
            <p className="text-[10px] tracking-[6px] text-white/70 font-medium uppercase mb-3">
              PREMIUM SERVICE
            </p>
          </FadeIn>

          <FadeIn delay={400} direction="left" distance={40}>
            <h1 className="font-extrabold text-[clamp(32px,5vw,52px)] leading-[1.3] text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              خدمتنا تصلك أينما كنت!
            </h1>
          </FadeIn>

          <FadeIn delay={600} distance={24}>
            <p className="text-[15px] text-white/80 font-light leading-[1.9] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              خدمة الزيارة المنزلية من مختبرات بريزما الفحص الطبي في راحة منزلك
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-30 w-full overflow-hidden -mt-16 md:-mt-20 pb-8">
        <DnaCanvas />

        {/* Content wrapper with contrasting background */}
        <div className="relative z-10 rounded-t-[2.5rem] px-2 pb-8 md:px-6 lg:px-8">
          <FadeIn direction="up" delay={600} distance={24}>
            <HomeVisitForm availableSlots={availableSlots} />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-4">
            {METRICS.map((m) => {
              const iconName = (m.icon || 'help-circle') as keyof typeof dynamicIconImports
              return (
                <div
                  key={m.title}
                  className="bg-background group relative rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-between border border-gray-100"
                >
                  {/* Accent Glow Layer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                      background: `radial-gradient(circle at top right, ${m.color}22, transparent 60%)`,
                    }}
                  />

                  <div className="relative flex md:flex-col items-center justify-between gap-4 md:mb-6">
                    <div
                      className="rounded-xl p-4 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${m.color}18`,
                        color: m.color,
                      }}
                    >
                      <Icon name={iconName} size={24} />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold leading-tight flex-1">{m.title}</h3>
                  </div>

                  <p className="relative leading-relaxed text-sm text-center text-gray-600 mb-auto flex-grow">
                    {m.description}
                  </p>

                  {/* Hover Border Accent */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                      boxShadow: `0 0 0 1px ${m.color}40 inset`,
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
