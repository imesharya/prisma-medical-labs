'use client'

import { Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

interface HomeVisitCTAProps {
  onBookClick?: () => void
}

const HomeVisitCTA = ({ onBookClick }: HomeVisitCTAProps) => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative gradient-bg-secondary rounded-3xl overflow-hidden shadow-2xl">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent" />

          <div className="relative px-6 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">خدمة متميزة</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                نأتي إليك في منزلك
              </h2>

              {/* Subheadline */}
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-lg">
                خدمة أخذ العينات المنزلية متاحة الآن — راحتك تبدأ من باب منزلك
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex-shrink-0">
              <Link href={'/home-visit'}>
                <Button
                  variant={'outline'}
                  onClick={onBookClick}
                  className="group inline-flex items-center gap-3 px-8 py-4  transition-all duration-300 hover:scale-105"
                >
                  احجز زيارة منزلية الآن
                  <ArrowLeft className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeVisitCTA
