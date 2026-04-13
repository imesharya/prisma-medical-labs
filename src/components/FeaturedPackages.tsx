'use client'

import { Icon } from '@/lib/icon'
import { Sparkles, ArrowLeft } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

const packageTypesData = {
  badge: 'اكتشف أقسامنا',
  headline: 'الأقسام الرئيسية',
  subheadline: 'اختر القسم المناسب لاحتياجك — كل قسم يضم باقات مصممة بعناية لتغطية جوانب صحتك',
  packageTypes: [
    {
      id: 1,
      name: 'الباقات الشاملة',
      slug: 'comprehensive',
      description: 'فحوصات متكاملة تغطي جميع الجوانب الصحية الأساسية',
      packageCount: '8 باقات',
      badgeColor: 'blue',
      icon: 'activity',
      displayOrder: 1,
      isActive: true,
    },
    {
      id: 2,
      name: 'الباقات المختصة',
      slug: 'specialized',
      description: 'تحاليل مركّزة لحالات صحية محددة — هرمونات، حساسية، سكري',
      packageCount: '30 باقة',
      badgeColor: 'violet',
      icon: 'microscope',
      displayOrder: 2,
      isActive: true,
    },
    {
      id: 3,
      name: 'الصحة الجنسية',
      slug: 'sexual-health',
      description: 'فحوصات سرية وآمنة للأمراض المنقولة — خصوصية تامة',
      packageCount: '3 باقات',
      badgeColor: 'pink',
      icon: 'heart-pulse',
      displayOrder: 3,
      isActive: true,
    },
    {
      id: 4,
      name: 'باقة الزواج',
      slug: 'marriage',
      description: 'فحوصات ما قبل الزواج معتمدة في صحتي — زيارة منزلية مجانية',
      packageCount: 'باقتين',
      badgeColor: 'teal',
      icon: 'heart-handshake',
      displayOrder: 4,
      isActive: true,
    },
    {
      id: 5,
      name: 'التحاليل الجينية',
      slug: 'genetic',
      description: 'اطمئني على صحة جنينك من الأسبوع العاشر بفحص دم بسيط — آمن 100% ودقة تتجاوز 99%',
      packageCount: 'باقتين',
      badgeColor: 'teal',
      icon: 'dna',
      displayOrder: 5,
      isActive: true,
    },
    // {
    //   id: 6,
    //   name: 'التحاليل الفردية',
    //   slug: 'individual',
    //   description:
    //     'تصفح جميع التحاليل الطبية الفردية المتاحة في مختبرات بريزما — نتائج دقيقة وسريعة بأسعار تنافسية',
    //   packageCount: '85 تحليل',
    //   badgeColor: 'teal',
    //   icon: 'scan-search',
    //   displayOrder: 6,
    //   isActive: true,
    // },
    {
      id: 6,
      name: 'العروض',
      slug: 'offers',
      description: 'أسعار حصرية لفترة محدودة — اغتنم الفرصة',
      packageCount: '5 باقات',
      badgeColor: 'amber',
      icon: 'badge-percent',
      displayOrder: 6,
      isActive: true,
    },
  ],
}

const colorMap: Record<string, string> = {
  blue: '#2563EB',
  violet: '#7C3AED',
  pink: '#E11D48',
  teal: '#0D9488',
  amber: '#F59E0B',
}

interface PackageTypeCardProps {
  package: PackageType & { packageCount: string }
}

const PackageTypeCard = ({ package: pkg }: PackageTypeCardProps) => {
  const accentColor = colorMap[pkg.badgeColor || 'primary'] || colorMap.primary

  const iconName = (pkg.icon || 'help-circle') as keyof typeof dynamicIconImports

  return (
    <div className="group h-full">
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
          <span className="text-sm font-semibold" style={{ color: accentColor }}>
            {pkg.packageCount}
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
    </div>
  )
}

const PackageTypes = () => {
  const { badge, headline, subheadline, packageTypes } = packageTypesData

  const activePackages = packageTypes
    .filter((pkg) => pkg.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder)

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{badge}</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance max-w-3xl">
            {headline}
          </h2>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* Package Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          {activePackages.map((packageType) => (
            <PackageTypeCard key={packageType.id} package={packageType} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackageTypes
