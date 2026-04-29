'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import FadeIn from '@/components/shared/FadeIn'

export const PRISMA = {
  cyan: '#00BFFF',
  blue: '#0A84FF',
  teal: '#00A99D',
  purple: '#6B4FBB',
  pink: '#FF4FB8',
  magenta: '#D61F9E',
  crimson: '#9B2335',
  ink: '#0A0A12',
  ink2: '#141420',
  paper: '#FAFAFB',
  line: 'rgba(255,255,255,0.08)',
}

const PrismaAICTA = () => {
  return (
    <section className="relative px-5 md:px-10 py-10 md:py-16 bg-white">
      <div
        className="relative rounded-[24px] md:rounded-[32px] overflow-hidden"
        style={{ background: `linear-gradient(120deg, #0A0A12 0%, #141420 55%, #1A0F2A 100%)` }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-55">
          {[
            { c1: PRISMA.cyan, c2: PRISMA.blue, rot: -12 },
            { c1: PRISMA.blue, c2: PRISMA.purple, rot: 0 },
            { c1: PRISMA.purple, c2: PRISMA.magenta, rot: 12 },
            { c1: PRISMA.cyan, c2: PRISMA.teal, rot: -24 },
            { c1: PRISMA.magenta, c2: PRISMA.pink, rot: 24 },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: '8%',
                top: '40%',
                width: '180%',
                height: '22%',
                transformOrigin: '0 50%',
                transform: `translateY(-50%) rotate(${b.rot}deg)`,
                background: `linear-gradient(90deg, transparent 0%, ${b.c1}55 18%, ${b.c2}40 55%, transparent 100%)`,
                filter: 'blur(28px)',
              }}
            />
          ))}
          <div
            className="absolute"
            style={{
              left: '8%',
              top: '40%',
              width: 6,
              height: 6,
              background: '#fff',
              borderRadius: '50%',
              boxShadow: `0 0 32px 10px ${PRISMA.cyan}55, 0 0 80px 30px ${PRISMA.pink}22`,
              transform: 'translate(-50%,-50%)',
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 px-6 md:px-12 py-10 md:py-14 items-center text-white">
          {/* Visual card — left side, slides in from left */}
          <div className="md:col-span-5 flex justify-center order-2 md:order-1">
            <FadeIn delay={300} direction="left" distance={40}>
              <div
                className="relative rounded-3xl flex items-center justify-center"
                style={{
                  width: 200,
                  height: 200,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <div
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 22,
                    background: `linear-gradient(135deg, ${PRISMA.cyan} 0%, ${PRISMA.purple} 55%, ${PRISMA.pink} 100%)`,
                    boxShadow: `0 16px 40px ${PRISMA.purple}55, inset 0 1px 0 rgba(255,255,255,0.4)`,
                  }}
                />
                <div
                  className="absolute top-3 right-3 w-6 h-6 rounded-md"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />
              </div>
            </FadeIn>
          </div>

          {/* Text content — right side, slides in from right */}
          <div className="md:col-span-7 order-1 md:order-2">
            <FadeIn delay={200} direction="right" distance={30}>
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-5 text-[10px] font-bold tracking-[0.25em]"
                style={{
                  background: 'rgba(10,132,255,0.15)',
                  border: `1px solid ${PRISMA.blue}50`,
                  color: PRISMA.cyan,
                }}
              >
                POWERED BY AI <span style={{ color: PRISMA.pink }}>✦</span>
              </div>
            </FadeIn>

            <FadeIn delay={400} direction="right" distance={40}>
              <h3 className="font-bold mb-5 text-[30px] md:text-[40px] lg:text-[44px] leading-[1.15]">
                دع{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${PRISMA.cyan}, ${PRISMA.pink})`,
                  }}
                >
                  بريزما AI
                </span>{' '}
                يختار
                <br className="hidden md:block" />
                الباقة المثالية لك.
              </h3>
            </FadeIn>

            <FadeIn delay={600} distance={24}>
              <p className="text-[13px] md:text-[14px] leading-[1.9] mb-6 md:mb-7 max-w-[480px] text-white/65">
                تحليل دقيق لاحتياجاتك الصحية في ثوانٍ — وتوصيات شخصية بناءً على أسلوب حياتك.
              </p>
            </FadeIn>

            <FadeIn delay={700} distance={20}>
              <Link href={'/prisma-ai'}>
                <Button variant={'outline'} className="rounded-3xl px-4">
                  ابدأ التقييم الذكي
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrismaAICTA
