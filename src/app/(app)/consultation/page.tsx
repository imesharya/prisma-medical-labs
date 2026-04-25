import Image from 'next/image'
import ConsultationForm from '@/components/forms/ConsultationForm'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Page() {
  const payload = await getPayload({ config })
  const { docs: activeConsultations } = await payload.find({
    collection: 'consultations',
    where: {
      status: { not_equals: 'cancelled' },
    },
    limit: 100,
  })

  return (
    <main className="min-h-screen bg-[#0f1419] text-[#f0f4f8]">
      {/* HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-[#1a3a6b] to-[#0f1419] flex items-center justify-center overflow-hidden">
        <Image
          src="/consultation-banner.png"
          alt=""
          fill
          className="absolute inset-0 object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332]/30 to-[#1a2332]/70" />

        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#00bfff] to-[#00a99d] bg-clip-text text-transparent">
            احجز استشارتك الطبية
          </h1>
          <p className="text-lg md:text-xl text-[#a8b5c3] mb-8 leading-relaxed">
            تحدّث مع استشاريينا المتخصصين — نساعدك قبل التحليل أو نشرح لك نتائجك بدقة وعناية
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[#a8b5c3]">
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> مجانية
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> خصوصية تامة
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> استشاري متخصص
            </span>
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <ConsultationForm activeConsultations={activeConsultations} />

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '👨‍⚕️',
              title: 'استشارة متخصصة',
              desc: 'استشاريون متخصصون لديهم خبرة عملية في المجال الطبي والتحاليل الطبية.',
            },
            {
              icon: '🔒',
              title: 'خصوصية تامة',
              desc: 'بياناتك والخصوصيتك محمية وآمنة وفقاً لأعلى معايير الأمان الدولية.',
            },
            {
              icon: '💰',
              title: 'مجانية بالكامل',
              desc: 'استشارتك الطبية مجانية تماماً بدون أي رسوم إضافية أو تكاليف خفية.',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#1a2332]/70 to-[#1a2332]/40 border border-white/10 rounded-3xl p-10 text-center hover:border-cyan-400/50 transition-all hover:-translate-y-1"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-[#a8b5c3] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
