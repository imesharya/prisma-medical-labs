import { Button } from '@/components/ui/button'
import { Check, Phone } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { BsWhatsapp } from 'react-icons/bs'
import { Media, Package, Test, TestCategory } from '@/payload-types'
import { getPayload } from 'payload'
import config from '@/payload.config'
import SaudiPrice from '@/components/shared/SaudiPrice'

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
  const buildWhatsAppLink = (packageName: string) => {
    const whatsappMessage = `السلام عليكم ورحمة الله وبركاته

أريد حجز ${packageName}

أرجو التكرم بالتواصل معي للتأكيد النهائي.`

    const encodedMessage = encodeURIComponent(whatsappMessage)

    return `https://wa.me/+966920031642?text=${encodedMessage}`
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => {
        // Group tests by category
        const groupedTests = pkg.tests?.reduce(
          (acc, test) => {
            const category = ((test as Test).testCategory as TestCategory)?.name || 'أخرى'
            if (!acc[category]) {
              acc[category] = []
            }
            acc[category].push(test as Test)
            return acc
          },
          {} as Record<string, Test[]>,
        )

        const categoryEntries = Object.entries(groupedTests || {})

        return (
          <div
            key={pkg.id}
            className="group h-full bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Thumbnail */}
            {pkg.thumbnail && (
              <div className="relative w-full aspect-square overflow-hidden bg-muted">
                <Image
                  src={(pkg.thumbnail as Media).url ?? '/'}
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
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-foreground line-clamp-2">{pkg.name}</h3>
                <Button className="bg-primary/20 text-primary" size={'sm'} variant={'outline'}>
                  {pkg.badge}
                </Button>
              </div>

              {/* Description */}
              {pkg.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">{pkg.description}</p>
              )}

              <div className="flex items-center justify-between gap-2">
                {/* Price Section */}
                <div className="flex flex-col justify-center">
                  {pkg.discountedPrice ? (
                    <>
                      <span className="text-sm text-muted-foreground line-through">
                        {pkg.price.toFixed(2)}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        <SaudiPrice amount={pkg.discountedPrice.toFixed(2)} />
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-primary">
                      <SaudiPrice amount={pkg.price.toFixed(2)} />
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="rounded-md p-1 bg-primary/10">
                    <Check className="text-primary" size={24} />
                  </div>
                  {pkg.tests && pkg.tests.length > 0 ? (
                    <div className="flex flex-col gap-0">
                      <p className="font-bold text-lg">{pkg.tests.length}</p>
                      <p className="text-sm">تحليل</p>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Existing tests dialog (unchanged) */}
              {pkg.tests && pkg.tests.length > 0 ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant={'outline'} className="w-full mt-auto gap-2 rounded-lg">
                      عرض التحاليل ({pkg.tests.length})
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden">
                    {/* ... (your existing tests dialog content - unchanged) ... */}
                    <div className="p-6 pb-4 border-b border-border">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 text-right">
                          <DialogTitle className="text-xl font-bold text-foreground">
                            {pkg.name}
                          </DialogTitle>
                          {pkg.badge && (
                            <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-[#00B5AD] text-white">
                              {pkg.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-start gap-3 mt-4">
                        <div className="px-4 py-2 border border-border rounded-full flex justify-center gap-2">
                          {pkg.discountedPrice ? (
                            <>
                              <span className="text-sm text-muted-foreground line-through">
                                {pkg.price.toFixed(2)}
                              </span>
                              <span className="text-xl font-bold text-primary">
                                <SaudiPrice amount={pkg.discountedPrice.toFixed(2)} />
                              </span>
                            </>
                          ) : (
                            <span className="text-xl font-bold text-foreground">
                              <SaudiPrice amount={pkg.price.toFixed(2)} />
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-full">
                          <span className="text-xl font-bold text-foreground">
                            {pkg.tests.length}
                          </span>
                          <span className="text-sm text-muted-foreground">تحليل</span>
                        </div>
                      </div>

                      {pkg.description && (
                        <DialogDescription className="text-sm text-muted-foreground mt-3 text-right">
                          {pkg.description}
                        </DialogDescription>
                      )}
                    </div>

                    <div className="flex-1 overflow-y-scroll">
                      <div className="p-6 space-y-6">
                        {categoryEntries.map(([category, categoryTests], categoryIndex) => (
                          <div key={category}>
                            <div className="flex items-center justify-start gap-3 mb-4">
                              <span className="size-7 rounded-full bg-[#00B5AD] text-white text-sm font-medium flex items-center justify-center">
                                {categoryIndex + 1}
                              </span>
                              <span className="font-bold text-foreground">{category}</span>
                            </div>

                            <div
                              className={`grid gap-4 ${categoryTests.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}
                            >
                              {categoryTests.map((test) => (
                                <div
                                  key={test.id}
                                  className="border border-border rounded-xl p-4 bg-background"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="size-6 rounded-full bg-[#00B5AD] flex items-center justify-center shrink-0 mt-0.5">
                                      <Check className="size-4 text-white" strokeWidth={3} />
                                    </div>
                                    <div className="flex-1 text-right">
                                      <h3 className="font-bold text-foreground">{test.name}</h3>
                                      {test.badge && (
                                        <span className="px-3 py-1 text-xs font-medium rounded-full border border-[#00B5AD] text-[#00B5AD] mt-2 inline-block">
                                          {test.badge}
                                        </span>
                                      )}
                                      {test.description && (
                                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                                          {test.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 pt-4 border-t border-border">
                      <div className="flex gap-4">
                        <a href="tel:+966920031642" className="flex-1">
                          <Button
                            variant="outline"
                            className="w-full h-12 rounded-full border-[#00B5AD] text-[#00B5AD] hover:bg-[#00B5AD]/10 gap-2 text-base font-medium"
                          >
                            <Phone className="size-5" />
                            اتصال مباشر
                          </Button>
                        </a>
                        <a
                          href="https://wa.me/+966920031642"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button className="w-full h-12 rounded-full bg-[#00B5AD] hover:bg-[#00B5AD]/90 text-white gap-2 text-base font-medium">
                            <BsWhatsapp className="size-5" />
                            احجز عبر واتساب
                          </Button>
                        </a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : null}

              {/* CTA: "اختر الباقة" now triggers the abstracted client dialog */}
              <a href={buildWhatsAppLink(pkg.name)} target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center w-full mt-auto gap-2 rounded-lg">
                  احجز مجاناً الآن
                  <BsWhatsapp className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default async function PackageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const {
    docs: [packageType],
  } = await payload.find({
    collection: 'package-types',
    where: { slug: { equals: slug }, isActive: { equals: true } },
    sort: 'displayOrder',
    depth: 1,
    limit: 0,
  })

  const { docs: packages } = await payload.find({
    collection: 'packages',
    where: { packageType: { equals: packageType.id }, isActive: { equals: true } },
    sort: 'displayOrder',
    depth: 2,
    limit: 0,
  })

  if (!packageType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">جاري التحميل...</h1>
        </div>
      </div>
    )
  }

  const buildWhatsAppLink = () => {
    const whatsappMessage = `السلام عليكم ورحمة الله وبركاته

أريد حجز ${packageType.name}

أرجو التكرم بالتواصل معي للتأكيد النهائي.`

    const encodedMessage = encodeURIComponent(whatsappMessage)

    return `https://wa.me/+966920031642?text=${encodedMessage}`
  }

  const hexToRgb = (hex: string) => {
    const cleanHex = hex.replace('#', '')

    const bigint = parseInt(cleanHex, 16)

    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return `${r}, ${g}, ${b}`
  }

  const baseColor = hexToRgb(packageType.color ?? '#1e293a') // e.g. #9b2335
  const backgroundColor = packageType.color ?? '#1e293a'

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center overflow-hidden bg-cover bg-center bg-blend-overlay pt-20 pb-10 px-8">
        {packageType.thumbnail && (
          <Image
            src={(packageType.thumbnail as Media).url ?? '/'}
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: `
      linear-gradient(
        to left,
        rgba(${baseColor},0.85) 0%,
        rgba(${baseColor},0.7) 30%,
        transparent 70%
      ),
      radial-gradient(
        ellipse at 70% 30%,
        rgba(${baseColor},0.15) 0%,
        transparent 55%
      )
    `,
          }}
        ></div>
        <div className="relative max-w-[700px] z-10">
          {packageType.certified && (
            <div className="inline-flex items-center gap-2 border text-xs text-white mb-4 px-4 py-2 rounded-[50px] border-solid border-[rgba(255,255,255,0.2)]">
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M9 12l2 2 4-4" />
                <circle cx={12} cy={12} r={10} />
              </svg>
              معتمد في منصة صحتي
            </div>
          )}
          {packageType.badge && (
            <p className="text-[10px] tracking-[6px] text-[rgba(255,255,255,0.7)] font-medium uppercase mb-3">
              {packageType.badge}
            </p>
          )}
          <h1 className="font-extrabold text-[clamp(32px,5vw,52px)] leading-[1.3] text-white mb-4">
            {packageType.headline ? packageType.headline : packageType.name}
          </h1>
          <p className="text-[15px] text-[rgba(255,255,255,0.8)] font-light leading-[1.9] mb-6">
            {packageType.subheadline ? packageType.subheadline : packageType.description}
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={buildWhatsAppLink()}
              className={`text-white text-[13px] font-bold cursor-pointer tracking-[1px] no-underline inline-flex items-center gap-2 transition-all duration-[0.3s] px-9 py-3.5 rounded-[10px] border-[none] bg-[${backgroundColor}]`}
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                <line x1={16} y1={2} x2={16} y2={6} />
                <line x1={8} y1={2} x2={8} y2={6} />
                <line x1={3} y1={10} x2={21} y2={10} />
              </svg>
              احجز الآن
            </a>
            <a
              href="tel:+966920031642"
              className="text-white text-[13px] font-semibold cursor-pointer tracking-[1px] no-underline inline-flex items-center gap-2 backdrop-blur-md transition-all duration-[0.3s] px-9 py-3.5 rounded-[10px] border-[1.5px] border-solid border-[rgba(255,255,255,0.3)]"
              style={{
                background: 'rgba(255,255,255,0.15)',
              }}
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              اتصل بنا
            </a>
          </div>
        </div>
      </section>

      {/* Packages List */}
      <div className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <PackagesList packageTypeId={packageType.id} packages={packages} />
        </div>
      </div>
    </div>
  )
}
