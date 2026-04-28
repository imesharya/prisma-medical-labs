'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import FadeIn from '@/components/shared/FadeIn'

const HomeVisitCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFB]">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        {[
          { c1: '#00BFFF', c2: '#0A84FF', rot: -15 },
          { c1: '#0A84FF', c2: '#6B4FBB', rot: 0 },
          { c1: '#6B4FBB', c2: '#FF4FB8', rot: 15 },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: '8%',
              top: '60%',
              width: '180%',
              height: '22%',
              transformOrigin: '0 50%',
              transform: `translateY(-50%) rotate(${b.rot}deg)`,
              background: `linear-gradient(90deg, transparent 0%, ${b.c1}28 18%, ${b.c2}22 55%, transparent 100%)`,
              filter: 'blur(30px)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 px-5 md:px-10 py-16 md:py-24 items-center">
        {/* Image column — slides in from left (natural for RTL) */}
        <div className="md:col-span-6 relative order-2 md:order-1 h-50">
          <FadeIn className="h-full" delay={300} direction="left" distance={40}>
            <div
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, #F0F2F7, #E4E7F0)`,
                border: `1px solid rgba(10,10,18,0.08)`,
                boxShadow: '0 20px 60px rgba(10,10,18,0.08)',
              }}
            >
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, #00BFFF20, transparent 70%)`,
                }}
              />
              <Image
                src={'/home-visit.webp'}
                alt=""
                fill
                className="absolute inset-0 object-cover object-center"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, #00BFFF20, transparent 70%)`,
                }}
              />
            </div>
          </FadeIn>
        </div>

        {/* Text column — slides in from right (natural for RTL reading flow) */}
        <div className="md:col-span-6 order-1 md:order-2">
          <FadeIn delay={200} direction="right" distance={30}>
            <div className="text-[10px] tracking-[0.4em] mb-3 md:mb-4 text-[#FF4FB8]">
              PREMIUM SERVICE
            </div>
          </FadeIn>

          <FadeIn delay={400} direction="right" distance={40}>
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] mb-5 md:mb-6">
              نأتي إليك.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, #0A84FF, #FF4FB8)`,
                }}
              >
                راحتك تبدأ
              </span>{' '}
              من باب المنزل.
            </h2>
          </FadeIn>

          <FadeIn delay={600} distance={24}>
            <p
              className="text-[14px] md:text-[15px] leading-[2] mb-7 md:mb-8 max-w-[520px]"
              style={{ color: 'rgba(10,10,18,0.6)' }}
            >
              فريق متخصّص يصلك في الوقت اللي تختاره، بأحدث أدوات السحب الآمن، ونتائجك تطلع لك على
              جوالك بعد ساعات.
            </p>
          </FadeIn>

          <FadeIn delay={700} distance={20}>
            <div className="flex flex-wrap items-center gap-3">
              <Link href={'/home-visit'}>
                <Button variant={'gradient'} className="rounded-3xl px-4">
                  احجز زيارة منزلية
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default HomeVisitCTA
