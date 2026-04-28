import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { PackageType } from '@/payload-types'
import FadeIn from '../shared/FadeIn'

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
  const accentColor = pkg.color || '#2563EB'

  return (
    <div
      className="group relative rounded-2xl p-6 md:p-7 overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        background: '#fff',
        border: `1px solid rgba(10,10,18,0.08)`,
        minHeight: 180,
        boxShadow: '0 4px 20px rgba(10,10,18,0.04)',
      }}
    >
      <Link href={`/packages/${pkg.slug}`}>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
          style={{
            background: `radial-gradient(ellipse at 100% 0%, ${accentColor}20 0%, transparent 60%)`,
          }}
        />
        <div className="relative">
          <div className="flex items-start justify-between mb-5 md:mb-6">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: `${accentColor}12`, border: `1px solid ${accentColor}30` }}
            >
              <div
                className="w-5 h-5 rounded-md"
                style={{ background: accentColor, boxShadow: `0 0 12px ${accentColor}55` }}
              />
            </div>
            <div
              className="text-[10px] tracking-widest font-bold px-2.5 py-1 rounded-full"
              style={{
                color: accentColor,
                border: `1px solid ${accentColor}30`,
                background: `${accentColor}08`,
              }}
            >
              {getPackageLabel(packageCount)}
            </div>
          </div>
          <div className="text-[18px] md:text-[20px] font-bold mb-2">{pkg.name}</div>
          <div className="text-[12px] leading-[1.8]" style={{ color: 'rgba(10,10,18,0.55)' }}>
            {pkg.description}
          </div>
          <div
            className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold"
            style={{ color: accentColor }}
          >
            اعرف أكثر
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
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
    where: {
      isActive: { equals: true },
    },
    limit: 0,
    depth: 0,
  })

  return (
    <section className="relative px-5 md:px-10 py-16 md:py-24 bg-white">
      <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <FadeIn direction="left">
          <div className="text-[10px] tracking-[0.4em] mb-3 text-[#0A84FF]">EXPLORE</div>
          <h2 className="text-[36px] md:text-[54px] font-bold leading-[1.05] text-[#0A0A12]">
            الأقسام <span className="text-[#FF4FB8]">الرئيسية</span>
          </h2>
        </FadeIn>
        <FadeIn direction="right">
          <p
            className="max-w-[380px] text-[13px] md:text-[14px] leading-[1.9]"
            style={{ color: 'rgba(10,10,18,0.55)' }}
          >
            اختر القسم المناسب لاحتياجك — كل قسم يضم باقات مصممة بعناية لتغطية جوانب صحتك.
          </p>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {activePackages.map((packageType, index) => {
          const packageCount = packages.filter((p) => p.packageType === packageType.id)
          return (
            <FadeIn delay={index < 4 ? index * 100 : 100} key={packageType.id}>
              <PackageTypeCard package={packageType} packageCount={packageCount.length ?? 0} />
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}

export default PackageTypes
