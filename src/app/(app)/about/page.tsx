import { Button } from '@/components/ui/button'
import { Icon } from '@/lib/icon'
import { Sparkles } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'من نحن',
  description:
    'تعد مختبرات بريزما (Prisma Laboratories) ثمرة تلاقي الخبرة الطبية العريقة مع التكنولوجيا التشخيصية المتقدمة. انطلقت رحلتنا في قلب المملكة العربية السعودية، بقيادة مجموعة من الاستشاريين السعوديين الذين وضعوا نصب أعينهم هدفاً واحداً: الارتقاء بالمعايير المخبرية لتتجاوز حدود الفحص التقليدي إلى تقديم تجربة صحية متكاملة.',
}

const VALUES: { title: string; description: string; icon: string; color: string }[] = [
  {
    title: 'الدقة العلمية',
    description: 'نتائج موثوقة بأحدث التقنيات التشخيصية وأعلى معايير الجودة العالمية',
    icon: 'circle-check-big',
    color: '#2563EB',
  },
  {
    title: 'الثقة والأمان',
    description: 'حماية بياناتك الصحية وخصوصيتك هي أولويتنا القصوى في كل مرحلة',
    icon: 'shield',
    color: '#7C3AED',
  },
  {
    title: 'السرعة',
    description: 'نتائج دقيقة في أقل وقت ممكن — لأن صحتك لا تنتظر',
    icon: 'clock',
    color: '#E11D48',
  },
  {
    title: 'خدمة منزلية',
    description: 'فريقنا المتخصص يأتي إليك — راحتك تبدأ من باب منزلك',
    icon: 'home',
    color: '#0D9488',
  },
]

const page = () => {
  return (
    <div className="w-full">
      <section className="relative w-full overflow-hidden py-16">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        {/* Hero Section */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">مختبرات بريزما الطبية</span>
          </div>
          <h2 className="gradient-text text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            من نحن
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            حيث يلتقي العلم بالثقة
          </p>
        </div>
      </section>

      <section className="relative w-full overflow-hidden max-w-[1800px] mx-auto py-16 border-t border-border">
        <div className="relative h-full flex flex-col items-center justify-center gap-8 px-4 md:px-6 lg:px-8 text-center">
          <p className="md:text-lg">
            تعد مختبرات بريزما (Prisma Laboratories) ثمرة تلاقي الخبرة الطبية العريقة مع التكنولوجيا
            التشخيصية المتقدمة. انطلقت رحلتنا في قلب المملكة العربية السعودية، بقيادة مجموعة من
            الاستشاريين السعوديين الذين وضعوا نصب أعينهم هدفاً واحداً: الارتقاء بالمعايير المخبرية
            لتتجاوز حدود الفحص التقليدي إلى تقديم تجربة صحية متكاملة.
          </p>
          <div className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full" />
          <p className="md:text-lg">
            نستلهم اسمنا من "المنشور" (Prism) الذي يحلل الضوء ليكشف عن أطيافه الكامنة؛ فنحن نؤمن بأن
            كل عينة تحمل في طياتها مفاتيح الصحة والعافية، ودورنا هو فك رموزها بدقة علمية لا تساوم.
          </p>
          <div className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full" />
          <p className="md:text-lg">
            في بريزما، نحن لا ندير مختبراً فحسب، بل نبني جسراً من الثقة بين العلم والإنسان، ملتزمين
            بأعلى معايير الجودة العالمية ومساهمين بفاعلية في تحقيق مستهدفات رؤية المملكة 2030 للتحول
            الصحي.
          </p>
        </div>
      </section>

      <section className="relative w-full overflow-hidden border-t border-border py-16">
        {/* Hero Section */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">مختبرات بريزما الطبية</span>
          </div>
          <h1 className="gradient-text-secondary text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            قيمنا الأساسية
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 max-w-[1800px] mx-auto gap-4">
            {VALUES.map((v) => {
              const iconName = (v.icon || 'help-circle') as keyof typeof dynamicIconImports
              return (
                <div
                  key={v.title}
                  className="group relative rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-between border border-gray-100"
                  style={{
                    background: `linear-gradient(180deg, ${v.color}08 0%, transparent 60%)`,
                  }}
                >
                  {/* Accent Glow Layer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                      background: `radial-gradient(circle at top right, ${v.color}22, transparent 60%)`,
                    }}
                  />

                  {/* Top Section */}
                  <div className="relative flex items-center justify-between gap-4 mb-6">
                    <h3 className="text-lg md:text-xl font-bold leading-tight flex-1">{v.title}</h3>

                    {/* Icon */}
                    <div
                      className="rounded-xl p-2 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${v.color}18`,
                        color: v.color,
                      }}
                    >
                      <Icon name={iconName} size={24} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="relative leading-relaxed text-sm text-gray-600 mb-auto flex-grow">
                    {v.description}
                  </p>

                  {/* Hover Border Accent */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                      boxShadow: `0 0 0 1px ${v.color}40 inset`,
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden border-t border-border py-16">
        <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            جاهز تبدأ رحلتك الصحية؟
          </h3>

          <p className="relative leading-relaxed text-sm text-gray-600 flex-grow mb-4">
            اكتشف باقاتنا واحجز موعدك اليوم
          </p>

          <Link href="/packages" className="z-10">
            <Button>اكتشف الباقات</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default page
