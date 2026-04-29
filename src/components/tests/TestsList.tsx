'use client'

import { useState, useMemo } from 'react'
import { Test, TestCategory } from '@/payload-types'
import { Skeleton } from '@/components/ui/skeleton'
import TestCard from '@/components/tests/TestCard'
import { Search } from 'lucide-react'
import FadeIn from '@/components/shared/FadeIn'
import { Separator } from '@/components/ui/separator'
import { normalizeArabic } from '@/lib/normalizeArabic'

interface TestsListProps {
  tests: Test[]
  testCategories: TestCategory[]
  isLoading?: boolean
}

const getCategoryName = (test: Test, categories: TestCategory[]): string => {
  if (!test.testCategory) return ''
  const catId = typeof test.testCategory === 'object' ? test.testCategory.id : test.testCategory
  return categories.find((c) => c.id === catId)?.name || ''
}

export default function TestsList({ tests, testCategories, isLoading = false }: TestsListProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTests = useMemo(() => {
    const normalizedQuery = normalizeArabic(searchQuery)
    if (!normalizedQuery) return tests

    return tests.filter((test) => {
      const nameMatch = normalizeArabic(test.name).includes(normalizedQuery)
      const descMatch = normalizeArabic(test.description ?? '').includes(normalizedQuery)
      const catMatch = normalizeArabic(getCategoryName(test, testCategories)).includes(
        normalizedQuery,
      )

      return nameMatch || descMatch || catMatch
    })
  }, [tests, searchQuery, testCategories])

  if (isLoading) {
    return (
      <div className="space-y-8 py-8 md:py-16">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4 bg-muted p-4 rounded-2xl border">
            <Skeleton className="w-1/3 h-8" />
            <Skeleton className="w-full h-[1px]" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, j) => (
                <Skeleton key={j} className="w-full h-48 rounded-2xl" />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (tests.length === 0) {
    return (
      <FadeIn delay={200} direction="up" distance={20}>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">لا توجد تحاليل متاحة</h3>
          <p className="text-muted-foreground">يرجى المحاولة لاحقاً</p>
        </div>
      </FadeIn>
    )
  }

  return (
    <div className="space-y-8 md:space-y-16 py-8 md:py-16">
      {/* Search */}
      <FadeIn delay={200} direction="up" distance={20}>
        <div className="flex justify-center">
          <div className="relative max-w-xl w-full">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="ابحث في التحاليل..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
            />
          </div>
        </div>
      </FadeIn>

      {filteredTests.length === 0 ? (
        <FadeIn delay={300} direction="up" distance={20}>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">لا توجد نتائج</h3>
            <p className="text-muted-foreground">جرب البحث بكلمات مختلفة</p>
          </div>
        </FadeIn>
      ) : (
        <FadeIn delay={400} direction="up" distance={20}>
          <div className="space-y-8">
            {testCategories.map((c) => {
              const categoryTests = filteredTests.filter(
                (t) =>
                  t.testCategory &&
                  (typeof t.testCategory === 'object' ? t.testCategory.id : t.testCategory) ===
                    c.id,
              )
              if (categoryTests.length === 0) return null

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
            })}
          </div>
        </FadeIn>
      )}
    </div>
  )
}
