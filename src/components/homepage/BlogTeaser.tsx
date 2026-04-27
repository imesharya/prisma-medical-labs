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
    <section className="px-5 md:px-10 py-16 md:py-24 bg-white">
      {/* Header */}
      <div className="mb-8 md:mb-12 flex flex-col md:flex-row items-start justify-between gap-4">
        <div>
          <div className="text-[10px] tracking-[0.4em] mb-3 text-[#0A84FF]">KNOWLEDGE</div>
          <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.05]">من المدونة الطبية</h2>
        </div>
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
              <CarouselItem
                key={post.id}
                className="ps-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <BlogCard post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export default BlogTeaser
