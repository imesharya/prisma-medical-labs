import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { PACKAGE_TYPES, PACKAGES } from '@/app/config/data'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'

interface PackagesListProps {
  packageTypeId: string
  packages: Package[]
  isLoading?: boolean
}

function PackagesList({ packages, isLoading = false }: PackagesListProps) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className="group h-full bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          {/* Thumbnail */}
          {pkg.thumbnailUrl && (
            <div className="relative w-full aspect-square overflow-hidden bg-muted">
              <Image
                src={pkg.thumbnailUrl}
                alt={pkg.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                height={400}
                width={400}
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex flex-col gap-4">
            {/* Title */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground line-clamp-2">{pkg.name}</h3>
              <Button className="bg-primary/20 text-primary" size={'sm'} variant={'outline'}>
                {pkg.badge}
              </Button>
            </div>

            {/* Description */}
            {pkg.description && (
              <p className="text-sm text-muted-foreground line-clamp-2">{pkg.description}</p>
            )}

            {/* Price Section */}
            <div className="flex flex-col justify-center">
              {pkg.discountedPrice ? (
                <>
                  <span className="text-sm text-muted-foreground line-through">
                    {pkg.price.toFixed(2)} ⃁
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {pkg.discountedPrice.toFixed(2)} ⃁
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-foreground">{pkg.price.toFixed(2)} ⃁</span>
              )}
            </div>

            {/* CTA Button */}
            <Button className="w-full mt-auto gap-2 rounded-lg">
              اختر الباقة
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant={'outline'} className="w-full mt-auto gap-2 rounded-lg">
              عرض التحاليل
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default async function PackageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const packageType = PACKAGE_TYPES.find((p) => p.slug === slug)

  const packages = PACKAGES.filter((p) => p.packageTypeId === packageType?.id)

  if (!packageType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">جاري التحميل...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={packageType.thumbnailUrl ?? '/'}
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
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
            {packageType.name}
          </h1>
          {packageType.description && (
            <p className="text-lg md:text-xl max-w-2xl">{packageType.description}</p>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      {/* {categories.length > 0 && (
        <div className="w-full bg-background border-b border-border sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-0 rounded-none h-auto p-0 gap-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-lg border border-border bg-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary px-4 py-2"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      )} */}

      {/* Packages List */}
      <div className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <PackagesList packageTypeId={packageType.id} packages={packages} />
        </div>
      </div>
    </div>
  )
}
