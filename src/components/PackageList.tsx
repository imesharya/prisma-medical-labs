'use client'

import { useState, useMemo } from 'react'
import { Package, PackageCategory } from '@/payload-types'
import { Skeleton } from '@/components/ui/skeleton'
import PackageCard from '@/components/PackageCard'
import { Search } from 'lucide-react'
import { Button } from './ui/button'

interface PackagesListProps {
  packages: Package[]
  enableFiltering?: boolean
  isLoading?: boolean
}

export default function PackagesList({
  packages,
  enableFiltering = false,
  isLoading = false,
}: PackagesListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = useMemo(() => {
    const cats = new Map<string, PackageCategory>()
    packages.forEach((pkg) => {
      if (pkg.packageCategory && typeof pkg.packageCategory === 'object') {
        cats.set(pkg.packageCategory.id, pkg.packageCategory as PackageCategory)
      }
    })
    return Array.from(cats.values())
  }, [packages])

  const filteredPackages = useMemo(() => {
    if (!enableFiltering) return packages

    return packages.filter((pkg) => {
      const matchesSearch =
        !searchQuery ||
        pkg.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description?.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === 'all' ||
        (typeof pkg.packageCategory === 'object' && pkg.packageCategory?.id === selectedCategory) ||
        (typeof pkg.packageCategory === 'string' && pkg.packageCategory === selectedCategory)

      return matchesSearch && matchesCategory
    })
  }, [packages, searchQuery, selectedCategory, enableFiltering])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="w-full h-48 rounded-2xl" />
            <Skeleton className="w-3/4 h-6" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-1/2 h-8" />
          </div>
        ))}
      </div>
    )
  }

  if (packages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-xl font-semibold text-foreground mb-2">لا توجد باقات متاحة</h3>
        <p className="text-muted-foreground">يرجى المحاولة لاحقاً أو اختيار فئة أخرى</p>
      </div>
    )
  }

  return (
    <div className="space-y-8 md:space-y-16 py-8 md:py-16">
      {enableFiltering && (
        <div className="flex flex-col justify-center items-center bg-card/50">
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant={selectedCategory === 'all' ? 'secondary' : 'outline'}
                type="button"
                onClick={() => setSelectedCategory('all')}
              >
                الكل
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  variant={selectedCategory === cat.id ? 'secondary' : 'outline'}
                >
                  {cat.name}
                </Button>
              ))}

              <div className="relative max-w-xl w-full">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="ابحث في الباقات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full max-w-3xl mx-auto px-4 py-3 pr-10 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {filteredPackages.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">لا توجد نتائج</h3>
          <p className="text-muted-foreground">جرب البحث بكلمات مختلفة أو اختر فئة أخرى</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      )}
    </div>
  )
}
