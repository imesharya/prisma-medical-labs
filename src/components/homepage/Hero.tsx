'use client'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Zap, Calendar, CheckCircle, Clock, Home, Sparkles, ArrowLeft } from 'lucide-react'
import FadeIn from '@/components/shared/FadeIn'

const PRISMA = {
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
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-55">
        {[
          { c1: PRISMA.cyan, c2: PRISMA.blue, rot: -18 },
          { c1: PRISMA.blue, c2: PRISMA.purple, rot: -6 },
          { c1: PRISMA.purple, c2: PRISMA.magenta, rot: 6 },
          { c1: PRISMA.magenta, c2: PRISMA.pink, rot: 18 },
          { c1: PRISMA.cyan, c2: PRISMA.teal, rot: -30 },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute -translate-y-1/2"
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
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          style={{
            left: '92%',
            top: '18%',
            width: 6,
            height: 6,
            boxShadow: `0 0 40px 12px ${PRISMA.cyan}55, 0 0 80px 40px ${PRISMA.pink}22`,
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-5 md:px-10 pt-14 md:pt-20 lg:pt-28 pb-16 md:pb-20">
        {/* LEFT COLUMN — all text content grouped */}
        <div className="lg:col-span-7">
          <FadeIn delay={200} distance={20}>
            <div
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full mb-6 md:mb-8 text-[10px] font-bold tracking-[0.18em]"
              style={{
                border: `1px solid ${PRISMA.blue}35`,
                background: `${PRISMA.blue}08`,
                color: PRISMA.blue,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: PRISMA.blue, boxShadow: `0 0 10px ${PRISMA.blue}` }}
              />
              فحوصات متكاملة — مختبرات بريزما
            </div>
          </FadeIn>

          <FadeIn delay={400} direction="left" distance={40}>
            <h1 className="text-[64px] sm:text-[88px] md:text-[104px] lg:text-[128px] font-extrabold leading-[0.95] tracking-[-0.04em]">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, #0A0A12 0%, #0A0A12 45%, ${PRISMA.blue} 75%, ${PRISMA.pink} 100%)`,
                }}
              >
                حلّل
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={500} direction="left" distance={40}>
            <h1 className="text-[64px] sm:text-[88px] md:text-[104px] lg:text-[128px] font-extrabold leading-[0.95] tracking-[-0.04em]">
              <span className="relative text-[#0A0A12]">
                بثقة
                <span
                  className="absolute -bottom-2 right-0 w-full h-1"
                  style={{
                    background: `linear-gradient(90deg, ${PRISMA.cyan}, ${PRISMA.purple}, ${PRISMA.pink})`,
                  }}
                />
              </span>
              <span className="text-[#FF4FB8]">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={600} distance={24}>
            <p className="mt-6 md:mt-10 text-[15px] md:text-lg leading-[1.9] max-w-[600px] text-[#0A0A129E]">
              باقات فحص شاملة بأحدث التقنيات الطبية — نتائج دقيقة في{' '}
              <strong className="text-[#0A0A12]">وقت قياسي</strong>،<br /> خدمة منزلية فورية،
              واستشارة طبية مجانية مع كل باقة.``
            </p>
          </FadeIn>

          <FadeIn delay={700} distance={20}>
            <div className="mt-7 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
              <Link href="/packages">
                <Button variant="secondary" size="lg" className="rounded-3xl px-4 group">
                  اكتشف الباقات
                  <ArrowLeft
                    className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                    strokeWidth={2.5}
                  />
                </Button>
              </Link>
              <Link href="/prisma-ai">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-3xl px-4 transition-all duration-300 hover:shadow-md"
                >
                  ابدأ التقييم الذكي
                </Button>
              </Link>
              <Link href="/consultation">
                <Button
                  variant="gradient"
                  size="lg"
                  className="rounded-3xl px-4 transition-all duration-300 hover:brightness-110 hover:shadow-lg"
                >
                  احجز موعدك
                  <Calendar className="size-3.5" strokeWidth={2} />
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={900} distance={16}>
            <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-5 md:gap-8 text-xs text-[#0A0A1280]">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4" style={{ color: PRISMA.teal }} strokeWidth={2} />
                معتمد من صحتي
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4" style={{ color: PRISMA.teal }} strokeWidth={2} />
                نتائج سريعة
              </div>
              <div className="flex items-center gap-2">
                <Home className="size-4" style={{ color: PRISMA.teal }} strokeWidth={2} />
                زيارة منزلية
              </div>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN — entire visual block with relative children grouped */}
        <div className="lg:col-span-5">
          <FadeIn delay={500} direction="right" distance={40}>
            <div
              className="relative mx-auto"
              style={{ height: 'clamp(340px, 50vw, 560px)', maxWidth: 520 }}
            >
              <div
                className="absolute rounded-3xl overflow-hidden transition-transform duration-700 hover:scale-[1.02]"
                style={{
                  inset: '20px 0 60px 40px',
                  background: 'linear-gradient(135deg, #F0F2F7, #E4E7F0)',
                  boxShadow: '0 40px 80px #0A0A121F, 0 0 0 1px #0A0A1214',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 40%, #0A0A1226 100%), radial-gradient(ellipse at 30% 20%, ${PRISMA.blue}30 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, ${PRISMA.pink}22 0%, transparent 55%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div
                    className="rounded-full animate-[spin_20s_linear_infinite]"
                    style={{
                      width: 180,
                      height: 180,
                      background: `conic-gradient(from 90deg, ${PRISMA.cyan}, ${PRISMA.purple}, ${PRISMA.pink}, ${PRISMA.cyan})`,
                      filter: 'blur(40px)',
                      opacity: 0.55,
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-start p-6 md:p-8">
                  <Image
                    className="absolute inset-0 object-cover transition-transform duration-700 hover:scale-105"
                    src="/hero-banner.jpg"
                    alt=""
                    fill
                  />
                  <div className="text-[10px] tracking-[0.3em] text-[#0A0A1273]">PATIENT FIRST</div>
                  <div className="text-lg md:text-[22px] font-bold mt-2 text-[#0A0A12]">
                    دقة طبية. خدمة إنسانية.
                  </div>
                </div>
              </div>

              <div
                className="absolute top-0 right-0 rounded-2xl px-4 md:px-5 py-3 md:py-4 bg-white hover:-translate-y-1 transition-transform duration-300"
                style={{
                  border: '1px solid #0A0A1214',
                  boxShadow: '0 16px 40px #0A0A1214',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${PRISMA.cyan}15`,
                      border: `1px solid ${PRISMA.cyan}30`,
                    }}
                  >
                    <Zap className="size-4" style={{ color: PRISMA.blue }} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#0A0A12]">سريعة</div>
                    <div className="text-[10px] text-[#0A0A1280]">النتيجة جاهزة</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-4 left-0 rounded-2xl px-4 md:px-5 py-3 md:py-4 bg-white hover:-translate-y-1 transition-transform duration-300"
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
                    <Sparkles className="size-3.5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#0A0A12]">بريزما AI</div>
                    <div className="text-[10px] text-[#0A0A1280]">اختر الباقة المثالية</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Hero
