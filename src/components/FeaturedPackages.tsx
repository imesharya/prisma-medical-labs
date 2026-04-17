import { Icon } from '@/lib/icon'
import { Sparkles, ArrowLeft } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { PackageType } from '@/payload-types'

const colorMap: Record<string, string> = {
  blue: '#2563EB',
  violet: '#7C3AED',
  pink: '#E11D48',
  teal: '#0D9488',
  amber: '#F59E0B',
}

interface PackageTypeCardProps {
  package: PackageType
  packageCount: number
}

const getPackageLabel = (count: number) => {
  if (count === 0) return '0 باقة'

  if (count === 1) return 'باقة واحدة'

  if (count === 2) return 'باقتين'

  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 3 && lastTwoDigits <= 10) {
    return `${count} باقات`
  }

  if (lastTwoDigits >= 11 && lastTwoDigits <= 99) {
    return `${count} باقة`
  }

  return `${count} باقة`
}

const PackageTypeCard = ({ package: pkg, packageCount }: PackageTypeCardProps) => {
  const accentColor = colorMap[pkg.badgeColor || 'primary'] || colorMap.primary

  const iconName = (pkg.icon || 'help-circle') as keyof typeof dynamicIconImports

  return (
    <Link href={`/packages/${pkg.slug}`} className="group h-full">
      <div
        className="relative rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-between border border-gray-100"
        style={{
          background: `linear-gradient(180deg, ${accentColor}08 0%, transparent 60%)`,
        }}
      >
        {/* Accent Glow Layer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            background: `radial-gradient(circle at top right, ${accentColor}22, transparent 60%)`,
          }}
        />

        {/* Top Section */}
        <div className="relative flex items-center justify-between gap-4 mb-6">
          <h3 className="text-lg md:text-xl font-bold leading-tight flex-1">{pkg.name}</h3>

          {/* Icon */}
          <div
            className="rounded-xl p-2 transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: `${accentColor}18`,
              color: accentColor,
            }}
          >
            <Icon name={iconName} size={24} />
          </div>
        </div>

        {/* Description */}
        <p className="relative leading-relaxed text-sm text-gray-600 mb-auto flex-grow">
          {pkg.description}
        </p>

        {/* Bottom Section */}
        <div className="relative flex items-end justify-between gap-4 mt-6 pt-4">
          <span
            className={`text-sm font-semibold ${packageCount == 0 ? 'invisible' : ''}`}
            style={{ color: accentColor }}
          >
            {getPackageLabel(packageCount)}
          </span>

          <ArrowLeft
            className="h-6 w-6 transition-all duration-300 group-hover:translate-x-1"
            style={{ color: accentColor }}
          />
        </div>

        {/* Hover Border Accent */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            boxShadow: `0 0 0 1px ${accentColor}40 inset`,
          }}
        />
      </div>
    </Link>
  )
}

const PackageTypes = async () => {
  const payload = await getPayload({ config })
  const { docs: activePackages } = await payload.find({
    collection: 'package-types',
    where: {
      isActive: { equals: true },
    },
    sort: 'displayOrder',
    limit: 0,
  })
  const { docs: packages } = await payload.find({
    collection: 'packages',
    limit: 0,
    depth: 0,
  })

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">اكتشف أقسامنا</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance max-w-3xl">
            الأقسام الرئيسية
          </h2>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            اختر القسم المناسب لاحتياجك — كل قسم يضم باقات مصممة بعناية لتغطية جوانب صحتك
          </p>
        </div>

        {/* Package Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          {activePackages.map((packageType) => {
            const packageCount = packages.filter((p) => p.packageType === packageType.id)
            return (
              <PackageTypeCard
                key={packageType.id}
                package={packageType}
                packageCount={packageCount.length ?? 0}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PackageTypes
