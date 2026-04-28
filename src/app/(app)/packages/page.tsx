import PackageTypes from '@/components/homepage/FeaturedPackages'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الأقسام الرئيسية',
  description: 'اختر القسم المناسب لاحتياجك — كل قسم يضم باقات مصممة بعناية لتغطية جوانب صحتك.',
}

const page = () => {
  return <PackageTypes />
}

export default page
