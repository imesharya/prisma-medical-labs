import TestCard from '@/components/TestCard'
import { TEST_CATEGORIES, TESTS } from '../../../scripts/data'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const page = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-80 md:h-96 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src={'/'} alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-balance">
            التحاليل الفردية
          </h1>

          <p className="text-lg md:text-xl max-w-2xl">
            تصفح جميع التحاليل الطبية الفردية المتاحة في مختبرات بريزما — نتائج دقيقة وسريعة بأسعار
            تنافسية
          </p>
        </div>
      </div>

      <div className="w-full bg-background">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 md:gap-8 px-4 md:px-6 lg:px-8 py-12 md:py-16">
          {TEST_CATEGORIES.sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999)).map(
            (c) => {
              const categoryTests = TESTS.filter(
                (t) => t.testCategoryId === c.id && t.individualSale === true,
              )
              if (categoryTests.length === 0) return

              return (
                <div key={c.id} className="flex flex-col gap-4 bg-muted p-4 rounded-2xl border">
                  <p className="text-2xl font-bold">{c.name}</p>

                  <Separator className="h-[1px]" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {categoryTests.map((t) => (
                      <TestCard key={t.id} test={t} />
                    ))}
                  </div>
                </div>
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}

export default page
