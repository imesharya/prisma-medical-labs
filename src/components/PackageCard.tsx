import { Media, Package, Test, TestCategory } from '@/payload-types'
import Image from 'next/image'
import { Button } from './ui/button'
import SaudiPrice from './shared/SaudiPrice'
import { Check, ChevronLeft, Phone } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { BsWhatsapp } from 'react-icons/bs'

const PackageCard = ({ pkg }: { pkg: Package }) => {
  const buildWhatsAppLink = (packageName: string) => {
    const whatsappMessage = `السلام عليكم ورحمة الله وبركاته

أريد حجز ${packageName}

أرجو التكرم بالتواصل معي للتأكيد النهائي.`

    const encodedMessage = encodeURIComponent(whatsappMessage)

    return `https://wa.me/+966920031642?text=${encodedMessage}`
  }

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

  const accentColor = pkg.color || undefined
  const hasCustomColor = !!accentColor

  // Helper to generate hover style with brightness for custom colors
  const hoverStyle = (color: string) => ({
    filter: 'brightness(1.1)',
    transition: 'filter 0.2s',
  })

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
          {hasCustomColor ? (
            <span
              className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-[50px] border border-solid text-white"
              style={{
                backgroundColor: `${accentColor}20`,
                borderColor: `${accentColor}40`,
                color: accentColor,
              }}
            >
              {pkg.badge}
            </span>
          ) : (
            <Button className="bg-primary/20 text-primary" size="sm" variant="outline">
              {pkg.badge}
            </Button>
          )}
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
                <span className="text-sm text-muted-foreground">
                  <SaudiPrice className="line-through" amount={pkg.price.toFixed(2)} />
                </span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: accentColor || 'hsl(var(--primary))' }}
                >
                  <SaudiPrice amount={pkg.discountedPrice.toFixed(2)} />
                </span>
              </>
            ) : (
              <span
                className="text-2xl font-bold"
                style={{ color: accentColor || 'hsl(var(--primary))' }}
              >
                <SaudiPrice amount={pkg.price.toFixed(2)} />
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div
              className="rounded-md p-1"
              style={{
                backgroundColor: hasCustomColor ? `${accentColor}10` : undefined,
              }}
            >
              <Check style={{ color: accentColor || 'hsl(var(--primary))' }} size={24} />
            </div>
            {pkg.tests && pkg.tests.length > 0 ? (
              <div className="flex flex-col gap-0">
                <p className="font-bold text-lg">{pkg.tests.length}</p>
                <p className="text-sm">تحليل</p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Tests dialog */}
        {pkg.tests && pkg.tests.length > 0 ? (
          <Dialog>
            <DialogTrigger asChild>
              {hasCustomColor ? (
                <button
                  className="w-full mt-auto gap-2 rounded-lg border text-sm font-medium inline-flex items-center justify-center h-12 px-2.5 transition-all duration-200"
                  style={{
                    borderColor: `${accentColor}33`,
                    backgroundColor: `${accentColor}1A`,
                    color: accentColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = accentColor
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.borderColor = accentColor
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${accentColor}1A`
                    e.currentTarget.style.color = accentColor
                    e.currentTarget.style.borderColor = `${accentColor}33`
                  }}
                >
                  عرض التحاليل
                  <ChevronLeft size={16} />
                </button>
              ) : (
                <Button
                  variant="outline"
                  className="w-full mt-auto gap-2 rounded-lg border-primary/20 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  عرض التحاليل
                  <ChevronLeft />
                </Button>
              )}
            </DialogTrigger>

            <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden">
              <div className="p-6 pb-4 border-b border-border">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 text-right">
                    <DialogTitle className="text-xl font-bold text-foreground">
                      {pkg.name}
                    </DialogTitle>
                    {pkg.badge && (
                      <span
                        className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full text-white"
                        style={{ backgroundColor: accentColor || '#00B5AD' }}
                      >
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
                          <SaudiPrice className="line-through" amount={pkg.price.toFixed(2)} />
                        </span>
                        <span
                          className="text-xl font-bold"
                          style={{ color: accentColor || 'hsl(var(--primary))' }}
                        >
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
                    <span className="text-xl font-bold text-foreground">{pkg.tests.length}</span>
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
                        <span
                          className="size-7 rounded-full text-white text-sm font-medium flex items-center justify-center"
                          style={{ backgroundColor: accentColor || '#00B5AD' }}
                        >
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
                              <div
                                className="size-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                style={{ backgroundColor: accentColor || '#00B5AD' }}
                              >
                                <Check className="size-4 text-white" strokeWidth={3} />
                              </div>
                              <div className="flex-1 text-right">
                                <h3 className="font-bold text-foreground">{test.name}</h3>
                                {test.badge && (
                                  <span
                                    className="px-3 py-1 text-xs font-medium rounded-full border mt-2 inline-block"
                                    style={{
                                      borderColor: accentColor || '#00B5AD',
                                      color: accentColor || '#00B5AD',
                                    }}
                                  >
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
                    {hasCustomColor ? (
                      <button
                        className="w-full h-12 rounded-full gap-2 text-base font-medium inline-flex items-center justify-center border transition-all hover:brightness-110"
                        style={{
                          borderColor: accentColor,
                          color: accentColor,
                          backgroundColor: 'transparent',
                        }}
                      >
                        <Phone className="size-5" />
                        اتصال مباشر
                      </button>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full h-12 rounded-full border-[#00B5AD] text-[#00B5AD] hover:bg-[#00B5AD]/10 gap-2 text-base font-medium"
                      >
                        <Phone className="size-5" />
                        اتصال مباشر
                      </Button>
                    )}
                  </a>
                  <a
                    href={buildWhatsAppLink(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    {hasCustomColor ? (
                      <button
                        className="w-full h-12 rounded-full gap-2 text-base font-medium inline-flex items-center justify-center text-white transition-all hover:brightness-110"
                        style={{ backgroundColor: accentColor }}
                      >
                        <BsWhatsapp className="size-5" />
                        احجز عبر واتساب
                      </button>
                    ) : (
                      <Button className="w-full h-12 rounded-full gap-2 text-base font-medium">
                        <BsWhatsapp className="size-5" />
                        احجز عبر واتساب
                      </Button>
                    )}
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ) : null}

        {/* CTA */}
        <a href={buildWhatsAppLink(pkg.name)} target="_blank" rel="noopener noreferrer">
          {hasCustomColor ? (
            <button
              className="flex items-center w-full mt-auto gap-2 rounded-lg text-white h-12 px-2.5 text-sm font-medium justify-center transition-all hover:brightness-110"
              style={{ backgroundColor: accentColor }}
            >
              احجز مجاناً الآن
              <BsWhatsapp className="h-4 w-4" />
            </button>
          ) : (
            <Button className="flex items-center w-full mt-auto gap-2 rounded-lg bg-primary text-primary-foreground">
              احجز مجاناً الآن
              <BsWhatsapp className="h-4 w-4" />
            </Button>
          )}
        </a>
      </div>
    </div>
  )
}

export default PackageCard
