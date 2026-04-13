import Image from 'next/image'
import { ArrowLeft, Bot, Phone, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image src="/hero-banner.jpg" alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">تقنيات طبية متقدمة</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance">
              حلل <span className="gradient-text">بثقة</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              باقات فحص متكاملة مدعومة بأحدث التقنيات الطبية — نتائج دقيقة في 3 ساعات، خدمة منزلية،
              واستشارة طبية مجانية
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium gradient-bg text-primary-foreground rounded-xl gradient-bg-hover shadow-lg shadow-primary/25">
                اكتشف الباقات
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* AI Card */}
            <div className="col-span-2 sm:col-span-1 lg:col-start-2 animate-float">
              <div className="relative bg-card/90 backdrop-blur-sm border border-border border-t-4 border-t-primary rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 gradient-bg rounded-xl">
                    <Bot className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold gradient-text">بريزما AI</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      اكتشف باقتك المثالية بالذكاء الاصطناعي
                    </p>
                  </div>
                  <button className="w-full py-3 text-sm font-medium gradient-bg text-primary-foreground rounded-xl gradient-bg-hover shadow-md">
                    ابدأ التقييم الذكي
                  </button>
                </div>
              </div>
            </div>

            {/* Consultation Card */}
            <div className="col-span-2 sm:col-span-1 lg:col-start-1 lg:row-start-2 animate-float-delayed">
              <div className="relative bg-card/90 backdrop-blur-sm border border-border border-t-4 border-t-secondary rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Phone className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold gradient-text">استشارة طبية</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      تحدّث مع استشاريينا المتخصصين
                    </p>
                  </div>
                  <button className="w-full py-3 text-sm font-medium bg-card text-foreground border border-border rounded-xl hover:bg-muted transition-all duration-200">
                    احجز موعدك
                  </button>
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
