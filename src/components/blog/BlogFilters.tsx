'use client'

import { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { BlogCategory } from '@/payload-types'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

const BlogFilters = ({ blogCategories }: { blogCategories: BlogCategory[] }) => {
  const [_, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsLoading(false)
  }, [searchParams])

  function handleCategoryParams(selected: string | undefined) {
    if (selected !== searchParams.get('category')) {
      setIsLoading(true)
    }
    const urlParams = new URLSearchParams(window.location.search)

    if (selected) {
      urlParams.set('category', selected)
      urlParams.delete('page')
    } else {
      urlParams.delete('category')
    }

    router.replace(`${pathname}?${urlParams.toString()}`, { scroll: false })
  }
  const selectedCategory = searchParams.get('category')

  return (
    <>
      <Carousel
        opts={{
          align: 'start',
          skipSnaps: true,
        }}
        className="w-full block"
      >
        <CarouselContent className="flex justify-center gap-4 w-full pl-4 select-none items-center h-12">
          <CarouselItem
            className={cn(
              buttonVariants({
                variant: selectedCategory === null ? 'default' : 'outline',
              }),
              'basis-auto',
            )}
            onClick={() => handleCategoryParams(undefined)}
          >
            عرض الكل
          </CarouselItem>

          {blogCategories.map((category) => {
            const isActive = selectedCategory === category.name

            return (
              <CarouselItem
                key={category.id}
                onClick={() => handleCategoryParams(category.name)}
                className={cn(
                  buttonVariants({
                    variant: isActive ? 'default' : 'outline',
                  }),
                  'basis-auto',
                )}
              >
                {category.name}
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default BlogFilters
