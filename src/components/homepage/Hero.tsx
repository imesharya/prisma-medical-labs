'use client'
import Image from 'next/image'
import { ArrowLeft, Bot, Phone, Sparkles } from 'lucide-react'
import type { CarouselApi } from '@/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: '/hero-banner.jpg',
    badgeIcon: Sparkles,
    badgeText: 'فحوصات متكاملة',
    headingStart: 'حلل',
    headingGradient: 'بثقة',
    description:
      'باقات فحص شاملة مدعومة بأحدث التقنيات الطبية — نتائج دقيقة في 3 ساعات، خدمة منزلية فورية، واستشارة طبية مجانية مع كل باقة',
    ctaText: 'اكتشف الباقات',
    ctaLink: '/packages',
    badgeBgClass: 'bg-primary/10',
    badgeTextClass: 'text-primary',
  },
  {
    id: 'slide-2',
    image: '/ai-banner.jpg',
    badgeIcon: Bot,
    badgeText: 'ذكاء اصطناعي',
    headingStart: 'بريزما',
    headingGradient: 'AI',
    description:
      'دع الذكاء الاصطناعي يختار لك الباقة المثالية بناءً على احتياجاتك الصحية في ثوانٍ — تحليل دقيق وتوصيات شخصية',
    ctaText: 'ابدأ التقييم الذكي',
    ctaLink: '/prisma-ai',
    badgeBgClass: 'bg-emerald-500/10',
    badgeTextClass: 'text-emerald-500',
  },
  {
    id: 'slide-3',
    image: '/consultation-banner.png',
    badgeIcon: Phone,
    badgeText: 'استشارات متخصصة',
    headingStart: 'استشارة',
    headingGradient: 'طبية',
    description:
      'تحدث مباشرة مع استشاريينا المتخصصين عبر الهاتف أو الفيديو — استشارة فورية، سرية تامة، وخطة علاجية مخصصة',
    ctaText: 'احجز موعدك الآن',
    ctaLink: '/#contact',
    badgeBgClass: 'bg-violet-500/10',
    badgeTextClass: 'text-violet-500',
  },
]

const Hero = () => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() ?? 0)
    api.on('select', () => setCurrent(api.selectedScrollSnap() ?? 0))
  }, [api])

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ align: 'start', direction: 'rtl', loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {HERO_SLIDES.map((slide, i) => {
            const Icon = slide.badgeIcon
            const isEven = i % 2 === 0
            const alternateOnDesktop = i > 0 && !isEven
            return (
              <CarouselItem key={slide.id} className="basis-full">
                <div
                  className={cn(
                    'relative min-h-[620px] lg:min-h-[680px] flex flex-col justify-center lg:justify-start items-stretch overflow-hidden',
                    'lg:flex-row',
                    alternateOnDesktop && 'lg:flex-row-reverse',
                  )}
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                  </div>

                  <div className="relative z-10 w-full lg:w-2/5 flex items-center px-6 md:px-12 py-12 lg:py-0 lg:px-24">
                    <div className="max-w-lg w-full">
                      {/* Badge with alternating colors */}
                      <div
                        className={cn(
                          'inline-flex items-center gap-2 w-fit px-5 py-2.5 backdrop-blur-sm rounded-3xl mb-8',
                          slide.badgeBgClass,
                        )}
                      >
                        <Icon className={cn('h-4 w-4', slide.badgeTextClass)} />
                        <span
                          className={cn(
                            'text-sm font-semibold tracking-widest uppercase',
                            slide.badgeTextClass,
                          )}
                        >
                          {slide.badgeText}
                        </span>
                      </div>

                      {/* Heading */}
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance leading-none">
                        {slide.headingStart}{' '}
                        <span className="gradient-text">{slide.headingGradient}</span>
                      </h1>

                      {/* Description */}
                      <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {slide.description}
                      </p>

                      {/* CTA */}
                      <div className="mt-10">
                        <Link href={slide.ctaLink}>
                          <Button className="text-base font-semibold px-8">
                            {slide.ctaText}
                            <ArrowLeft className="h-5 w-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* IMAGE  */}
                  <div
                    className={cn(
                      'absolute inset-0 lg:relative lg:w-4/7 overflow-hidden flex-shrink-0',
                      'lg:my-16 lg:rounded-3xl lg:shadow-xl',
                    )}
                  >
                    <Image
                      src={slide.image}
                      alt={`${slide.headingStart} ${slide.headingGradient}`}
                      fill
                      className="object-cover object-top"
                      priority
                    />

                    {/* Mobile-only dark overlay */}
                    <div className="lg:hidden absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="absolute left-auto right-6 rotate-180 top-1/2 -translate-y-1/2 size-8 bg-background/80 backdrop-blur-md border shadow-sm max-md:hidden" />
        <CarouselNext className="absolute right-auto left-6 rotate-180 top-1/2 -translate-y-1/2 size-8 bg-background/80 backdrop-blur-md border shadow-sm max-md:hidden" />
      </Carousel>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {Array.from({ length: HERO_SLIDES.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-all duration-300',
              current === index
                ? 'bg-primary scale-125 shadow-md'
                : 'bg-muted hover:bg-muted-foreground/50',
            )}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
