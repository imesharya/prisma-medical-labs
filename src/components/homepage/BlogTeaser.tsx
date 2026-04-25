'use client'

import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { BlogPost } from '@/payload-types'
import BlogCard from '../blog/BlogCard'
import { useEffect, useState } from 'react'

type PopulatedBlogPost = Populated<BlogPost, 1>

const BlogTeaser = ({ posts }: { posts: PopulatedBlogPost[] }) => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  // Hook carousel API and update navigation state
  useEffect(() => {
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

          <h2 className="text-4xl md:text-5xl lg:text-6xl gradient-text font-bold tracking-tight leading-tight text-balance max-w-3xl">
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
              direction: 'rtl',
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
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>

            {/* View All CTA */}
            <Link
              href={'/blog'}
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
