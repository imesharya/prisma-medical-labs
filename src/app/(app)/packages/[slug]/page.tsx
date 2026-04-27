import Image from 'next/image'
import { Media } from '@/payload-types'
import { getPayload } from 'payload'
import config from '@/payload.config'
import PackagesList from '@/components/PackageList'
import CustomBadgeIcon from '@/collections/CustomBadgeIcon'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const {
    docs: [packageType],
  } = await payload.find({
    collection: 'package-types',
    where: { slug: { equals: slug }, isActive: { equals: true } },
    sort: 'displayOrder',
    depth: 1,
    limit: 1,
  })

  if (!packageType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">الصفحة غير موجودة</h1>
          <p className="text-muted-foreground">نوع الباقة المطلوب غير متوفر</p>
        </div>
      </div>
    )
  }

  const { docs: packages } = await payload.find({
    collection: 'packages',
    where: { packageType: { equals: packageType.id }, isActive: { equals: true } },
    sort: 'displayOrder',
    depth: 2,
    limit: 0,
  })

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

  const baseColor = hexToRgb(packageType.color ?? '#1e293a')
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
        {/* Mobile: always solid opaque background */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ backgroundColor: `rgba(${baseColor},0.85)` }}
        />

        {/* Desktop: gradient when image exists, solid fallback when no image */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: packageType.thumbnail
              ? `linear-gradient(
            to left,
            rgba(${baseColor},0.85) 0%,
            rgba(${baseColor},0.7) 30%,
            transparent 70%
          ),
          radial-gradient(
            ellipse at 70% 30%,
            rgba(${baseColor},0.15) 0%,
            transparent 55%
          )`
              : `rgba(${baseColor},0.85)`,
          }}
        />
        <div className="relative max-w-[700px] z-10">
          {/* Custom Badges */}
          {packageType.badges && packageType.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {packageType.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 border text-xs text-white px-4 py-2 rounded-[50px] border-solid border-[rgba(255,255,255,0.2)]"
                >
                  <CustomBadgeIcon html={badge.customIcon} />
                  {badge.text}
                </div>
              ))}
            </div>
          )}

          {packageType.badge && (
            <p className="text-[10px] tracking-[6px] text-[rgba(255,255,255,0.7)] font-medium uppercase mb-3">
              {packageType.badge}
            </p>
          )}
          <h1 className="font-extrabold text-[clamp(32px,5vw,52px)] leading-[1.3] text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {packageType.headline ? packageType.headline : packageType.name}
          </h1>
          <p className="text-[15px] text-[rgba(255,255,255,0.8)] font-light leading-[1.9] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {packageType.subheadline ? packageType.subheadline : packageType.description}
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={buildWhatsAppLink()}
              className="text-white text-[13px] font-bold cursor-pointer tracking-[1px] no-underline inline-flex items-center gap-2 transition-all duration-[0.3s] px-9 py-3.5 rounded-[10px] border-[none]"
              style={{ backgroundColor: backgroundColor }}
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
              style={{ background: 'rgba(255,255,255,0.15)' }}
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
        <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
          <PackagesList
            packages={packages}
            enableFiltering={packageType.enableFiltering ?? false}
          />
        </div>
      </div>
    </div>
  )
}
