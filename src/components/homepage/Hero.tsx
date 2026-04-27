'use client'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

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

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFB]">
      {/* soft prism beams */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ opacity: 0.55 }}
      >
        {[
          { c1: PRISMA.cyan, c2: PRISMA.blue, rot: -18 },
          { c1: PRISMA.blue, c2: PRISMA.purple, rot: -6 },
          { c1: PRISMA.purple, c2: PRISMA.magenta, rot: 6 },
          { c1: PRISMA.magenta, c2: PRISMA.pink, rot: 18 },
          { c1: PRISMA.cyan, c2: PRISMA.teal, rot: -30 },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: '92%',
              top: '18%',
              width: '180%',
              height: '22%',
              transformOrigin: '0 50%',
              transform: `translateY(-50%) rotate(${b.rot}deg)`,
              background: `linear-gradient(90deg, transparent 0%, ${b.c1}35 18%, ${b.c2}28 55%, transparent 100%)`,
              filter: 'blur(30px)',
            }}
          />
        ))}
        <div
          className="absolute"
          style={{
            left: '92%',
            top: '18%',
            width: 6,
            height: 6,
            background: '#fff',
            borderRadius: '50%',
            boxShadow: `0 0 40px 12px ${PRISMA.cyan}55, 0 0 80px 40px ${PRISMA.pink}22`,
            transform: 'translate(-50%,-50%)',
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-5 md:px-10 pt-14 md:pt-20 lg:pt-28 pb-16 md:pb-20">
        <div className="lg:col-span-7">
          <div
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full mb-6 md:mb-8"
            style={{
              border: `1px solid ${PRISMA.blue}35`,
              background: `${PRISMA.blue}08`,
              color: PRISMA.blue,
              fontSize: 10,
              letterSpacing: '0.18em',
              fontWeight: 700,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: PRISMA.blue, boxShadow: `0 0 10px ${PRISMA.blue}` }}
            />
            فحوصات متكاملة — مختبرات بريزما
          </div>
          <h1
            className="text-[64px] sm:text-[88px] md:text-[104px] lg:text-[128px]"
            style={{ fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em' }}
          >
            <span
              style={{
                background: `linear-gradient(135deg, #0A0A12 0%, #0A0A12 45%, ${PRISMA.blue} 75%, ${PRISMA.pink} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              حلّل
            </span>
            <br />
            <span className="relative">
              <span style={{ color: '#0A0A12' }}>بثقة</span>
              <span
                className="absolute -bottom-2 right-0 w-full h-1"
                style={{
                  background: `linear-gradient(90deg, ${PRISMA.cyan}, ${PRISMA.purple}, ${PRISMA.pink})`,
                }}
              />
            </span>
            <span style={{ color: PRISMA.pink }}>.</span>
          </h1>
          <p
            className="mt-6 md:mt-10 text-[15px] md:text-[18px] leading-[1.9] max-w-[520px]"
            style={{ color: 'rgba(10,10,18,0.62)' }}
          >
            باقات فحص شاملة بأحدث التقنيات الطبية — نتائج دقيقة في{' '}
            <strong style={{ color: '#0A0A12' }}>3 ساعات</strong>، خدمة منزلية فورية، واستشارة طبية
            مجانية مع كل باقة.
          </p>
          <div className="mt-7 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
            <Link href={'/packages'}>
              <Button variant={'secondary'} size={'lg'} className="rounded-3xl px-4">
                اكتشف الباقات
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </Button>
            </Link>
            <Link href={'/prisma-ai'}>
              <Button variant={'outline'} size={'lg'} className="rounded-3xl px-4">
                ابدأ التقييم الذكي
              </Button>
            </Link>
            <Link href={'/consultation'}>
              <Button variant={'gradient'} size={'lg'} className="rounded-3xl px-4">
                احجز موعدك
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </Button>
            </Link>
          </div>

          <div
            className="mt-10 md:mt-14 flex flex-wrap items-center gap-5 md:gap-8"
            style={{ color: 'rgba(10,10,18,0.5)', fontSize: 12 }}
          >
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={PRISMA.teal}
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4M12 2a10 10 0 110 20 10 10 0 010-20z" />
              </svg>
              معتمد من صحتي
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={PRISMA.teal}
                strokeWidth="2"
              >
                <path d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              نتائج في 3 ساعات
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={PRISMA.teal}
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              زيارة منزلية
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div
            className="relative mx-auto"
            style={{ height: 'clamp(340px, 50vw, 560px)', maxWidth: 520 }}
          >
            <div
              className="absolute rounded-3xl overflow-hidden"
              style={{
                inset: '20px 0 60px 40px',
                background: `linear-gradient(135deg, #F0F2F7, #E4E7F0)`,
                boxShadow: `0 40px 80px rgba(10,10,18,0.12), 0 0 0 1px rgba(10,10,18,0.08)`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 40%, rgba(10,10,18,0.15) 100%), radial-gradient(ellipse at 30% 20%, ${PRISMA.blue}30 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, ${PRISMA.pink}22 0%, transparent 55%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                  style={{
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    background: `conic-gradient(from 90deg, ${PRISMA.cyan}, ${PRISMA.purple}, ${PRISMA.pink}, ${PRISMA.cyan})`,
                    filter: 'blur(40px)',
                    opacity: 0.55,
                  }}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-start p-6 md:p-8">
                <Image
                  className="absolute inset-0 object-cover"
                  src={'/hero-banner.jpg'}
                  alt=""
                  fill
                />
                <div
                  className="text-[10px] tracking-[0.3em]"
                  style={{ color: 'rgba(10,10,18,0.45)' }}
                >
                  PATIENT FIRST
                </div>
                <div
                  className="text-[18px] md:text-[22px] font-bold mt-2"
                  style={{ color: '#0A0A12' }}
                >
                  دقة طبية. خدمة إنسانية.
                </div>
              </div>
            </div>

            <div
              className="absolute top-0 right-0 rounded-2xl px-4 md:px-5 py-3 md:py-4 bg-white"
              style={{
                border: `1px solid rgba(10,10,18,0.08)`,
                boxShadow: '0 16px 40px rgba(10,10,18,0.08)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${PRISMA.cyan}15`, border: `1px solid ${PRISMA.cyan}30` }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={PRISMA.blue}
                    strokeWidth="2"
                  >
                    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      direction: 'ltr',
                      textAlign: 'right',
                      color: '#0A0A12',
                    }}
                  >
                    3h
                  </div>
                  <div style={{ fontSize: 10, color: 'rgba(10,10,18,0.5)' }}>النتيجة جاهزة</div>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-4 left-0 rounded-2xl px-4 md:px-5 py-3 md:py-4 bg-white"
              style={{
                border: `1px solid ${PRISMA.cyan}30`,
                boxShadow: `0 16px 40px ${PRISMA.cyan}20`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${PRISMA.cyan}, ${PRISMA.purple})`,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.5"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0A0A12' }}>بريزما AI</div>
                  <div style={{ fontSize: 10, color: 'rgba(10,10,18,0.5)' }}>
                    اختر الباقة المثالية
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
