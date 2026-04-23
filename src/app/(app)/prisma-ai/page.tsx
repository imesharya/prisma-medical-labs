import HeroStory from '@/components/HeroStory'
import Image from 'next/image'
import React from 'react'
import { Amiri } from 'next/font/google'

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['700'],
  display: 'swap',
})

type Spark = {
  size: number
  color: string
  top?: string
  left?: string
  right?: string
  delay: string
  shadow: string
}

const sparks: Spark[] = [
  {
    size: 4,
    color: '#2bb673',
    top: '12%',
    left: '18%',
    delay: '0s',
    shadow: '0_0_12px_#2bb673,0_0_24px_rgba(43,182,115,0.4)',
  },
  {
    size: 3,
    color: '#fff',
    top: '22%',
    right: '12%',
    delay: '1.2s',
    shadow: '0_0_8px_rgba(255,255,255,0.6)',
  },
  {
    size: 5,
    color: '#2bb673',
    top: '38%',
    left: '8%',
    delay: '2.5s',
    shadow: '0_0_14px_#2bb673,0_0_28px_rgba(43,182,115,0.3)',
  },
  {
    size: 3,
    color: '#255877',
    top: '55%',
    right: '22%',
    delay: '0.8s',
    shadow: '0_0_10px_#255877,0_0_20px_rgba(37,88,119,0.4)',
  },
  {
    size: 2,
    color: '#fff',
    top: '30%',
    left: '42%',
    delay: '3.2s',
    shadow: '0_0_6px_rgba(255,255,255,0.5)',
  },
]

const Page: React.FC = () => {
  return (
    <section className="relative flex grow items-center justify-center">
      {/* Background Image */}
      <Image
        src="/ai-concept-hero.jpg"
        alt=""
        fill
        priority
        className="absolute inset-0 h-full object-cover object-center"
      />

      {/* Overlay gradients */}
      <div
        className="pointer-events-none absolute inset-0 z-0
        bg-[linear-gradient(to_bottom,rgba(2,10,24,0.7)_0%,rgba(2,10,24,0.4)_25%,rgba(2,10,24,0.15)_45%,transparent_60%),linear-gradient(to_top,rgba(2,10,24,0.75)_0%,rgba(2,10,24,0.4)_25%,transparent_50%),linear-gradient(to_bottom,rgba(2,10,24,0.25)_0%,rgba(2,10,24,0.25)_100%),radial-gradient(ellipse_70%_60%_at_center_40%,transparent_0%,rgba(2,10,24,0.5)_100%)]"
      />

      {/* Floating sparks */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {sparks.map((spark, i) => (
          <div
            key={i}
            className="absolute animate-spark-float rounded-full pointer-events-auto"
            style={{
              width: spark.size,
              height: spark.size,
              background: spark.color,
              top: spark.top,
              left: spark.left,
              right: spark.right,
              animationDelay: spark.delay,
              boxShadow: spark.shadow.replaceAll('_', ' '),
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div
        className="z-10 flex max-w-[900px] flex-col items-center gap-12 rounded-[2rem] px-10 py-12
        bg-[radial-gradient(ellipse_110%_80%_at_center_30%,rgba(2,10,24,0.65)_0%,rgba(2,10,24,0.4)_50%,transparent_80%)]"
      >
        {/* Logo */}
        <div>
          <div className="relative z-20 mb-4 inline-flex items-center gap-2.5 animate-[fadeUp_0.8s_ease-out]">
            <Image
              src="/ai-year-logo.png"
              alt="عام الذكاء الاصطناعي ٢٠٢٦"
              height={22}
              width={60}
              className="object-contain opacity-85 drop-shadow-[0_0_6px_rgba(43,182,115,0.2)]"
            />
          </div>

          {/* Heading */}
          <h1 className="relative inline-flex">
            {/* Arabic title */}
            <span
              className={`relative z-[1] block bg-gradient-to-b
            from-white via-[#a8edce] to-[#2bb673]
            bg-clip-text text-transparent
            drop-shadow-[0_0_20px_rgba(43,182,115,0.5)]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
            tracking-[6px] leading-[1.1]
            text-[clamp(56px,10vw,130px)] ${amiri.className}`}
              style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
            >
              بريزمـــا
            </span>

            {/* AI background text */}
            <span
              className="absolute left-1/2 top-1/2 z-0
            -translate-x-1/2 -translate-y-1/2
            bg-gradient-to-br
            from-[#2bb673] via-[#4ee8a0]
            via-[#00bfff] to-[#3a7ca5]
            bg-clip-text text-transparent
            opacity-25
            drop-shadow-[0_0_40px_rgba(43,182,115,0.3)]
            tracking-[-4px] leading-[0.75]
            text-[clamp(90px,16vw,200px)]"
              style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900 }}
            >
              AI
            </span>
          </h1>
        </div>

        {/* Main slogan */}
        <p
          className="flex items-center justify-center gap-[6px]
          whitespace-nowrap flex-nowrap
          text-[clamp(20px,4vw,34px)]
          font-semibold tracking-[1.5px]
          text-white/95
          drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]
          drop-shadow-[0_0_30px_rgba(0,0,0,0.4)]"
        >
          غيرنا مفهوم التحاليل
          <span
            className="inline-block font-extrabold text-[#4ee8a0]
            animate-[dotsFlicker_2s_ease-in-out_infinite]
            drop-shadow-[0_0_10px_rgba(43,182,115,0.6)]"
          >
            ..
          </span>
          <span
            className="relative inline-block whitespace-nowrap
            rounded-lg border border-[#2bb673]/30
            bg-[#2bb673]/20 px-5 py-1
            font-extrabold text-[#4ee8a0]
            drop-shadow-[0_0_12px_rgba(43,182,115,0.5)]"
          >
            لعيونك
          </span>
        </p>

        {/* Sub slogan */}
        <p
          className="hero-slogan
          -mt-4
          text-[clamp(15px,3vw,20px)]
          font-normal leading-[1.9]
          tracking-[0.5px]
          text-white/75
          animate-[fadeUp_1s_ease-out_0.35s_backwards]
          drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]"
        >
          من أعراض ما تفهمها … إلى باقة تحاليل مصممة خصيصاً لعيونك <strong>في دقيقتين</strong>
        </p>

        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <HeroStory />
          {/* Coming Soon badge */}
          <div className="relative z-20 flex justify-center animate-[fadeUp_1s_ease-out_0.2s_backwards]">
            <span
              className="
      relative inline-flex items-center gap-2
      rounded-full border border-[#2bb673]/40
      bg-[#2bb673]/10 px-5 py-1.5
      text-sm font-semibold tracking-wider
      text-[#4ee8a0]
      shadow-[0_0_20px_rgba(43,182,115,0.25)]
      backdrop-blur-md
    "
            >
              <span className="h-2 w-2 animate-ping rounded-full bg-[#2bb673]" />
              قريباً
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
