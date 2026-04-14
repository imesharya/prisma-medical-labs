'use client'

import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  thumbnail: string
  slug: string
  date: string
  readTime: string
}

interface BlogTeaserProps {
  posts?: BlogPost[]
  onViewAllClick?: () => void
}

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: 'فحص جرثومة المعدة عن طريق التنفس: الدليل الشامل',
    excerpt:
      'تعرّف على فحص جرثومة المعدة بالتنفس (UBT)، كيفية عمله، التحضيرات المطلوبة، ودقة النتائج.',
    category: 'الجهاز الهضمي',
    thumbnail: '/blog/01-h-pylori-breath-test.png',
    slug: 'fahs-jarthoma-almaeda-bil-tanafus',
    date: '٢٠‏/٣‏/٢٠٢٤',
    readTime: '8 دقائق',
  },
  {
    id: 2,
    title: 'الأمراض المنقولة جنسياً: دليلك الشامل للفحص والوقاية',
    excerpt: 'دليل طبي شامل عن الأمراض المنقولة جنسياً، أنواعها، أعراضها، ودليل الفحص والوقاية.',
    category: 'الأمراض المعدية',
    thumbnail: '/blog/02-sti-testing.png',
    slug: 'amradh-munqola-jinsiya-fahs-wiqaya',
    date: '١٩‏/٣‏/٢٠٢٤',
    readTime: '10 دقائق',
  },
  {
    id: 3,
    title: 'نقص فيتامين د في السعودية: الأسباب والأعراض والفحص',
    excerpt: 'تعرّف على أسباب نقص فيتامين د رغم الشمس، الأعراض، وأهمية الفحص والعلاج.',
    category: 'الفيتامينات',
    thumbnail: '/blog/03-vitamin-d.png',
    slug: 'naqs-vitamin-d-fi-alssaudia',
    date: '١٨‏/٣‏/٢٠٢٤',
    readTime: '7 دقائق',
  },
  {
    id: 4,
    title: 'تحليل الغدة الدرقية TSH: متى تحتاجه وكيف تقرأ نتائجه',
    excerpt: 'دليل شامل عن تحليل الغدة الدرقية TSH: الأعراض، النسب الطبيعية، وتأثير الهرمونات.',
    category: 'الغدد الصماء',
    thumbnail: '/blog/04-thyroid-tsh.png',
    slug: 'tahlil-ghada-darqiya-tsh',
    date: '١٧‏/٣‏/٢٠٢٤',
    readTime: '7 دقائق',
  },
  {
    id: 5,
    title: 'السكر التراكمي HbA1c ومقاومة الأنسولين: الفحص الذهبي لصحتك',
    excerpt: 'فحص السكر التراكمي HbA1c هو المعيار الذهبي لمراقبة السكري. تعرّف على النسب الطبيعية.',
    category: 'السكري',
    thumbnail: '/blog/05-hba1c-diabetes.png',
    slug: 'sukr-trakumi-hba1c',
    date: '١٦‏/٣‏/٢٠٢٤',
    readTime: '8 دقائق',
  },
  {
    id: 6,
    title: 'فقر الدم ونقص الحديد: الأعراض والتحاليل المطلوبة',
    excerpt: 'تعرّف على فقر الدم ونقص الحديد: الأعراض، التحاليل المطلوبة، والنسب الطبيعية.',
    category: 'أمراض الدم',
    thumbnail: '/blog/06-anemia-iron.png',
    slug: 'faqr-dam-naqs-hadid',
    date: '١٥‏/٣‏/٢٠٢٤',
    readTime: '7 دقائق',
  },
  {
    id: 7,
    title: 'الفحص الشامل: لماذا يحتاج كل شخص لباقة تحاليل دورية',
    excerpt: 'الفحص الشامل الدوري أساس الوقاية. تعرّف على أهم التحاليل وباقات بريزما.',
    category: 'الفحص الوقائي',
    thumbnail: '/blog/07-comprehensive-checkup.png',
    slug: 'fahs-shamil-dawri',
    date: '١٤‏/٣‏/٢٠٢٤',
    readTime: '7 دقائق',
  },
  {
    id: 8,
    title: 'هرمون الذكورة (التستوستيرون): الأعراض والفحص والحلول',
    excerpt: 'نقص هرمون الذكورة يؤثر على الطاقة والمزاج. تعرّف على أعراض النقص والنسب الطبيعية.',
    category: 'هرمونات الرجل',
    thumbnail: '/blog/08-testosterone.png',
    slug: 'hormon-testosterone-zakura',
    date: '١٣‏/٣‏/٢٠٢٤',
    readTime: '7 دقائق',
  },
  {
    id: 9,
    title: 'تحليل وظائف الكبد: دليلك لفهم النتائج',
    excerpt: 'تعرّف على تحاليل وظائف الكبد: ALT، AST، البيليروبين. كيف تقرأ نتائجك.',
    category: 'وظائف الأعضاء',
    thumbnail: '/blog/09-liver-function.png',
    slug: 'tahlil-wazayif-kabd',
    date: '١٢‏/٣‏/٢٠٢٤',
    readTime: '7 دقائق',
  },
  {
    id: 10,
    title: 'تحاليل ما قبل الزواج: كل ما تحتاج معرفته',
    excerpt: 'تحاليل ما قبل الزواج إلزامية في السعودية. تعرّف على الفحوصات المطلوبة وأهميتها.',
    category: 'فحوصات ما قبل الزواج',
    thumbnail: '/blog/10-premarital-tests.png',
    slug: 'tahalil-ma-qabl-alzawaj',
    date: '١١‏/٣‏/٢٠٢٤',
    readTime: '8 دقائق',
  },
]

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col h-full w-full bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex-1 flex flex-col p-6 gap-4">
        <div className="inline-flex w-fit h-6">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-foreground line-clamp-2 min-h-[3.5rem]">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1 min-h-[4.5rem]">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-4 mt-auto">
          <div className="flex items-center gap-1.5">
            <span className="text-base">📅</span>
            <span>{post.date}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-base">⏱️</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

const BlogTeaser = ({ posts = defaultPosts, onViewAllClick }: BlogTeaserProps) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(true)
  const [isRtl, setIsRtl] = React.useState(false)

  // Detect RTL/LTR from the document direction (respects html dir="rtl" or dir="ltr")
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const dir = document.documentElement.getAttribute('dir') || 'ltr'
      setIsRtl(dir === 'rtl')
    }
  }, [])

  // Hook carousel API and update navigation state
  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    api.on('reInit', onSelect)
    api.on('select', onSelect)

    onSelect()

    return () => {
      api.off('reInit', onSelect)
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">المدونة الطبية</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance max-w-3xl">
            مقالات صحية موثوقة
          </h2>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            معلومات طبية دقيقة من فريق بريزما — لأن صحتك تستحق معرفة أعمق
          </p>
        </div>

        {/* Carousel Section - shadcn Carousel with basis-3 on desktop + full RTL/LTR support */}
        <div className="relative">
          <Carousel
            opts={{
              align: 'start',
              direction: isRtl ? 'rtl' : 'ltr',
              loop: false,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ms-6 p-2">
              {posts.map((post) => (
                <CarouselItem key={post.id} className="ps-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <BlogCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation Buttons + View All */}
          <div className="flex items-center justify-between mt-8 gap-4">
            {/* Prev / Next buttons - order + icons automatically respect RTL/LTR */}
            <div className="flex gap-2">
              <button
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRtl ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
              </button>
              <button
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRtl ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            </div>

            {/* View All CTA */}
            <Link
              href={'/blog'}
              onClick={onViewAllClick}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary hover:text-primary/80 transition-colors duration-300"
            >
              تصفّح جميع المقالات
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogTeaser
