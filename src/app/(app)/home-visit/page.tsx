import DnaCanvas from '@/components/background/DnaCanvas'
import HomeVisitForm from '@/components/home-visit/HomeVisitForm'
import { Button } from '@/components/ui/button'
import { Icon } from '@/lib/icon'
import { Home, Sparkles } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import Image from 'next/image'
import Link from 'next/link'

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

const page = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-120 md:h-120 overflow-hidden py-16">
        <Image
          src="/home-visit.webp"
          alt=""
          fill
          className="object-cover object-[30%] md:object-center absolute inset-0 h-full"
          priority
        />
        <div className="absolute inset-0 max-md:bg-background/60 md:bg-gradient-to-l md:from-background/80 md:to-transparent" />

        <div className="relative h-full flex flex-col items-center md:items-start justify-center px-4 md:px-6 lg:px-8 text-center md:text-start md:max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance md:max-w-1/2">
            خدمتنا تصلك أينما كنت!
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 leading-relaxed text-balance">
            خدمة الزيارة المنزلية من مختبرات بريزما
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed text-balance">
            الفحص الطبي في راحة منزلك
          </p>

          <Link href="#form" className="z-10">
            <Button className="flex items-center gap-2 bg-linear-to-l from-primary to-secondary">
              <p>احجز زيارة منزلية</p>
              <Home />
            </Button>
          </Link>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative w-full overflow-hidden px-4 py-16 border-t border-border">
        <DnaCanvas />

        <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">خدمة حصرية</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            احجز زيارتك المنزلية
          </h2>
          <p className="text-lg sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            عبّئ بياناتك وسيتواصل معك فريقنا لتأكيد الزيارة المنزلية في أقرب وقت
          </p>
        </div>

        <HomeVisitForm />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
          {METRICS.map((m) => {
            const iconName = (m.icon || 'help-circle') as keyof typeof dynamicIconImports
            return (
              <div
                key={m.title}
                className="group relative rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-between border border-gray-100"
                style={{
                  background: `linear-gradient(180deg, ${m.color}08 0%, transparent 60%)`,
                }}
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
      </section>
    </div>
  )
}

export default page
