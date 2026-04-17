type PackageType = {
  id: string
  name: string
  slug: string
  description?: string
  icon?: string
  badgeColor?: 'blue' | 'violet' | 'pink' | 'teal' | 'amber'
  thumbnailUrl?: string
  displayOrder?: number
  isActive?: boolean
}

type PackageCategory = {
  id: string
  name: string
  slug: string
}

type Package = {
  id: string
  packageTypeId: string
  packageCategoryId?: string
  name: string
  slug: string
  description?: string
  price: number
  discountedPrice?: number
  badge?: string
  thumbnailUrl?: string
  displayOrder?: number
  isActive?: boolean
}

type TestCategory = {
  id: string
  name: string
  slug: string
  displayOrder?: number
}

type Test = {
  id: string
  testCategoryId: string
  name: string
  slug: string
  description?: string
  price: number
  badge?: string
  individualSale: boolean
  isActive?: boolean
}

type PackageTest = {
  packageId: string
  testId: string
}

export const PACKAGE_TYPES: PackageType[] = [
  {
    id: 'af6e391f-6bcb-427a-8ec2-da602dc72e2f',
    name: 'الباقات الشاملة',
    slug: 'comprehensive',
    description: 'فحوصات متكاملة تغطي جميع الجوانب الصحية الأساسية',
    badgeColor: 'blue',
    icon: 'activity',
    thumbnailUrl: '/package-types/comprehensive-hero.png',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'الباقات المختصة',
    slug: 'specialized',
    description: 'تحاليل مركّزة لحالات صحية محددة — هرمونات، حساسية، سكري',
    badgeColor: 'violet',
    icon: 'microscope',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: '7c4fbd21-4e4b-48e2-99ca-6cfa89d12f7d',
    name: 'الصحة الجنسية',
    slug: 'sexual-health',
    description: 'فحوصات سرية وآمنة للأمراض المنقولة — خصوصية تامة',
    badgeColor: 'pink',
    icon: 'heart-pulse',
    displayOrder: 3,
    isActive: true,
  },
  {
    id: '36385548-447c-417f-96b3-00e6bf5e1469',
    name: 'باقة الزواج',
    slug: 'marriage',
    description: 'فحوصات ما قبل الزواج معتمدة في صحتي — زيارة منزلية مجانية',
    badgeColor: 'teal',
    icon: 'heart-handshake',
    thumbnailUrl: '/package-types/marriage-banner.png',
    displayOrder: 4,
    isActive: true,
  },
  {
    id: 'a348499e-8de6-4062-aaae-75241f9f5900',
    name: 'التحاليل الجينية',
    slug: 'genetic',
    description: 'اطمئني على صحة جنينك من الأسبوع العاشر بفحص دم بسيط — آمن 100% ودقة تتجاوز 99%',
    badgeColor: 'teal',
    icon: 'dna',
    displayOrder: 5,
    isActive: true,
  },
  {
    id: 'dc534dba-14a0-4143-a189-b2e856c83072',
    name: 'العروض',
    slug: 'offers',
    description: 'أسعار حصرية لفترة محدودة — اغتنم الفرصة',
    badgeColor: 'amber',
    icon: 'badge-percent',
    displayOrder: 6,
    isActive: true,
  },
]

export const PACKAGE_CATEGORIES: PackageCategory[] = [
  // Comprehensive packages categories
  {
    id: '089dce91-7ece-4e01-bda8-9eec77e97c38',
    name: 'استكشافية',
    slug: 'exploratory',
  },
  {
    id: 'c880dcf8-9579-49bf-920c-1cd1eb37e6fd',
    name: 'متقدمة',
    slug: 'advanced',
  },
  {
    id: '7bb55eaf-81eb-470e-ba6a-4ba6e0205e9c',
    name: 'رويال للرجال',
    slug: 'men',
  },
  {
    id: '734714b1-4cd7-4c4b-87d5-4b93fd953b43',
    name: 'رويال للنساء',
    slug: 'women',
  },

  // Specialized packages categories
  {
    id: 'a3e1bc2f-66f2-4492-9c94-2632c26483bd',
    name: 'هرمونات',
    slug: 'hormones',
  },
  {
    id: '4bcfc9fc-28cf-4997-876e-ce4067279646',
    name: 'حساسية',
    slug: 'allergy',
  },
  {
    id: '1754134e-0f8b-4e71-8391-4dca174070dd',
    name: 'دم وسيولة',
    slug: 'blood',
  },
  {
    id: '4e0b0bf2-5e4b-4ff9-a7ad-ede60ce8df19',
    name: 'كبد وكلى',
    slug: 'liver',
  },
  {
    id: '90446213-d3fb-49dd-bb0b-9facb7fa66c4',
    name: 'سكري',
    slug: 'diabetes',
  },
  {
    id: 'c1569d40-4acf-4f00-9ea4-e8395181c20f',
    name: 'هضمي وتغذية',
    slug: 'digestive',
  },
  {
    id: '9b78fc29-9a84-44bc-abd6-5277f5feeaf7',
    name: 'فيتامينات',
    slug: 'vitamins',
  },
]

export const PACKAGES: Package[] = [
  {
    id: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    packageTypeId: 'af6e391f-6bcb-427a-8ec2-da602dc72e2f',
    packageCategoryId: '089dce91-7ece-4e01-bda8-9eec77e97c38',
    name: 'الباقة الاستكشافية',
    slug: 'exploratory',
    description: 'فحص شامل للحالة الصحية العامة — مثالية للبداية',
    price: 600,
    discountedPrice: 299,
    badge: 'الأساسية',
    thumbnailUrl: '/packages/comprehensive.jpg',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    packageTypeId: 'af6e391f-6bcb-427a-8ec2-da602dc72e2f',
    packageCategoryId: '089dce91-7ece-4e01-bda8-9eec77e97c38',
    name: 'الباقة الاستكشافية بلس',
    slug: 'exploratory-plus',
    description: 'كل تحاليل الاستكشافية + فحوصات إضافية متقدمة',
    price: 800,
    discountedPrice: 399,
    badge: 'متميزة',
    thumbnailUrl: '/packages/comprehensive.jpg',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    packageTypeId: 'af6e391f-6bcb-427a-8ec2-da602dc72e2f',
    packageCategoryId: 'c880dcf8-9579-49bf-920c-1cd1eb37e6fd',
    name: 'الباقة المتقدمة',
    slug: 'advanced',
    description: 'فحص معمق مع دلالات الأورام وسيولة الدم',
    price: 1400,
    discountedPrice: 699,
    badge: 'متقدمة',
    thumbnailUrl: '/packages/comprehensive.jpg',
    displayOrder: 3,
    isActive: true,
  },
  {
    id: '02655059-b185-4413-accf-8652df541421',
    packageTypeId: 'af6e391f-6bcb-427a-8ec2-da602dc72e2f',
    packageCategoryId: 'c880dcf8-9579-49bf-920c-1cd1eb37e6fd',
    name: 'الباقة المتقدمة بلس',
    slug: 'advanced-plus',
    description: 'الباقة الأشمل — كل التحاليل مع الأمراض المعدية',
    price: 1800,
    discountedPrice: 899,
    badge: 'الأكثر طلباً',
    thumbnailUrl: '/packages/comprehensive.jpg',
    displayOrder: 4,
    isActive: true,
  },
  {
    id: '36e3678e-320a-49f2-abff-25a19480edca',
    packageTypeId: 'af6e391f-6bcb-427a-8ec2-da602dc72e2f',
    packageCategoryId: '7bb55eaf-81eb-470e-ba6a-4ba6e0205e9c',
    name: 'باقة الرويال للرجال',
    slug: 'royal-men',
    description: 'باقة شاملة للرجال مع فحص البروستات والهرمونات',
    price: 2000,
    discountedPrice: 999,
    badge: 'للرجال',
    thumbnailUrl: '/packages/comprehensive.jpg',
    displayOrder: 5,
    isActive: true,
  },
  {
    id: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    packageTypeId: 'af6e391f-6bcb-427a-8ec2-da602dc72e2f',
    packageCategoryId: '7bb55eaf-81eb-470e-ba6a-4ba6e0205e9c',
    name: 'باقة الرويال للرجال بلس',
    slug: 'royal-men-plus',
    description: 'الباقة الأكثر شمولاً للرجال مع الأمراض المعدية',
    price: 2600,
    discountedPrice: 1299,
    badge: 'للرجال — برميوم',
    thumbnailUrl: '/packages/comprehensive.jpg',
    displayOrder: 6,
    isActive: true,
  },
  {
    id: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    packageTypeId: 'af6e391f-6bcb-427a-8ec2-da602dc72e2f',
    packageCategoryId: '734714b1-4cd7-4c4b-87d5-4b93fd953b43',
    name: 'باقة الرويال للنساء',
    slug: 'royal-women',
    description: 'باقة شاملة للمرأة مع الهرمونات والنساء',
    price: 2000,
    discountedPrice: 999,
    badge: 'للنساء',
    thumbnailUrl: '/packages/comprehensive.jpg',
    displayOrder: 7,
    isActive: true,
  },
  {
    id: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    packageTypeId: 'af6e391f-6bcb-427a-8ec2-da602dc72e2f',
    packageCategoryId: '734714b1-4cd7-4c4b-87d5-4b93fd953b43',
    name: 'باقة الرويال للنساء بلس',
    slug: 'royal-women-plus',
    description: 'الأشمل للمرأة — 85+ تحليل مع دلالات الأورام',
    price: 3800,
    discountedPrice: 1899,
    badge: 'للنساء — برميوم',
    thumbnailUrl: '/packages/comprehensive.jpg',
    displayOrder: 8,
    isActive: true,
  },
  {
    id: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: 'c1569d40-4acf-4f00-9ea4-e8395181c20f',
    name: 'تحليل الروكوتان',
    slug: 'rokutan',
    description:
      'فحوصات متخصصة قبل وخلال استخدام دواء الروكوتان — تشمل وظائف الكبد والكلى والدهون وفحص الحمل',
    price: 300,
    discountedPrice: 149,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-rokutan.webp',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: '4bb2b371-c212-42de-961a-706cf51a9831',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '1754134e-0f8b-4e71-8391-4dca174070dd',
    name: 'باقة سيولة الدم',
    slug: 'coag',
    description: 'تحاليل شاملة لمعرفة حالة سيولة وتخثر الدم — تشمل PT وPTT وINR وصورة الدم الكاملة',
    price: 320,
    discountedPrice: 149,
    badge: 'دم',
    thumbnailUrl: '/packages/spec-coag.webp',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: 'e21a0bb3-2823-4ca9-8406-417f6ed2f8b5',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة صحة العظام',
    slug: 'bones',
    description:
      'كالسيوم وفيتامين D والفوسفور والمغنيسيوم مع إنزيم الفوسفاتيز وتحليل الروماتيزم وصورة الدم',
    price: 350,
    discountedPrice: 199,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-bones.webp',
    displayOrder: 3,
    isActive: true,
  },
  {
    id: 'a716b690-8ce3-4ada-a49c-9d9978ab0ed1',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '4e0b0bf2-5e4b-4ff9-a7ad-ede60ce8df19',
    name: 'باقة صحة الكلى والمسالك',
    slug: 'kidney',
    description: 'تقييم وظائف الكلى — الكرياتينين ومعدل الترشيح واليوريا وحمض البوريك وتحليل البول',
    price: 350,
    discountedPrice: 199,
    badge: 'كبد وكلى',
    thumbnailUrl: '/packages/spec-kidney.webp',
    displayOrder: 4,
    isActive: true,
  },
  {
    id: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '4e0b0bf2-5e4b-4ff9-a7ad-ede60ce8df19',
    name: 'باقة صحة الكبد',
    slug: 'liver',
    description:
      'فحص شامل لإنزيمات الكبد والصفراء والبروتينات الكبدية وسيولة الدم — 14 تحليل معمّق',
    price: 499,
    discountedPrice: 249,
    badge: 'كبد وكلى',
    thumbnailUrl: '/packages/spec-liver.webp',
    displayOrder: 5,
    isActive: true,
  },
  {
    id: '67359463-d741-4f11-ab3d-eb3b72d468ce',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '90446213-d3fb-49dd-bb0b-9facb7fa66c4',
    name: 'باقة متابعة السكري',
    slug: 'diabetes',
    description: 'متابعة دقيقة للسكر التراكمي والصائم والأنسولين ومقاومة الأنسولين مع صورة الدم',
    price: 499,
    discountedPrice: 249,
    badge: 'سكري',
    thumbnailUrl: '/packages/spec-diabetes.webp',
    displayOrder: 6,
    isActive: true,
  },
  {
    id: '6f850be8-8ec1-46fd-82dd-eefef54f9381',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: 'a3e1bc2f-66f2-4492-9c94-2632c26483bd',
    name: 'باقة الغدة الدرقية',
    slug: 'thyroid',
    description: 'تقييم وظيفة الغدة الدرقية — TSH وهرمون T3 الحر وT4 الحر مع صورة الدم الكاملة',
    price: 600,
    discountedPrice: 299,
    badge: 'هرمونات',
    thumbnailUrl: '/packages/spec-thyroid.webp',
    displayOrder: 7,
    isActive: true,
  },
  {
    id: '0354db6d-ddbe-4baa-b8e0-1877644fcae5',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '1754134e-0f8b-4e71-8391-4dca174070dd',
    name: 'باقة فقر الدم',
    slug: 'anemia',
    description:
      'تحاليل متكاملة لتحديد أسباب فقر الدم — الحديد ومخازنه وقدرة الارتباط مع الفيتامينات وصورة الدم',
    price: 500,
    discountedPrice: 299,
    badge: 'دم',
    thumbnailUrl: '/packages/spec-anemia.webp',
    displayOrder: 8,
    isActive: true,
  },
  {
    id: 'c22474e6-131b-4770-bb70-9e12d9879977',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '9b78fc29-9a84-44bc-abd6-5277f5feeaf7',
    name: 'باقة الفيتامينات والمعادن الأساسية',
    slug: 'vitamins-basic',
    description: 'فحص أساسي لأهم 5 فيتامينات ومعادن — فيتامين D وB12 والفوليك أسيد والزنك والنحاس',
    price: 600,
    discountedPrice: 299,
    badge: 'فيتامينات',
    thumbnailUrl: '/',
    displayOrder: 9,
    isActive: true,
  },
  {
    id: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة الأطفال',
    slug: 'children',
    description:
      'فحوصات دورية شاملة لصحة الأطفال — وظائف الكبد والكلى والغدة والحديد والفيتامينات وصورة الدم',
    price: 699,
    discountedPrice: 349,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-children.webp',
    displayOrder: 10,
    isActive: true,
  },
  {
    id: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة متابعة الضغط',
    slug: 'bp',
    description:
      'تحاليل أساسية لمرضى الضغط — القلب والكلى والكبد والدهون والأملاح وصورة الدم الكاملة',
    price: 500,
    discountedPrice: 349,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-bp.webp',
    displayOrder: 11,
    isActive: true,
  },
  {
    id: '4122baa1-1eec-4e75-9fc5-6fda2e0f0108',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة فحص المسابح',
    slug: 'pool',
    description:
      'فحوصات الأمراض المعدية المطلوبة لدخول المسابح — HIV والتهاب الكبد B وC والزهري وتحليل البول',
    price: 699,
    discountedPrice: 349,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-pool.webp',
    displayOrder: 12,
    isActive: true,
  },
  {
    id: '6f257201-e1d3-46fa-b57a-059c21686936',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة الشعر',
    slug: 'hair',
    description:
      'تحاليل تساقط الشعر — الحديد والزنك والمغنيسيوم والنحاس والفيتامينات والغدة الدرقية مع فحص الفطريات',
    price: 799,
    discountedPrice: 399,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-hair.webp',
    displayOrder: 13,
    isActive: true,
  },
  {
    id: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة الشقيقة والصداع',
    slug: 'migraine',
    description:
      'كشف الأسباب المخبرية وراء الصداع المزمن — الالتهابات والكلى والكبد والسكر والغدة والأملاح',
    price: 500,
    discountedPrice: 399,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-migraine.webp',
    displayOrder: 14,
    isActive: true,
  },
  {
    id: '6adc018f-d04d-4c03-824d-1b73f74401b6',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '4bcfc9fc-28cf-4997-876e-ce4067279646',
    name: 'اختبار حساسية الاستنشاق',
    slug: 'allergy-inhalation',
    description: 'يغطي 34 من مسببات الحساسية التنفسية — غبار وعث وأشجار وحيوانات وعفن بتقنية IGE',
    price: 599,
    discountedPrice: 425,
    badge: 'حساسية',
    thumbnailUrl: '/packages/spec-allergy-inhalation.webp',
    displayOrder: 15,
    isActive: true,
  },
  {
    id: '01dc753b-9e91-4cd1-8e89-51f12dfbf897',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '4bcfc9fc-28cf-4997-876e-ce4067279646',
    name: 'اختبار حساسية الطعام',
    slug: 'allergy-food',
    description: 'يغطي 38 من مسببات الحساسية الغذائية — حليب وبيض وقمح ومكسرات وأسماك بتقنية IGE',
    price: 599,
    discountedPrice: 425,
    badge: 'حساسية',
    thumbnailUrl: '/packages/spec-allergy-food.webp',
    displayOrder: 16,
    isActive: true,
  },
  {
    id: '72c0474e-ee3f-429b-826a-b945bc8011d8',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '4bcfc9fc-28cf-4997-876e-ce4067279646',
    name: 'اختبار حساسية الأطفال',
    slug: 'allergy-pediatric',
    description: 'يغطي 28 من مسببات الحساسية التنفسية والغذائية للأطفال بتقنية IGE',
    price: 599,
    discountedPrice: 425,
    badge: 'حساسية',
    thumbnailUrl: '/packages/spec-allergy-pediatric.webp',
    displayOrder: 17,
    isActive: true,
  },
  {
    id: 'fd5b4f63-9f3f-4a8e-b4d1-d349c192fa65',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '4bcfc9fc-28cf-4997-876e-ce4067279646',
    name: 'فحص الحساسية الشامل',
    slug: 'allergy-comprehensive',
    description: 'أشمل فحص — يغطي 55 من مسببات الحساسية التنفسية والغذائية معاً بتقنية IGE',
    price: 599,
    discountedPrice: 425,
    badge: 'حساسية',
    thumbnailUrl: '/packages/spec-allergy-atopy.webp',
    displayOrder: 18,
    isActive: true,
  },
  {
    id: '8e7d1905-288b-41ca-8005-aef33a13fa40',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: 'a3e1bc2f-66f2-4492-9c94-2632c26483bd',
    name: 'باقة تكيس المبايض',
    slug: 'pcos',
    description:
      'تقييم هرمونات الإباضة والأندروجينات — FSH وLH والتستوستيرون والأنسولين والغدة الدرقية',
    price: 999,
    discountedPrice: 449,
    badge: 'هرمونات',
    thumbnailUrl: '/packages/spec-pcos.webp',
    displayOrder: 19,
    isActive: true,
  },
  {
    id: 'c1921bc8-5ccb-4acd-8946-c7a095cf7ad4',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: 'c1569d40-4acf-4f00-9ea4-e8395181c20f',
    name: 'باقة الجهاز الهضمي والقولون',
    slug: 'digestive',
    description:
      'تقييم شامل لصحة القناة الهضمية — تحليل البراز والمزارع وجرثومة المعدة والدم الخفي ودلالات الأورام',
    price: 999,
    discountedPrice: 499,
    badge: 'هضمي',
    thumbnailUrl: '/packages/spec-digestive.webp',
    displayOrder: 20,
    isActive: true,
  },
  {
    id: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '90446213-d3fb-49dd-bb0b-9facb7fa66c4',
    name: 'باقة السمنة وثبات الوزن',
    slug: 'obesity',
    description:
      'تقييم الأسباب الهرمونية لثبات الوزن — الغدة والسكر والأنسولين والدهون والكبد والأملاح',
    price: 1000,
    discountedPrice: 499,
    badge: 'سكري',
    thumbnailUrl: '/packages/spec-obesity.webp',
    displayOrder: 21,
    isActive: true,
  },
  {
    id: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة الكسل والخمول',
    slug: 'fatigue',
    description:
      'اكتشف أسباب التعب المزمن — الغدة الدرقية والسكر والفيتامينات والمعادن الأساسية وصورة الدم',
    price: 1000,
    discountedPrice: 499,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-fatigue.webp',
    displayOrder: 22,
    isActive: true,
  },
  {
    id: 'eb45c2cf-5c5e-4c57-acac-21c1f211d2a8',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: 'a3e1bc2f-66f2-4492-9c94-2632c26483bd',
    name: 'باقة خصوبة الرجل',
    slug: 'male-fertility',
    description:
      'تقييم شامل لهرمونات الخصوبة — التستوستيرون والحويصلات المنوية وتحليل السائل المنوي والمزارع',
    price: 800,
    discountedPrice: 499,
    badge: 'هرمونات',
    thumbnailUrl: '/packages/spec-male-fertility.webp',
    displayOrder: 23,
    isActive: true,
  },
  {
    id: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة فحص ماقبل العمليات',
    slug: 'pre-op',
    description:
      'الفحوصات الإلزامية قبل أي تدخل جراحي — سيولة الدم وفصيلة الدم والسكر والكبد والكلى والأمراض المعدية',
    price: 850,
    discountedPrice: 499,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-pre-op.webp',
    displayOrder: 24,
    isActive: true,
  },
  {
    id: '6b7e46b4-35ed-41c1-8027-922f35b2b98f',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: 'c1569d40-4acf-4f00-9ea4-e8395181c20f',
    name: 'باقة حساسية القمح',
    slug: 'gluten',
    description:
      'فحص الحساسية للغلوتين والقمح — اختبار السيلياك والأجسام المضادة والالتهابات وصورة الدم',
    price: 850,
    discountedPrice: 499,
    badge: 'هضمي',
    thumbnailUrl: '/packages/spec-gluten.webp',
    displayOrder: 25,
    isActive: true,
  },
  {
    id: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة التكميم',
    slug: 'sleeve',
    description:
      'فحوصات ما قبل وبعد عملية التكميم — الكلى والكبد والغدة والدهون والأملاح والفيتامينات الشاملة',
    price: 800,
    discountedPrice: 599,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-sleeve.webp',
    displayOrder: 26,
    isActive: true,
  },
  {
    id: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: 'a3e1bc2f-66f2-4492-9c94-2632c26483bd',
    name: 'باقة خصوبة المرأة',
    slug: 'female-fertility',
    description:
      'تقييم مخزون البويضات — الاستراديول وFSH وLH وهرمون الحليب وجودة البويضات والأنسولين والغدة',
    price: 1199,
    discountedPrice: 599,
    badge: 'هرمونات',
    thumbnailUrl: '/packages/spec-female-fertility.webp',
    displayOrder: 27,
    isActive: true,
  },
  {
    id: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: '9b78fc29-9a84-44bc-abd6-5277f5feeaf7',
    name: 'باقة الفيتامينات والمعادن المتقدمة',
    slug: 'vitamins-advanced',
    description:
      'مسح شامل لـ 14 فيتامين ومعدن — فيتامين D وB12 والفوليك والحديد والزنك والكالسيوم والمغنيسيوم',
    price: 800,
    discountedPrice: 599,
    badge: 'فيتامينات',
    thumbnailUrl: '/packages/spec-vitamins-adv.webp',
    displayOrder: 28,
    isActive: true,
  },
  {
    id: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة النضارة والجمال',
    slug: 'beauty',
    description:
      'فحوصات داخلية لدعم صحة البشرة — الدم والدهون والكبد والأملاح والسكر والفيتامينات والغدة والكلى والشعر',
    price: 1299,
    discountedPrice: 649,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-beauty.webp',
    displayOrder: 29,
    isActive: true,
  },
  {
    id: 'c913ae46-b5ee-405c-958c-d55741acbb10',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    name: 'باقة فحص الزواج',
    slug: 'marriage-test',
    description: 'فحص الزواج المعتمد في منصة صحتي — تحاليل إلزامية شاملة للشخص الواحد. قبل التأمين',
    price: 699,
    badge: 'متخصصة',
    thumbnailUrl: '/packages/spec-marriage.webp',
    displayOrder: 30,
    isActive: true,
  },
  {
    id: '50e96733-acc0-4797-9230-5edbec345780',
    packageTypeId: '5a4c5fff-9b75-44b6-9885-c8202eeb7077',
    packageCategoryId: 'a3e1bc2f-66f2-4492-9c94-2632c26483bd',
    name: 'باقة متابعة الحمل',
    slug: 'pregnancy',
    description:
      'فحوصات صحة الأم والجنين — الغدة والسكر والحديد والعدوى (التوكسوبلازما والروبيلا) والفيتامينات والبول',
    price: 1350,
    discountedPrice: 799,
    badge: 'هرمونات',
    thumbnailUrl: '/packages/spec-pregnancy.webp',
    displayOrder: 31,
    isActive: true,
  },
  {
    id: 'a92f61ee-2808-4b75-8048-5ffaed8f93bb',
    packageTypeId: '7c4fbd21-4e4b-48e2-99ca-6cfa89d12f7d',
    name: 'فحص الالتهابات الجنسية الأساسية',
    slug: 'std-basic',
    description:
      'فحص أساسي يغطي أهم الالتهابات الجنسية الشائعة — تحاليل دم ومسحات أساسية. يشمل زيارة منزلية مجاناً',
    price: 800,
    discountedPrice: 599,
    badge: 'صحة جنسية',
    thumbnailUrl: '/packages/std-basic.webp',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 'c7c9d4b4-ae7e-423e-9d85-4e0f4ef9aa0d',
    packageTypeId: '7c4fbd21-4e4b-48e2-99ca-6cfa89d12f7d',
    name: 'فحص الأمراض المنقولة بتقنية PCR',
    slug: 'std-pcr',
    description:
      'فحص بتقنية PCR المتقدمة — أدق وأسرع في الكشف حتى في المراحل المبكرة. يشمل زيارة منزلية مجاناً',
    price: 900,
    discountedPrice: 599,
    badge: 'صحة جنسية',
    thumbnailUrl: '/packages/std-pcr.webp',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    packageTypeId: '7c4fbd21-4e4b-48e2-99ca-6cfa89d12f7d',
    name: 'باقة الكشف الشامل للأمراض المنقولة',
    slug: 'std-comprehensive',
    description:
      'أشمل باقة — تجمع تحاليل الدم + PCR + مسحات لكل الأمراض المنقولة. يشمل زيارة منزلية مجاناً',
    price: 2000,
    discountedPrice: 999,
    badge: 'صحة جنسية',
    thumbnailUrl: '/packages/std-comprehensive.webp',
    displayOrder: 3,
    isActive: true,
  },
  {
    id: '224d8024-c5ac-43bf-b941-a7666edb7e68',
    packageTypeId: '36385548-447c-417f-96b3-00e6bf5e1469',
    name: 'باقة الزواج الأساسية',
    slug: 'marriage',
    description: 'الفحص الإلزامي المعتمد في منصة صحتي لإتمام إجراءات الزواج',
    price: 499,
    badge: 'إلزامي',
    thumbnailUrl: '/packages/marriage.webp',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 'd98a5d57-758b-43c8-a222-ea64aba834ad',
    packageTypeId: '36385548-447c-417f-96b3-00e6bf5e1469',
    name: 'الفحص الجيني ما قبل الزواج',
    slug: 'marriage-plus',
    description: 'تحليل جيني متقدم يكشف الأمراض الوراثية المحتملة لحماية صحة أجيالكم القادمة',
    price: 2999,
    badge: 'الأشمل',
    thumbnailUrl: '/packages/marriage-plus.webp',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: '3fe6048e-a1c4-4071-a146-ea4e0bff8353',
    packageTypeId: 'a348499e-8de6-4062-aaae-75241f9f5900',
    name: 'فحص NIPT C',
    slug: 'nipt-c',
    description: 'فحص جيني غير جراحي للكشف المبكر عن التثلث الصبغي — آمن للأم والجنين',
    price: 849,
    badge: 'كلاسيك',
    thumbnailUrl: '/packages/nipt-c.webp',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 'cab7cf51-b31d-4055-928f-9d1cc9b2e59d',
    packageTypeId: 'a348499e-8de6-4062-aaae-75241f9f5900',
    name: 'فحص NIPT S',
    slug: 'nipt-s',
    description: 'فحص جيني شامل لجميع الكروموسومات مع الكشف عن متلازمات الحذف الدقيق',
    price: 999,
    badge: 'الأشمل',
    thumbnailUrl: '/packages/nipt-s-plus.webp',
    displayOrder: 2,
    isActive: true,
  },
]

export const TEST_CATEGORIES: TestCategory[] = [
  {
    id: '1289bd23-8dd3-47f4-98b0-55f9c6cd9ace',
    name: 'الحديد',
    slug: 'iron-total',
    displayOrder: 7,
  },
  {
    id: '7d61b3c5-a072-440e-98b8-cca10cf10deb',
    name: 'Vitamin B12',
    slug: 'vitamin-b12',
    displayOrder: 1,
  },
  {
    id: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    name: 'الأمراض المعدية',
    slug: 'infectious-diseases',
    displayOrder: 2,
  },
  {
    id: '3e6859f9-a63b-4696-82f6-f368914e4eb8',
    name: 'الالتهابات والمناعة',
    slug: 'inflammations-and-immunity',
    displayOrder: 3,
  },
  {
    id: 'f85b42a9-6d33-4997-83e0-ba187e4fb4e8',
    name: 'البروستات',
    slug: 'prostate',
    displayOrder: 4,
  },
  {
    id: 'f52b9f4e-648b-427c-8cd1-a95b8e11c39a',
    name: 'البول والبراز',
    slug: 'urine-and-stool',
  },
  {
    id: '9e6ccad9-fa01-4ddc-a854-aa36a33f7d61',
    name: 'الجلدية والشعر',
    slug: 'dermatology-and-hair',
    displayOrder: 5,
  },
  {
    id: 'ed9ebba1-7e25-432c-97f0-c89b0f9b2544',
    name: 'الجهاز الهضمي',
    slug: 'digestive-system',
    displayOrder: 6,
  },
  {
    id: '00fe3227-b0a0-4736-95d8-66629ebce197',
    name: 'الحديد',
    slug: 'iron',
  },
  {
    id: '5ea55e1a-8503-4e61-a935-b02abd599c9d',
    name: 'السكر التراكمي',
    slug: 'hba1c',
    displayOrder: 8,
  },
  {
    id: 'b8db1d38-ad6b-4473-b26f-0df0affb5043',
    name: 'العلامات الحيوية',
    slug: 'vital-signs',
    displayOrder: 9,
  },
  {
    id: '5453b9de-da35-4057-8f3d-027a6fa52e8a',
    name: 'الغدة الدرقية',
    slug: 'thyroid-gland',
    displayOrder: 10,
  },
  {
    id: '4a9d41a6-1c11-4622-b663-8809476b9ac2',
    name: 'الفيتامينات',
    slug: 'vitamins',
    displayOrder: 11,
  },
  {
    id: '711a139b-bdf0-48aa-b520-e91afad6ab01',
    name: 'المعادن',
    slug: 'minerals',
    displayOrder: 12,
  },
  {
    id: '85e50213-d781-4667-8e96-e2c025c25875',
    name: 'الهرمونات',
    slug: 'hormones',
    displayOrder: 13,
  },
  {
    id: '5b622dc4-3189-481e-8434-c4274a37737e',
    name: 'تحاليل البنكرياس',
    slug: 'pancreatic-tests',
  },
  {
    id: 'c98d9ce5-94cc-4a51-83e1-96e81e7d65ec',
    name: 'تحاليل الدم',
    slug: 'blood-tests',
  },
  {
    id: '1b6ac0e7-a1b4-4e5f-b7b9-f8793eb8acb1',
    name: 'تحاليل الدهون',
    slug: 'lipid-tests',
  },
  {
    id: 'b0ba371d-fd23-421a-9cb7-877d1f03ef70',
    name: 'تحاليل السكر',
    slug: 'sugar-tests',
    displayOrder: 14,
  },
  {
    id: '05039b10-cb5f-4b6f-a330-dd58da05d9e5',
    name: 'تحاليل العضلات',
    slug: 'muscle-tests',
  },
  {
    id: 'f83237f8-5e1a-420b-8de8-1fc2f397a044',
    name: 'تحاليل القلب',
    slug: 'heart-tests',
    displayOrder: 15,
  },
  {
    id: 'd803add8-1bfe-4ef9-be69-99b372c84d67',
    name: 'دلالات الأورام',
    slug: 'tumor-markers',
    displayOrder: 16,
  },
  {
    id: 'c8fecf1d-1f6d-4bff-825f-3f9d579fc46e',
    name: 'سيولة الدم',
    slug: 'blood-coagulation',
  },
  {
    id: '10be82ba-eec7-42a6-841a-22e0a1dd8040',
    name: 'فحوصات الحمل',
    slug: 'pregnancy-tests',
    displayOrder: 17,
  },
  {
    id: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    name: 'وظائف الكبد',
    slug: 'liver-functions',
  },
  {
    id: 'fccf73d5-0465-4425-8f55-4f3897ffc3ca',
    name: 'وظائف الكلى',
    slug: 'kidney-functions',
  },
]

export const TESTS: Test[] = [
  {
    id: 'b0bbc1bb-7214-4d49-aa0f-d31e2fde24a1',
    name: 'الحديد',
    badge: 'الحديد',
    testCategoryId: '1289bd23-8dd3-47f4-98b0-55f9c6cd9ace',
    description: '',
    price: 15,
    individualSale: false,
    slug: 'iron',
  },
  {
    id: '65432114-8a99-4252-96fc-374ee63689ec',
    name: 'الفيتامينات',
    badge: 'فيتامين ب12',
    price: 0,
    testCategoryId: '7d61b3c5-a072-440e-98b8-cca10cf10deb',
    description: '',
    individualSale: true,
    slug: 'vitamins',
  },
  {
    id: '3dbb1204-9687-4d9d-82d4-21f9e02bd94f',
    name: 'الاتهابات المعدية جنسيا',
    badge: 'STI PCR',
    price: 389,
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'المسح الجزيئي الشامل والأسرع للكشف عن مسببات الأمراض المنقولة جنسياً.',
    individualSale: false,
    slug: 'sexually-transmitted-infections',
  },
  {
    id: '5a0bb25f-09a0-42bd-a692-c92237f0c558',
    name: 'الزهري (تريبونيما باليدوم)',
    badge: 'Treponema pallidum',
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'فحص كيميائي حيوي متطور للكشف عن بكتيريا الزهري وضمان الأمان الصحي.',
    price: 49,
    individualSale: true,
    slug: 'syphilis-treponema-pallidum',
  },
  {
    id: 'b4df9889-2549-4fa4-912b-4a3cf2d67431',
    name: 'السيلان (النيسيريا جونوريا)',
    badge: 'Neisseria gonorrhoeae',
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'الاختبار المرجعي للكشف عن بكتيريا السيلان لضمان التشخيص السريع والدقيق.',
    price: 49,
    individualSale: false,
    slug: 'gonorrhea-neisseria-gonorrhoeae',
  },
  {
    id: 'b9922a71-92a4-44b0-b2ec-bef83e30028f',
    name: 'الكلاميديا',
    badge: 'Chlamydia trachomatis',
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'اختبار الكشف عن بكتيريا الكلاميديا لضمان الصحة الإنجابية والوقاية من المضاعفات.',
    price: 49,
    individualSale: false,
    slug: 'chlamydia',
  },
  {
    id: 'de4fc80f-b9a4-4daa-b285-083c010f2c67',
    name: 'بكتيريا الدونوفانوز (الهيموفيلس دوكري)',
    badge: 'Haemophilus ducreyi',
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'فحص مخبري متخصص لتشخيص بكتيريا القريح المسببة للقرح الزهرية الكاذبة.',
    price: 49,
    individualSale: false,
    slug: 'donovanosis-bacteria-haemophilus-ducreyi',
  },
  {
    id: 'c1019715-8485-48b4-9931-97ee6e6493b1',
    name: 'تريكوموناس (عدوى الترايكوموناس)',
    badge: 'Trichomonas vaginalis',
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'اختبار الكشف عن طفيل التريكوموناس لضمان علاج فعال للالتهابات التناسلية.',
    price: 49,
    individualSale: false,
    slug: 'trichomonas-infection',
  },
  {
    id: 'ac6a628c-8156-4382-bee7-07c7ccfe9600',
    name: 'فحص فيروس نقص المناعة',
    badge: 'HIV Ag/Ab for type 1 & 2',
    price: 69,
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'تقنية متطورة للكشف المبكر عن فيروس نقص المناعة المكتسب لضمان الأمان التام.',
    individualSale: true,
    slug: 'hiv-test',
  },
  {
    id: '93b631d6-14ed-4c4a-9797-eecf00091e0a',
    name: 'فيروس التهاب الكبد الوبائي باء',
    badge: 'HBS Antigen',
    price: 49,
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'فحص أساسي للكشف عن التهاب الكبد الوبائي باء لضمان سلامة وظائف الكبد.',
    individualSale: true,
    slug: 'hepatitis-b-virus',
  },
  {
    id: 'e00bfee8-e606-4b26-9adc-ff87bfe16dd0',
    name: 'فيروس التهاب الكبد الوبائي سي',
    badge: 'Hepatitis C Virus Antibodies',
    price: 49,
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'اختبار دقيق للكشف عن الأجسام المضادة لفيروس الكبد سي لضمان التشخيص السليم.',
    individualSale: true,
    slug: 'hepatitis-c-virus',
  },
  {
    id: '331b952f-8b01-41e6-9a23-243b534dac16',
    name: 'فيروس الهربس البسيط النوع الأول (HSV-1)',
    badge: 'Herpes Simplex Virus Type 1',
    price: 49,
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'فحص متخصص للكشف عن الأجسام المضادة لفيروس الهربس البسيط النوع الأول.',
    individualSale: false,
    slug: 'herpes-simplex-virus-type-1-hsv-1',
  },
  {
    id: '4bb6b2ac-2459-4863-8ccb-f6850d2af7f3',
    name: 'فيروس الهربس البسيط النوع الثاني (HSV-2)',
    badge: 'Herpes Simplex Virus Type 2',
    price: 49,
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'فحص دقيق للكشف عن الإصابة بفيروس الهربس التناسلي النوع الثاني.',
    individualSale: false,
    slug: 'herpes-simplex-virus-type-2-hsv-2',
  },
  {
    id: 'ea1e7134-b8a4-4971-8b16-aeb327f1209b',
    name: 'مايكوبلازما جينيتاليوم',
    badge: 'Mycoplasma genitalium',
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description:
      'تحليل دقيق للكشف عن بكتيريا الميكوبلازما المرتبطة بالتهابات الجهاز البولي والتناسلي.',
    price: 49,
    individualSale: false,
    slug: 'mycoplasma-genitalium',
  },
  {
    id: 'fc58bbef-93c9-4e0b-87b1-500b5098ea2e',
    name: 'مايكوبلازما هومينيس',
    badge: 'Mycoplasma hominis',
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description: 'فحص متخصص لتشخيص عدوى الميكوبلازما ودعم صحة الجهاز الإنجابي.',
    price: 49,
    individualSale: false,
    slug: 'mycoplasma-hominis',
  },
  {
    id: 'e860f932-11f4-4af0-957a-7f71f9d66751',
    name: 'يوريابلازما',
    badge: 'Ureaplasma urealyticum',
    testCategoryId: '43e38dfc-b2dd-4843-9e72-dedd8c9ae267',
    description:
      'تحليل دقيق للكشف عن بكتيريا اليوريا بلازما لتقييم صحة المسالك البولية والتناسلية.',
    price: 49,
    individualSale: false,
    slug: 'ureaplasma',
  },
  {
    id: '04b632b0-f71e-4c38-a2ed-0565d28be25e',
    name: 'اختبار الأجسام المضادة',
    badge: 'Total IgE',
    price: 69,
    testCategoryId: '3e6859f9-a63b-4696-82f6-f368914e4eb8',
    description: 'تحليل شامل لتقييم مستويات الحساسية العامة واستجابة الجهاز المناعي للمثيرات.',
    individualSale: true,
    slug: 'antibody-test',
  },
  {
    id: '10a13810-fc76-43bc-8f5b-9c5bcaba033f',
    name: 'تحليل الروماتيزم',
    badge: 'RF',
    price: 49,
    testCategoryId: '3e6859f9-a63b-4696-82f6-f368914e4eb8',
    description: 'اختبار تخصصي للكشف عن الأجسام المضادة المرتبطة بالروماتويد وأمراض المفاصل.',
    individualSale: true,
    slug: 'rheumatoid-factor-test',
  },
  {
    id: 'b37cb3aa-715d-490c-b5fc-72780c9b774d',
    name: 'مؤشر للالتهابات في الجسم',
    badge: 'CRP',
    testCategoryId: '3e6859f9-a63b-4696-82f6-f368914e4eb8',
    description: 'فحص بروتيني عالي الحساسية للكشف المبكر عن الالتهابات الحادة ومتابعتها.',
    price: 29,
    individualSale: false,
    slug: 'inflammation-index',
  },
  {
    id: '3099ac6b-2fc0-4a1d-8655-3e299b2c8a52',
    name: 'معدل الترسيب',
    badge: 'ESR',
    testCategoryId: '3e6859f9-a63b-4696-82f6-f368914e4eb8',
    description: 'مؤشر تقليدي هام للكشف عن وجود نشاط التهابي غير محدد في الجسم.',
    price: 15,
    individualSale: false,
    slug: 'erythrocyte-sedimentation-rate',
  },
  {
    id: '0756366f-9c0e-481c-8c9b-9c8678d59e25',
    name: 'نسبة البروستات الحر إلى الكلي',
    badge: 'PSA Ratio (Free/Total)',
    price: 59,
    testCategoryId: 'f85b42a9-6d33-4997-83e0-ba187e4fb4e8',
    description: 'نسبة دقيقة تزيد من دقة تشخيص اضطرابات البروستات',
    individualSale: false,
    slug: 'free-to-total-prostate-ratio',
  },
  {
    id: 'cfc569b2-7eef-4d4d-a71b-e5de40923b9d',
    name: 'هرمون البروستات الحر',
    badge: 'PSA (Free)',
    price: 59,
    testCategoryId: 'f85b42a9-6d33-4997-83e0-ba187e4fb4e8',
    description: 'قياس مستوى البروستاتا الحر للمساعدة في التمييز بين حالات التضخم الحميد والأورام.',
    individualSale: true,
    slug: 'free-prostate-hormone',
  },
  {
    id: '8605472e-b07e-499e-ad96-29546111c077',
    name: 'هرمون البروستات الكلي',
    badge: 'PSA (Total)',
    price: 59,
    testCategoryId: 'f85b42a9-6d33-4997-83e0-ba187e4fb4e8',
    description: 'الفحص المرجعي للاطمئنان على صحة البروستاتا والكشف المبكر عن تضخمها.',
    individualSale: true,
    slug: 'total-prostate-hormone',
  },
  {
    id: 'a6194419-7dff-413b-8c10-9e1c2e77cc2e',
    name: 'تحليل براز',
    badge: 'Stool Examination',
    price: 20,
    testCategoryId: 'f52b9f4e-648b-427c-8cd1-a95b8e11c39a',
    description: 'تحليل البراز للكشف عن الطفيليات والديدان واضطرابات الجهاز الهضمي.',
    individualSale: false,
    slug: 'stool-analysis',
  },
  {
    id: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
    name: 'تحليل بول',
    badge: 'Urine Examination',
    price: 20,
    testCategoryId: 'f52b9f4e-648b-427c-8cd1-a95b8e11c39a',
    description: 'تحليل البول الشامل للكشف عن التهابات المسالك البولية ووظائف الكلى.',
    individualSale: false,
    slug: 'urine-analysis',
  },
  {
    id: 'febe1cd3-c974-4f5a-96ea-a69d6da28b68',
    name: 'مزرعة براز',
    badge: 'Stool Culture',
    price: 40,
    testCategoryId: 'f52b9f4e-648b-427c-8cd1-a95b8e11c39a',
    description: 'زراعة البراز للكشف عن البكتيريا المسببة للتسمم الغذائي والالتهابات المعوية.',
    individualSale: false,
    slug: 'stool-culture',
  },
  {
    id: '2a50a58b-7a90-4936-aab0-11728105ef4e',
    name: 'مزرعة بول',
    badge: 'Urine Culture',
    price: 39,
    testCategoryId: 'f52b9f4e-648b-427c-8cd1-a95b8e11c39a',
    description: 'زراعة البول لتحديد نوع البكتيريا المسببة للالتهاب واختيار المضاد الحيوي الأمثل.',
    individualSale: false,
    slug: 'urine-culture',
  },
  {
    id: '2547343b-6296-4d2f-a333-e35669577883',
    name: 'اختبار فطريات الاظافر',
    badge: 'KOH hair',
    price: 49,
    testCategoryId: '9e6ccad9-fa01-4ddc-a854-aa36a33f7d61',
    description: 'فحص مجهري متخصص للكشف عن العدوى الفطرية في الجلد والشعر والأظافر.',
    individualSale: true,
    slug: 'nail-fungus-test',
  },
  {
    id: 'fa555e3d-0f6b-4394-83b5-4d4c4a2ac32e',
    name: 'التهاب الأمعاء والقولون في البراز',
    badge: 'Calprotectin stool',
    price: 219,
    testCategoryId: 'ed9ebba1-7e25-432c-97f0-c89b0f9b2544',
    description: 'مؤشر بروتيني دقيق للتمييز بين القولون العصبي والتهابات الأمعاء المناعية.',
    individualSale: true,
    slug: 'intestinal-and-colon-inflammation-in-stool',
  },
  {
    id: '912a45ad-25a4-49ae-839c-95e46b8bddb4',
    name: 'الدم الخفي في البراز',
    badge: 'Occult Blood In Stool',
    price: 40,
    testCategoryId: 'ed9ebba1-7e25-432c-97f0-c89b0f9b2544',
    description: 'فحص الدم الخفي في البراز للكشف المبكر عن تقرحات أو أورام القولون.',
    individualSale: false,
    slug: 'occult-blood-in-stool',
  },
  {
    id: '8f521fb3-042d-4c2f-bc4f-d1cdc87e334a',
    name: 'جرثومة المعدة في البراز',
    badge: 'H. pylori Antigen in Stool',
    price: 79,
    testCategoryId: 'ed9ebba1-7e25-432c-97f0-c89b0f9b2544',
    description: 'الاختبار السريع والدقيق للكشف عن وجود جرثومة المعدة النشطة.',
    individualSale: true,
    slug: 'stomach-germ-in-stool',
  },
  {
    id: '0fa45536-5ba9-4593-ae1a-ba9d47bb1407',
    name: 'فحص جرثومة المعدة عن طريق التنفس',
    badge: 'Urea Breath Test',
    price: 219,
    testCategoryId: 'ed9ebba1-7e25-432c-97f0-c89b0f9b2544',
    description: 'الفحص الذهبي (اختبار النفس) للكشف عن جرثومة المعدة بدقة وبدون ألم.',
    individualSale: true,
    slug: 'stomach-germ-test-via-breathing',
  },
  {
    id: '6e36a34c-1d29-42fc-a3da-335967022f9d',
    name: 'الحديد',
    badge: 'Iron Total',
    price: 15,
    testCategoryId: '00fe3227-b0a0-4736-95d8-66629ebce197',
    description: 'قياس مستوى الحديد المتاح في الدم لدعم إنتاج خلايا الدم الحمراء.',
    individualSale: false,
    slug: 'iron',
  },
  {
    id: '6c8a2bc8-74af-4e00-8520-d768c90fc3d2',
    name: 'الحديد الغير مرتبط',
    badge: 'UIBC',
    testCategoryId: '00fe3227-b0a0-4736-95d8-66629ebce197',
    description: 'تحليل السعة غير المشبعة للارتباط بالحديد لتقييم كفاءة استهلاك الحديد في الجسم.',
    price: 40,
    individualSale: false,
    slug: 'unbound-iron',
  },
  {
    id: '1beec137-530d-4244-a470-d322806ceb86',
    name: 'تشبع الحديد',
    badge: 'Transferrin Saturation',
    price: 89,
    testCategoryId: '00fe3227-b0a0-4736-95d8-66629ebce197',
    description: 'تقييم النسبة المئوية لتشبع الترانسفيرين لضمان النقل الصحيح للحديد.',
    individualSale: true,
    slug: 'iron-saturation',
  },
  {
    id: '76418bc7-bf7e-4a69-8f23-8ab0418b1edd',
    name: 'قدرة الجسم على نقل الحديد',
    badge: 'Serum Transferrin',
    price: 89,
    testCategoryId: '00fe3227-b0a0-4736-95d8-66629ebce197',
    description: 'فحص مستوى البروتين الناقل للحديد لتقييم الحالة التغذوية والتمثيل الغذائي.',
    individualSale: true,
    slug: 'body-ability-to-transport-iron',
  },
  {
    id: '1d5b2f1a-a20a-4e83-be18-6939ce8a6884',
    name: 'قدرة الحديد على الارتباط',
    badge: 'TIBC',
    testCategoryId: '00fe3227-b0a0-4736-95d8-66629ebce197',
    description: 'قياس قدرة الدم الكلية على الارتباط بالحديد لتشخيص أنواع الأنيميا المختلفة.',
    price: 25,
    individualSale: false,
    slug: 'iron-binding-capacity',
  },
  {
    id: '00e9ba78-e285-40a1-a868-82d9a0d80144',
    name: 'مخزون الحديد',
    badge: 'Ferritin',
    price: 49,
    testCategoryId: '00fe3227-b0a0-4736-95d8-66629ebce197',
    description: 'الاختبار الأدق لتقييم مخزون الحديد في الجسم والكشف عن حالات النقص المزمن.',
    individualSale: true,
    slug: 'iron-store',
  },
  {
    id: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
    name: 'السكر التراكمي',
    badge: 'HbA1C',
    price: 69,
    testCategoryId: '5ea55e1a-8503-4e61-a935-b02abd599c9d',
    description:
      'تحليل السكر التراكمي، المعيار الذهبي لمتابعة انضباط السكر خلال الأشهر الثلاثة الماضية.',
    individualSale: true,
    slug: 'cumulative-sugar',
  },
  {
    id: '5a036ec3-e08c-4210-a8ac-e79ff635eeb5',
    name: 'ضغط الدم',
    badge: 'BP',
    price: 0,
    testCategoryId: 'b8db1d38-ad6b-4473-b26f-0df0affb5043',
    description: 'قياس ضغط الدم لمراقبة صحة القلب والشرايين والوقاية من المضاعفات.',
    individualSale: true,
    slug: 'blood-pressure',
  },
  {
    id: '854deaee-4645-4965-b180-ec81ad57aa8c',
    name: 'نبض القلب',
    badge: 'Heart Rate',
    price: 0,
    testCategoryId: 'b8db1d38-ad6b-4473-b26f-0df0affb5043',
    description: 'متابعة نبض القلب لضمان استقرار الوظائف الحيوية والنشاط البدني.',
    individualSale: true,
    slug: 'heart-pulse',
  },
  {
    id: '902053d3-3f6a-449d-a071-84d4252d4a0c',
    name: 'نسبة الأكسجين  في الدم',
    badge: 'SpO₂',
    price: 0,
    testCategoryId: 'b8db1d38-ad6b-4473-b26f-0df0affb5043',
    description: 'قياس نسبة تشبع الأكسجين في الدم لتقييم كفاءة الجهاز التنفسي.',
    individualSale: true,
    slug: 'oxygen-ratio-in-blood',
  },
  {
    id: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
    name: 'الهرمون المحفز للغدة الدرقية',
    badge: 'TSH',
    price: 49,
    testCategoryId: '5453b9de-da35-4057-8f3d-027a6fa52e8a',
    description: 'الاختبار الأول والأساسي لتقييم كفاءة عمل الغدة الدرقية وتنظيم طاقة الجسم.',
    individualSale: true,
    slug: 'thyroid-stimulating-hormone',
  },
  {
    id: 'bf2dda8d-a81c-4395-be4e-adcfb4ee1f57',
    name: 'هرمون الغدة الدرقية الحر ٣',
    badge: 'FREE (T3)',
    price: 49,
    testCategoryId: '5453b9de-da35-4057-8f3d-027a6fa52e8a',
    description: 'فحص المستوى الفعال من هرمون الغدة الدرقية لتقييم حالات فرط النشاط بدقة.',
    individualSale: true,
    slug: 'free-thyroid-hormone-3',
  },
  {
    id: '2357ab7d-437c-48ec-88e7-44fae061439e',
    name: 'هرمون الغدة الدرقية الحر ٤',
    badge: 'FREE (T4)',
    price: 49,
    testCategoryId: '5453b9de-da35-4057-8f3d-027a6fa52e8a',
    description: 'قياس الهرمون النشط للغدة الدرقية المسؤول عن تنظيم عمليات التمثيل الغذائي.',
    individualSale: true,
    slug: 'free-thyroid-hormone-4',
  },
  {
    id: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
    name: 'حمض الفوليك',
    badge: 'Folate (vitamin B9)',
    price: 59,
    testCategoryId: '4a9d41a6-1c11-4622-b663-8809476b9ac2',
    description: 'اختبار ضروري لتقييم مستويات حمض الفوليك الهام لنمو الخلايا الصحي.',
    individualSale: true,
    slug: 'folic-acid',
  },
  {
    id: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
    name: 'فيتامين ب12',
    badge: 'Vitamin B12',
    price: 49,
    testCategoryId: '4a9d41a6-1c11-4622-b663-8809476b9ac2',
    description: 'فحص حيوي لضمان سلامة الجهاز العصبي والوقاية من حالات فقر الدم.',
    individualSale: true,
    slug: 'vitamin-b12',
  },
  {
    id: '7c2500e0-355c-4264-b6d6-53057684680c',
    name: 'فيتامين دال',
    badge: 'Vitamin D',
    price: 79,
    testCategoryId: '4a9d41a6-1c11-4622-b663-8809476b9ac2',
    description: 'تحليل أساسي لتقييم مستويات فيتامين الشمس الضروري لقوة العظام والمناعة.',
    individualSale: true,
    slug: 'vitamin-d',
  },
  {
    id: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
    name: 'البوتاسيوم',
    badge: 'K',
    price: 15,
    testCategoryId: '711a139b-bdf0-48aa-b520-e91afad6ab01',
    description: 'فحص حيوي لضمان انتظام ضربات القلب وسلامة الأداء العضلي والعصبي.',
    individualSale: false,
    slug: 'potassium',
  },
  {
    id: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
    name: 'الزنك',
    badge: 'Zinc',
    price: 39,
    testCategoryId: '711a139b-bdf0-48aa-b520-e91afad6ab01',
    description: 'فحص مستوى الزنك الأساسي لتقوية الجهاز المناعي وسرعة التئام الجروح.',
    individualSale: false,
    slug: 'zinc',
  },
  {
    id: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
    name: 'الصوديوم',
    badge: 'Na',
    price: 15,
    testCategoryId: '711a139b-bdf0-48aa-b520-e91afad6ab01',
    description: 'تحليل محوري لضبط ضغط الدم وتوازن السوائل وسلامة وظائف الأعصاب.',
    individualSale: false,
    slug: 'sodium',
  },
  {
    id: 'e4506f21-c9dc-4577-abe5-7e572483b9f6',
    name: 'الفسفور',
    badge: 'Ph',
    testCategoryId: '711a139b-bdf0-48aa-b520-e91afad6ab01',
    description: 'اختبار هام لتقييم صحة العظام والأسنان وإنتاج الطاقة في الخلايا.',
    price: 15,
    individualSale: false,
    slug: 'phosphorus',
  },
  {
    id: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
    name: 'الكالسيوم',
    badge: 'Ca',
    price: 15,
    testCategoryId: '711a139b-bdf0-48aa-b520-e91afad6ab01',
    description: 'فحص أساسي لسلامة العظام والأسنان وضمان توازن الوظائف الحيوية.',
    individualSale: false,
    slug: 'calcium',
  },
  {
    id: '0514c610-34d2-489f-9e05-066a074f0cc7',
    name: 'الكلوريد',
    badge: 'CL',
    price: 15,
    testCategoryId: '711a139b-bdf0-48aa-b520-e91afad6ab01',
    description: 'اختبار ضروري للحفاظ على توازن السوائل والحموضة داخل خلايا الجسم.',
    individualSale: false,
    slug: 'chloride',
  },
  {
    id: '1d2740e9-f28a-403e-b5f8-b786eec02220',
    name: 'المغنيسيوم',
    badge: 'Mg',
    price: 15,
    testCategoryId: '711a139b-bdf0-48aa-b520-e91afad6ab01',
    description: 'تحليل المعدن الضروري لأكثر من ثلاثمائة تفاعل حيوي في الجسم، منها دعم الأعصاب.',
    individualSale: false,
    slug: 'magnesium',
  },
  {
    id: '9db8b4ec-0e44-4769-a7c8-1c12933293c3',
    name: 'النحاس',
    badge: 'Copper',
    price: 119,
    testCategoryId: '711a139b-bdf0-48aa-b520-e91afad6ab01',
    description: 'قياس مستوى النحاس الضروري لإنتاج الطاقة وتكوين النسيج الضام.',
    individualSale: true,
    slug: 'copper',
  },
  {
    id: '92982467-c78e-4a73-8991-684b9f5e0e7b',
    name: 'حمض اليوريك',
    badge: 'Uric acid',
    price: 10,
    testCategoryId: '711a139b-bdf0-48aa-b520-e91afad6ab01',
    description: 'فحص دقيق للكشف عن مستويات الأملاح للوقاية من النقرس وحصوات الكلى.',
    individualSale: false,
    slug: 'uric-acid',
  },
  {
    id: 'd23694f2-58ff-4552-ba1c-aaa90cf03703',
    name: 'المنظم للحويصلات المنوية',
    badge: 'FSH',
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: 'فحص هرمون تحفيز الحويصلات لتقييم صحة الحيوانات المنوية والخصوبة عند الرجال.',
    price: 49,
    individualSale: true,
    slug: 'follicle-stimulating-hormone',
  },
  {
    id: '3835514b-4699-48a8-98c0-31f167199183',
    name: 'لمنظم للغدد التناسلية',
    badge: 'LH',
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: 'اختبار الهرمون المنشط للغدد التناسلية لتقييم انتظام الإباضة ودعم الخصوبة.',
    price: 49,
    individualSale: true,
    slug: 'luteinizing-hormone',
  },
  {
    id: 'e8e68243-9d04-406d-be87-5ccb76663e8a',
    name: 'مخزون البويضات',
    badge: 'AMH',
    price: 199,
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: 'تحليل مخزون المبيض، الاختبار الأدق لتقييم القدرة الإنجابية الحالية والمستقبلية.',
    individualSale: true,
    slug: 'egg-reserve',
  },
  {
    id: 'e913eb87-f844-4ecc-96bd-98261c9568dd',
    name: 'هرمون التبويض١',
    badge: 'Follicle-stimulating Hormone (FSH)',
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: '',
    price: 49,
    individualSale: true,
    slug: 'ovulation-hormone-1',
  },
  {
    id: '73e5d71e-1842-4de7-a417-7d47f6aa94a3',
    name: 'هرمون التبويض٢',
    badge: 'Luteinizing Hormone (LH)',
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: '',
    price: 49,
    individualSale: true,
    slug: 'ovulation-hormone-2',
  },
  {
    id: 'd63f34b8-eb1d-445c-9bea-c2e4ba661a8b',
    name: 'هرمون الحليب',
    badge: 'Prolactin',
    price: 49,
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: 'قياس هرمون الحليب لتقييم اضطرابات الدورة الشهرية والقدرة الإنجابية.',
    individualSale: true,
    slug: 'milk-hormone',
  },
  {
    id: '50e3f7f8-90c1-430d-a228-ebd172bfcc76',
    name: 'هرمون الذكورة الحر',
    badge: 'Testosterone Free',
    price: 89,
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: 'قياس الجزء الفعال والنشط حيوياً من هرمون التستوستيرون في الجسم.',
    individualSale: true,
    slug: 'free-masculinity-hormone',
  },
  {
    id: 'fb49df26-1463-4ce0-9798-53d30a69791c',
    name: 'هرمون نمو الشعر',
    badge: 'DHEA-S',
    price: 79,
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description:
      'قياس مستوى هرمون ديهيدرو إيبي أندروستيرون سلفات لتقييم نشاط الغدة الكظرية وتأثيره على نمو الشعر والأندروجينات.',
    individualSale: true,
    slug: 'hair-growth-hormone',
  },
  {
    id: 'ceaf87e9-d671-4591-b14c-9a3432024d36',
    name: 'هرمون الذكورة الكلي',
    badge: 'Testosterone Total',
    price: 49,
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: 'قياس المستوى الكلي لهرمون الذكورة لتقييم الصحة الجنسية والقدرة البدنية.',
    individualSale: true,
    slug: 'total-masculinity-hormone',
  },
  {
    id: 'c8c25429-5c64-4f5c-954b-66737bc234e8',
    name: 'هرمون الغدة الكظرية',
    badge: 'DHEA',
    price: 79,
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: 'قياس هرمون الغدة الكظرية لتقييم وظائف الغدة الكظرية والتوازن الهرموني.',
    individualSale: true,
    slug: 'adrenal-gland-hormone',
  },
  {
    id: '6024f60b-c4ed-414c-8d5c-dad418ebd37f',
    name: 'هرمون جودة البويضات',
    badge: 'Estradiol',
    price: 49,
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: '',
    individualSale: true,
    slug: 'egg-quality-hormone',
  },
  {
    id: 'f8e1a733-cc03-4577-813a-b319d6d579c3',
    name: 'هرمون مخزون البويضات',
    badge: 'Progesterone',
    price: 49,
    testCategoryId: '85e50213-d781-4667-8e96-e2c025c25875',
    description: 'فحص هرمون البروجستيرون لتقييم حدوث التبويض ودعم استقرار الحمل.',
    individualSale: true,
    slug: 'egg-reserve-hormone',
  },
  {
    id: 'b1cefdd9-85f2-4ec6-bb45-b8d029458dd3',
    name: 'إنزيم البنكرياس الأميليز',
    badge: 'Amylase',
    price: 20,
    testCategoryId: '5b622dc4-3189-481e-8434-c4274a37737e',
    description: 'فحص حيوي لتقييم كفاءة البنكرياس وضمان الأداء الأمثل للجهاز الهضم',
    individualSale: false,
    slug: 'pancreatic-amylase-enzyme',
  },
  {
    id: '125aae3c-b427-4be8-89cc-41ad8330d9bd',
    name: 'إنزيم البنكرياس الليبيز',
    badge: 'Lipase',
    price: 20,
    testCategoryId: '5b622dc4-3189-481e-8434-c4274a37737e',
    description: 'الاختبار الأكثر دقة لتشخيص التهابات واضطرابات البنكرياس الحادة والمزمنة.',
    individualSale: false,
    slug: 'pancreatic-lipase-enzyme',
  },
  {
    id: '887a8cbc-64dd-4083-8247-e9581159245b',
    name: 'صورة الدم الكاملة',
    badge: 'CBC',
    price: 29,
    testCategoryId: 'c98d9ce5-94cc-4a51-83e1-96e81e7d65ec',
    description: 'فحص صورة الدم الكاملة للاطمئنان على مستويات الهيموجلوبين والمناعة والصفائح.',
    individualSale: false,
    slug: 'complete-blood-picture',
  },
  {
    id: '58d876ce-7726-4daa-9c9d-457dbf67e9fc',
    name: 'فصيلة الدم',
    badge: 'ABO',
    testCategoryId: 'c98d9ce5-94cc-4a51-83e1-96e81e7d65ec',
    description: 'تحديد فصيلة الدم وعامل الريسوس لضمان الأمان في نقل الدم وحالات الحمل.',
    price: 15,
    individualSale: false,
    slug: 'blood-type',
  },
  {
    id: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
    name: 'الدهون الثلاثية',
    badge: 'TG',
    testCategoryId: '1b6ac0e7-a1b4-4e5f-b7b9-f8793eb8acb1',
    description: 'قياس الدهون الثلاثية المرتبطة بنمط الغذاء وصحة الاستقلاب في الجسم.',
    price: 15,
    individualSale: false,
    slug: 'triglycerides',
  },
  {
    id: '15cd6542-8798-4fc0-a536-913055c9cdb0',
    name: 'الدهون الضارة',
    badge: 'LDL',
    price: 15,
    testCategoryId: '1b6ac0e7-a1b4-4e5f-b7b9-f8793eb8acb1',
    description: 'فحص الكوليستيرول الضار لتقييم مخاطر ترسب الدهون وضيق الشرايين.',
    individualSale: false,
    slug: 'harmful-fats',
  },
  {
    id: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
    name: 'الدهون النافعة',
    badge: 'HDL',
    price: 10,
    testCategoryId: '1b6ac0e7-a1b4-4e5f-b7b9-f8793eb8acb1',
    description: 'قياس الكوليستيرول النافع الذي يحمي الشرايين ويعزز صحة القلب.',
    individualSale: false,
    slug: 'beneficial-fats',
  },
  {
    id: '3077438e-12d3-4e39-bc44-56054b1e1245',
    name: 'الكوليسترول',
    badge: 'CHOL',
    testCategoryId: '1b6ac0e7-a1b4-4e5f-b7b9-f8793eb8acb1',
    description: 'فحص المستوى الكلي للكوليستيرول لتقييم مخاطر أمراض القلب والشرايين.',
    price: 10,
    individualSale: false,
    slug: 'cholesterol',
  },
  {
    id: '7e432ab6-cf42-4f56-8999-58715dc069a2',
    name: 'الكوليسترول منخفض الكثافة',
    badge: 'VLDL',
    price: 10,
    testCategoryId: '1b6ac0e7-a1b4-4e5f-b7b9-f8793eb8acb1',
    description: 'قياس مستوى الدهون منخفضة الكثافة جداً المرتبطة بنقل الدهون الثلاثية.',
    individualSale: false,
    slug: 'low-density-cholesterol',
  },
  {
    id: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
    name: 'نسبة الدهون الضارة إلى النافعة',
    badge: 'HDL/LDL',
    testCategoryId: '1b6ac0e7-a1b4-4e5f-b7b9-f8793eb8acb1',
    description: 'نسبة دقيقة تساعد في تقييم التوازن بين الدهون الضارة والنافعة في الجسم.',
    price: 15,
    individualSale: false,
    slug: 'harmful-to-beneficial-fats-ratio',
  },
  {
    id: '8255ed96-95e5-4a50-867f-4ba2ac083422',
    name: 'نسبة الكوليسترول إلى الدهون الثلاثية',
    badge: 'CHOL/TG',
    testCategoryId: '1b6ac0e7-a1b4-4e5f-b7b9-f8793eb8acb1',
    description: 'نسبة حسابية إضافية لتقييم التوازن الكلي بين الكوليستيرول والدهون الثلاثية.',
    price: 10,
    individualSale: false,
    slug: 'cholesterol-to-triglycerides-ratio',
  },
  {
    id: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
    name: 'نسبة خطر الكوليسترول',
    badge: 'CHOL/HDL',
    testCategoryId: '1b6ac0e7-a1b4-4e5f-b7b9-f8793eb8acb1',
    description: 'مؤشر حسابي لتقييم مخاطر الإصابة بأمراض القلب التاجية بدقة أكبر.',
    price: 10,
    individualSale: false,
    slug: 'cholesterol-risk-ratio',
  },
  {
    id: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
    name: 'الأنسولين الصائم',
    badge: 'Insulin (Fasting)',
    price: 69,
    testCategoryId: 'b0ba371d-fd23-421a-9cb7-877d1f03ef70',
    description: 'قياس مستوى الأنسولين الصائم لتقييم كفاءة البنكرياس في تنظيم السكر.',
    individualSale: true,
    slug: 'fasting-insulin',
  },
  {
    id: '48120a4e-386d-474d-8109-0cc875d64745',
    name: 'السكر الصائم',
    badge: 'Fasting Blood Glucose',
    price: 10,
    testCategoryId: 'b0ba371d-fd23-421a-9cb7-877d1f03ef70',
    description: 'قياس مستوى السكر الصائم لضمان استقرار مستويات الطاقة في الجسم.',
    individualSale: false,
    slug: 'fasting-sugar',
  },
  {
    id: '917df5a0-9749-445e-8959-84d1736c00a1',
    name: 'السكر الصايم',
    badge: 'FBS',
    price: 10,
    testCategoryId: 'b0ba371d-fd23-421a-9cb7-877d1f03ef70',
    description: '',
    individualSale: false,
    slug: 'fasting-sugar',
  },
  {
    id: '84552786-7d7f-4288-8063-7ef0b4d0cd77',
    name: 'السكر العشوائي',
    badge: 'Random Blood Glucose',
    price: 10,
    testCategoryId: 'b0ba371d-fd23-421a-9cb7-877d1f03ef70',
    description: 'فحص فوري لمستوى السكر في الدم لتقييم الحالة الصحية في أي وقت.',
    individualSale: false,
    slug: 'random-sugar',
  },
  {
    id: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
    name: 'مقاومة الأنسولين',
    badge: 'HOMA-IR',
    price: 39,
    testCategoryId: 'b0ba371d-fd23-421a-9cb7-877d1f03ef70',
    description: 'المؤشر العلمي الدقيق للكشف عن مقاومة الأنسولين والوقاية من السكري.',
    individualSale: true,
    slug: 'insulin-resistance',
  },
  {
    id: '96d589a5-ddf9-4dc7-afda-90b796afda68',
    name: 'حمض اللاكتيك العضلي',
    badge: 'LDH',
    price: 20,
    testCategoryId: '05039b10-cb5f-4b6f-a330-dd58da05d9e5',
    description: 'فحص شامل لتقييم تضرر الأنسجة الحيوية ودعم التشخيص الإكلينيكي المتكامل.',
    individualSale: false,
    slug: 'muscle-lactic-acid',
  },
  {
    id: 'eecf6d49-763f-488e-bebc-7edb0187231e',
    name: 'إنزيم قلب كلي',
    badge: 'CK (Total)',
    price: 30,
    testCategoryId: 'f83237f8-5e1a-420b-8de8-1fc2f397a044',
    description: 'مؤشر حيوي لتقييم سلامة الجهاز العضلي والكشف عن الإجهاد البدني.',
    individualSale: false,
    slug: 'total-heart-enzyme',
  },
  {
    id: '93b6018f-6c78-4b0b-90fb-c56a1c06677a',
    name: 'إنزيم قلب محدد',
    badge: 'CK (MB)',
    price: 49,
    testCategoryId: 'f83237f8-5e1a-420b-8de8-1fc2f397a044',
    description: 'التحليل النوعي الأدق لتقييم صحة عضلة القلب والكشف عن الإصابات القلبية.',
    individualSale: true,
    slug: 'specific-heart-enzyme',
  },
  {
    id: '97848f45-1e82-4cab-83c3-7aaef0e84dc1',
    name: 'كاشف أورام البنكرياس',
    badge: 'CA 19.9',
    price: 99,
    testCategoryId: 'd803add8-1bfe-4ef9-be69-99b372c84d67',
    description: 'مؤشر دقيق لتقييم صحة البنكرياس والجهاز الهضمي والمتابعة الدورية للأورام.',
    individualSale: true,
    slug: 'pancreatic-tumor-marker',
  },
  {
    id: '7040c7f0-9c9a-43ca-8154-d8dc08de6b0a',
    name: 'كاشف أورام الثدي',
    badge: 'CA 15.3',
    price: 99,
    testCategoryId: 'd803add8-1bfe-4ef9-be69-99b372c84d67',
    description: 'اختبار متطور لمراقبة صحة الثدي وفعالية الخطط العلاجية المتبعة.',
    individualSale: true,
    slug: 'breast-tumor-marker',
  },
  {
    id: '8a2d98f6-5aa6-4892-b9d1-4ee14b84bc10',
    name: 'كاشف أورام القناة الهضمية',
    badge: 'Carcinoembryonic Antigen',
    price: 49,
    testCategoryId: 'd803add8-1bfe-4ef9-be69-99b372c84d67',
    description: 'تحليل شامل لمتابعة الأورام السرطانية، خاصة في القولون والجهاز الهضمي.',
    individualSale: true,
    slug: 'digestive-tract-tumor-marker',
  },
  {
    id: 'f7364c9e-a1da-4374-b116-68053ec36374',
    name: 'كاشف أورام الكبد',
    badge: 'AFP (Alpha-Fetoprotein)',
    price: 49,
    testCategoryId: 'd803add8-1bfe-4ef9-be69-99b372c84d67',
    description: 'فحص تخصصي للكشف عن أورام الكبد واضطرابات الخلايا الجنينية بدقة عالية.',
    individualSale: true,
    slug: 'liver-tumor-marker',
  },
  {
    id: 'a924ca48-7f49-4199-b309-4a0eb9867942',
    name: 'كاشف أورام المبايض',
    badge: 'CA 125',
    price: 99,
    testCategoryId: 'd803add8-1bfe-4ef9-be69-99b372c84d67',
    description: 'فحص حيوي للكشف المبكر عن أورام المبيض واضطرابات الجهاز التناسلي النسائي.',
    individualSale: true,
    slug: 'ovarian-tumor-marker',
  },
  {
    id: '1d6ae985-de07-4a4b-8b88-85180a4bd0da',
    name: 'المقياس الدولي لنتائج التخثر',
    badge: 'INR',
    testCategoryId: 'c8fecf1d-1f6d-4bff-825f-3f9d579fc46e',
    description: 'المؤشر العالمي الموحد لمراقبة فعالية الأدوية المسيلة للدم وضمان الأمان الصحي.',
    price: 25,
    individualSale: false,
    slug: 'international-normalized-ratio-for-coagulation',
  },
  {
    id: 'ba3168e3-3e60-48c1-b6a8-2551f6b66c4f',
    name: 'قدرة الدم على التخثر',
    badge: 'PT',
    price: 30,
    testCategoryId: 'c8fecf1d-1f6d-4bff-825f-3f9d579fc46e',
    description: 'اختبار زمن البروثرومبين لتقييم مسار التجلط الخارجي وكفاءة عمل الكبد.',
    individualSale: false,
    slug: 'blood-coagulation-ability',
  },
  {
    id: 'f56f771a-7add-483f-abda-b53b64c0117b',
    name: 'قدرة الدم على التخثر الجزئي',
    badge: 'PTT',
    price: 30,
    testCategoryId: 'c8fecf1d-1f6d-4bff-825f-3f9d579fc46e',
    description:
      'فحص زمن الثرومبوبلاستين الجزئي لتقييم مسار التجلط الداخلي ومراقبة علاج الهيبارين.',
    individualSale: false,
    slug: 'partial-blood-coagulation-ability',
  },
  {
    id: '2cf8fc00-3fc3-46f8-b9cc-55f15b515171',
    name: 'فحص الحمل بالبول',
    badge: 'pregnancy in urine qualitative',
    price: 30,
    testCategoryId: '10be82ba-eec7-42a6-841a-22e0a1dd8040',
    description: 'فحوصات الحمل النوعية لضمان الكشف المبكر والدقيق عن هرمون الحمل.',
    individualSale: false,
    slug: 'pregnancy-test-in-urine',
  },
  {
    id: 'd4ab367b-af8a-4a40-b89b-983526a9e69a',
    name: 'فحص الحمل بالدم',
    badge: 'pregnancy in serum qualitative',
    price: 89,
    testCategoryId: '10be82ba-eec7-42a6-841a-22e0a1dd8040',
    description: 'فحوصات الحمل النوعية لضمان الكشف المبكر والدقيق عن هرمون الحمل.',
    individualSale: true,
    slug: 'pregnancy-test-in-blood',
  },
  {
    id: 'e2370d06-bfdd-455a-b955-5f49c0ce8a2c',
    name: 'إنزيم الفوسفاتيز القلوي',
    badge: 'Alk. Ph.',
    price: 10,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'مؤشر أساسي لتقييم صحة المرارة والقنوات الكبدية ونمو العظام.',
    individualSale: false,
    slug: 'alkaline-phosphatase-enzyme',
  },
  {
    id: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
    name: 'إنزيم الكبد',
    badge: 'AST',
    price: 10,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'مؤشر حيوي لتقييم سلامة خلايا الكبد والقلب والكشف عن التضرر النسيجي.',
    individualSale: false,
    slug: 'liver-enzyme',
  },
  {
    id: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
    name: 'إنزيم الكبد',
    badge: 'ALT',
    price: 10,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'الاختبار الأكثر نوعية لتقييم كفاءة الكبد والكشف المبكر عن الالتهابات الكبدية.',
    individualSale: false,
    slug: 'liver-enzyme',
  },
  {
    id: 'c9f7a9e7-46bf-4166-9f13-61431398413f',
    name: 'إنزيم الكبد',
    badge: 'Gamma-GT',
    price: 10,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'فحص دقيق للكشف عن أمراض الكبد الناتجة عن الكحول أو انسداد المسالك المرارية.',
    individualSale: false,
    slug: 'liver-enzyme',
  },
  {
    id: '13cbaad1-2355-4070-a535-2ac65f54a2b3',
    name: 'البروتين الكلي',
    badge: 'Total Protein',
    price: 15,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'قياس إجمالي البروتينات في الدم لتقييم الحالة الصحية العامة ووظائف الكبد.',
    individualSale: false,
    slug: 'total-protein',
  },
  {
    id: 'ceaaaf40-8fd1-4782-a6ea-d03af6fe2cd2',
    name: 'الصفراء الكلية',
    badge: 'Total Bilirubin',
    price: 10,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'قياس مستوى الصفراء الكلي في الدم لتقييم كفاءة الكبد والقنوات المرارية.',
    individualSale: false,
    slug: 'total-bilirubin',
  },
  {
    id: 'c207a3bc-8259-4332-8c7e-2ff2353636d6',
    name: 'الصفراء المباشرة',
    badge: 'Direct Bilirubin',
    price: 10,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'قياس الجزء المرتبط من الصفراء للكشف عن انسدادات القنوات المرارية.',
    individualSale: false,
    slug: 'direct-bilirubin',
  },
  {
    id: '976d540b-9307-4b39-b370-face1db276d3',
    name: 'الصفراء غير المباشرة',
    badge: 'Indirect Bilirubin',
    price: 10,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'فحص مستوى الصفراء غير المرتبط للكشف عن حالات تكسر الدم أو اضطرابات الكبد.',
    individualSale: false,
    slug: 'indirect-bilirubin',
  },
  {
    id: '665fcfe8-e244-445e-8702-41053476a12d',
    name: 'بروتين الألبومين',
    badge: 'Albumin (Serum)',
    price: 10,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'تقييم البروتين الأساسي المصنع في الكبد لضمان توازن السوائل والتغذية.',
    individualSale: false,
    slug: 'albumin-protein',
  },
  {
    id: '9a62ae87-a786-4eb4-8777-5476fe72bda0',
    name: 'جلوبيولين',
    badge: 'Globulin',
    price: 10,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'تقييم مستوى الجلوبولين الهام لتعزيز المناعة ووظائف الجسم الدفاعية.',
    individualSale: false,
    slug: 'globulin',
  },
  {
    id: '9e986956-619a-4efb-b246-c8da030dca6f',
    name: 'معدل إنزيمات الكبد',
    badge: 'AST/ALT',
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: '',
    price: 10,
    individualSale: false,
    slug: 'liver-enzymes-ratio',
  },
  {
    id: 'c3e13eb5-449e-47fc-81b8-762f31c23ad7',
    name: 'معدل إنزيمات الكبد',
    badge: 'ALT/AST Ratio',
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'مؤشر حسابي يساعد الطبيب في تحديد نوع وسبب اضطرابات الكبد بدقة.',
    price: 10,
    individualSale: false,
    slug: 'liver-enzymes-ratio',
  },
  {
    id: '2b0f9810-5505-419b-ac1c-7acb0be06a95',
    name: 'نسبة الألبومين إلى الجلوبيولين',
    badge: 'Albumin/Globulin Ratio',
    price: 10,
    testCategoryId: 'bcaa6e8f-a59c-47ae-9db1-a96bacf2f4d4',
    description: 'نسبة حسابية دقيقة تساعد في تشخيص أمراض الكبد والكلى والاضطرابات المناعية.',
    individualSale: false,
    slug: 'albumin-to-globulin-ratio',
  },
  {
    id: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
    name: 'الكرياتنين',
    badge: 'Creatinine (Serum)',
    price: 10,
    testCategoryId: 'fccf73d5-0465-4425-8f55-4f3897ffc3ca',
    description: 'الفحص المرجعي لتقييم كفاءة الكلى في تصفية الفضلات من الدم.',
    individualSale: false,
    slug: 'creatinine',
  },
  {
    id: '24fd7bcf-bc20-4e89-a609-d2095b61716c',
    name: 'الكرياتينين',
    badge: 'Creatinine',
    price: 10,
    testCategoryId: 'fccf73d5-0465-4425-8f55-4f3897ffc3ca',
    description: '',
    individualSale: false,
    slug: 'creatinine',
  },
  {
    id: '98fb5530-912d-48ea-9188-c5734514c81f',
    name: 'معدل ترشيح الكلى',
    badge: 'eGFR',
    price: 10,
    testCategoryId: 'fccf73d5-0465-4425-8f55-4f3897ffc3ca',
    description: 'المعدل التقديري لترشيح الكلى، وهو المؤشر الأهم لتقييم مستوى وظائف الكلى.',
    individualSale: false,
    slug: 'kidney-filtration-rate',
  },
  {
    id: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
    name: 'يوريا الدم',
    badge: 'Blood Urea',
    price: 10,
    testCategoryId: 'fccf73d5-0465-4425-8f55-4f3897ffc3ca',
    description: 'قياس مستوى اليوريا في الدم لتقييم كفاءة الكلى والتوازن البروتيني بالجسم.',
    individualSale: false,
    slug: 'blood-urea',
  },
]

export const PACKAGE_TESTS: PackageTest[] = [
  // ──────────────────────────────────────────────────────────────
  // Exploratory (id: exploratory)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '917df5a0-9749-445e-8959-84d1736c00a1',
  }, // FBS
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '9e986956-619a-4efb-b246-c8da030dca6f',
  }, // AST/ALT
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '0514c610-34d2-489f-9e05-066a074f0cc7',
  }, // CL
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // Iron Total
  {
    packageId: 'cb25f0d3-488e-464f-aabe-9e8e9f67eca6',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D

  // ──────────────────────────────────────────────────────────────
  // Exploratory Plus (id: exploratory_plus)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '917df5a0-9749-445e-8959-84d1736c00a1',
  }, // FBS
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '9e986956-619a-4efb-b246-c8da030dca6f',
  }, // AST/ALT
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: 'ceaaaf40-8fd1-4782-a6ea-d03af6fe2cd2',
  }, // Total Bilirubin
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: 'c207a3bc-8259-4332-8c7e-2ff2353636d6',
  }, // Direct Bilirubin
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '976d540b-9307-4b39-b370-face1db276d3',
  }, // Indirect Bilirubin
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '0514c610-34d2-489f-9e05-066a074f0cc7',
  }, // CL
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // الحديد
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination
  {
    packageId: '9af16f47-b02d-48e0-9355-c2af5a228cae',
    testId: 'a6194419-7dff-413b-8c10-9e1c2e77cc2e',
  }, // Stool Examination

  // ──────────────────────────────────────────────────────────────
  // Advanced (id: advanced)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'eecf6d49-763f-488e-bebc-7edb0187231e',
  }, // CK (Total)
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '9e986956-619a-4efb-b246-c8da030dca6f',
  }, // AST/ALT
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'ceaaaf40-8fd1-4782-a6ea-d03af6fe2cd2',
  }, // Total Bilirubin
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'c207a3bc-8259-4332-8c7e-2ff2353636d6',
  }, // Direct Bilirubin
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '976d540b-9307-4b39-b370-face1db276d3',
  }, // Indirect Bilirubin
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'c9f7a9e7-46bf-4166-9f13-61431398413f',
  }, // Gamma-GT
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'e2370d06-bfdd-455a-b955-5f49c0ce8a2c',
  }, // Alk. Ph.
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
  }, // Blood Urea
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '0514c610-34d2-489f-9e05-066a074f0cc7',
  }, // CL
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '92982467-c78e-4a73-8991-684b9f5e0e7b',
  }, // Uric acid
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // Iron Total
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'a6194419-7dff-413b-8c10-9e1c2e77cc2e',
  }, // Stool Examination
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '2a50a58b-7a90-4936-aab0-11728105ef4e',
  }, // Urine Culture
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: 'febe1cd3-c974-4f5a-96ea-a69d6da28b68',
  }, // Stool Culture
  {
    packageId: '06b9cdc8-bc7b-49ce-bd24-2eb040531714',
    testId: '2547343b-6296-4d2f-a333-e35669577883',
  }, // KOH hair

  // ──────────────────────────────────────────────────────────────
  // Advanced Plus (id: advanced_plus)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'eecf6d49-763f-488e-bebc-7edb0187231e',
  }, // CK (Total)
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '93b6018f-6c78-4b0b-90fb-c56a1c06677a',
  }, // CK (MB)
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
  }, // Insulin (Fasting)
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '9e986956-619a-4efb-b246-c8da030dca6f',
  }, // AST/ALT
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'ceaaaf40-8fd1-4782-a6ea-d03af6fe2cd2',
  }, // Total Bilirubin
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'c207a3bc-8259-4332-8c7e-2ff2353636d6',
  }, // Direct Bilirubin
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '976d540b-9307-4b39-b370-face1db276d3',
  }, // Indirect Bilirubin
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'c9f7a9e7-46bf-4166-9f13-61431398413f',
  }, // Gamma-GT
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'e2370d06-bfdd-455a-b955-5f49c0ce8a2c',
  }, // Alk. Ph.
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
  }, // Blood Urea
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'b1cefdd9-85f2-4ec6-bb45-b8d029458dd3',
  }, // Amylase
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '125aae3c-b427-4be8-89cc-41ad8330d9bd',
  }, // Lipase
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'bf2dda8d-a81c-4395-be4e-adcfb4ee1f57',
  }, // FREE (T4)
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '3099ac6b-2fc0-4a1d-8655-3e299b2c8a52',
  }, // ESR
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '10a13810-fc76-43bc-8f5b-9c5bcaba033f',
  }, // RF
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '0514c610-34d2-489f-9e05-066a074f0cc7',
  }, // CL
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
  }, // Zinc
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '92982467-c78e-4a73-8991-684b9f5e0e7b',
  }, // Uric acid
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // الحديد
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '1d5b2f1a-a20a-4e83-be18-6939ce8a6884',
  }, // TIBC
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '6c8a2bc8-74af-4e00-8520-d768c90fc3d2',
  }, // UIBC
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '8f521fb3-042d-4c2f-bc4f-d1cdc87e334a',
  }, // H. pylori Antigen in Stool
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'a6194419-7dff-413b-8c10-9e1c2e77cc2e',
  }, // Stool Examination
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '2a50a58b-7a90-4936-aab0-11728105ef4e',
  }, // Urine Culture
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: 'febe1cd3-c974-4f5a-96ea-a69d6da28b68',
  }, // Stool Culture
  {
    packageId: '02655059-b185-4413-accf-8652df541421',
    testId: '2547343b-6296-4d2f-a333-e35669577883',
  }, // KOH hair

  // ──────────────────────────────────────────────────────────────
  // Royal Men (id: royal_men)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '58d876ce-7726-4daa-9c9d-457dbf67e9fc',
  }, // ABO
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'eecf6d49-763f-488e-bebc-7edb0187231e',
  }, // CK (Total)
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '93b6018f-6c78-4b0b-90fb-c56a1c06677a',
  }, // CK (MB)
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'ba3168e3-3e60-48c1-b6a8-2551f6b66c4f',
  }, // PT
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'f56f771a-7add-483f-abda-b53b64c0117b',
  }, // PTT
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '1d6ae985-de07-4a4b-8b88-85180a4bd0da',
  }, // INR
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
  }, // Insulin (Fasting)
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '9e986956-619a-4efb-b246-c8da030dca6f',
  }, // AST/ALT
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'ceaaaf40-8fd1-4782-a6ea-d03af6fe2cd2',
  }, // Total Bilirubin
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'c207a3bc-8259-4332-8c7e-2ff2353636d6',
  }, // Direct Bilirubin
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '976d540b-9307-4b39-b370-face1db276d3',
  }, // Indirect Bilirubin
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'c9f7a9e7-46bf-4166-9f13-61431398413f',
  }, // Gamma-GT
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '665fcfe8-e244-445e-8702-41053476a12d',
  }, // Albumin (Serum)
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '13cbaad1-2355-4070-a535-2ac65f54a2b3',
  }, // Total Protein
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '9a62ae87-a786-4eb4-8777-5476fe72bda0',
  }, // Globulin
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '2b0f9810-5505-419b-ac1c-7acb0be06a95',
  }, // Albumin/Globulin Ratio
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'e2370d06-bfdd-455a-b955-5f49c0ce8a2c',
  }, // Alk. Ph.
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
  }, // Blood Urea
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'b1cefdd9-85f2-4ec6-bb45-b8d029458dd3',
  }, // Amylase
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '125aae3c-b427-4be8-89cc-41ad8330d9bd',
  }, // Lipase
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'bf2dda8d-a81c-4395-be4e-adcfb4ee1f57',
  }, // FREE (T4)
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '3099ac6b-2fc0-4a1d-8655-3e299b2c8a52',
  }, // ESR
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'b37cb3aa-715d-490c-b5fc-72780c9b774d',
  }, // CRP
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '10a13810-fc76-43bc-8f5b-9c5bcaba033f',
  }, // RF
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '04b632b0-f71e-4c38-a2ed-0565d28be25e',
  }, // Total IgE
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '0514c610-34d2-489f-9e05-066a074f0cc7',
  }, // CL
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '9db8b4ec-0e44-4769-a7c8-1c12933293c3',
  }, // Copper
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
  }, // Zinc
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '92982467-c78e-4a73-8991-684b9f5e0e7b',
  }, // Uric acid
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // الحديد
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '1d5b2f1a-a20a-4e83-be18-6939ce8a6884',
  }, // TIBC
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '6c8a2bc8-74af-4e00-8520-d768c90fc3d2',
  }, // UIBC
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '8605472e-b07e-499e-ad96-29546111c077',
  }, // PSA (Total)
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'cfc569b2-7eef-4d4d-a71b-e5de40923b9d',
  }, // PSA (Free)
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '0756366f-9c0e-481c-8c9b-9c8678d59e25',
  }, // PSA Ratio (Free/Total)
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'ceaf87e9-d671-4591-b14c-9a3432024d36',
  }, // Testosterone Total
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '50e3f7f8-90c1-430d-a228-ebd172bfcc76',
  }, // Testosterone Free
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '912a45ad-25a4-49ae-839c-95e46b8bddb4',
  }, // Occult Blood In Stool
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '8f521fb3-042d-4c2f-bc4f-d1cdc87e334a',
  }, // H. pylori Antigen in Stool
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'fa555e3d-0f6b-4394-83b5-4d4c4a2ac32e',
  }, // Calprotectin stool
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'a6194419-7dff-413b-8c10-9e1c2e77cc2e',
  }, // Stool Examination
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '2a50a58b-7a90-4936-aab0-11728105ef4e',
  }, // Urine Culture
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: 'febe1cd3-c974-4f5a-96ea-a69d6da28b68',
  }, // Stool Culture
  {
    packageId: '36e3678e-320a-49f2-abff-25a19480edca',
    testId: '2547343b-6296-4d2f-a333-e35669577883',
  }, // KOH hair

  // ──────────────────────────────────────────────────────────────
  // Royal Men Plus (id: royal_men_plus)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '58d876ce-7726-4daa-9c9d-457dbf67e9fc',
  }, // ABO
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'eecf6d49-763f-488e-bebc-7edb0187231e',
  }, // CK (Total)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '93b6018f-6c78-4b0b-90fb-c56a1c06677a',
  }, // CK (MB)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'ba3168e3-3e60-48c1-b6a8-2551f6b66c4f',
  }, // PT
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'f56f771a-7add-483f-abda-b53b64c0117b',
  }, // PTT
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '1d6ae985-de07-4a4b-8b88-85180a4bd0da',
  }, // INR
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
  }, // Insulin (Fasting)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '9e986956-619a-4efb-b246-c8da030dca6f',
  }, // AST/ALT
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'ceaaaf40-8fd1-4782-a6ea-d03af6fe2cd2',
  }, // Total Bilirubin
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'c207a3bc-8259-4332-8c7e-2ff2353636d6',
  }, // Direct Bilirubin
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '976d540b-9307-4b39-b370-face1db276d3',
  }, // Indirect Bilirubin
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'c9f7a9e7-46bf-4166-9f13-61431398413f',
  }, // Gamma-GT
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '665fcfe8-e244-445e-8702-41053476a12d',
  }, // Albumin (Serum)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '13cbaad1-2355-4070-a535-2ac65f54a2b3',
  }, // Total Protein
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '9a62ae87-a786-4eb4-8777-5476fe72bda0',
  }, // Globulin
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '2b0f9810-5505-419b-ac1c-7acb0be06a95',
  }, // Albumin/Globulin Ratio
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'e2370d06-bfdd-455a-b955-5f49c0ce8a2c',
  }, // Alk. Ph.
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
  }, // Blood Urea
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'b1cefdd9-85f2-4ec6-bb45-b8d029458dd3',
  }, // Amylase
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '125aae3c-b427-4be8-89cc-41ad8330d9bd',
  }, // Lipase
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'bf2dda8d-a81c-4395-be4e-adcfb4ee1f57',
  }, // FREE (T4)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '3099ac6b-2fc0-4a1d-8655-3e299b2c8a52',
  }, // ESR
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'b37cb3aa-715d-490c-b5fc-72780c9b774d',
  }, // CRP
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '10a13810-fc76-43bc-8f5b-9c5bcaba033f',
  }, // RF
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '04b632b0-f71e-4c38-a2ed-0565d28be25e',
  }, // Total IgE
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '0514c610-34d2-489f-9e05-066a074f0cc7',
  }, // CL
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '9db8b4ec-0e44-4769-a7c8-1c12933293c3',
  }, // Copper
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
  }, // Zinc
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '92982467-c78e-4a73-8991-684b9f5e0e7b',
  }, // Uric acid
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // الحديد
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '1d5b2f1a-a20a-4e83-be18-6939ce8a6884',
  }, // TIBC
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '6c8a2bc8-74af-4e00-8520-d768c90fc3d2',
  }, // UIBC
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '97848f45-1e82-4cab-83c3-7aaef0e84dc1',
  }, // CA 19.9
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'f7364c9e-a1da-4374-b116-68053ec36374',
  }, // AFP (Alpha-Fetoprotein)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '8a2d98f6-5aa6-4892-b9d1-4ee14b84bc10',
  }, // Carcinoembryonic Antigen
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'd23694f2-58ff-4552-ba1c-aaa90cf03703',
  }, // FSH
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '3835514b-4699-48a8-98c0-31f167199183',
  }, // LH
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'ceaf87e9-d671-4591-b14c-9a3432024d36',
  }, // Testosterone Total
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '50e3f7f8-90c1-430d-a228-ebd172bfcc76',
  }, // Testosterone Free
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'd63f34b8-eb1d-445c-9bea-c2e4ba661a8b',
  }, // Prolactin
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '8605472e-b07e-499e-ad96-29546111c077',
  }, // PSA (Total)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'cfc569b2-7eef-4d4d-a71b-e5de40923b9d',
  }, // PSA (Free)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '0756366f-9c0e-481c-8c9b-9c8678d59e25',
  }, // PSA Ratio (Free/Total)
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '912a45ad-25a4-49ae-839c-95e46b8bddb4',
  }, // Occult Blood In Stool
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '8f521fb3-042d-4c2f-bc4f-d1cdc87e334a',
  }, // H. pylori Antigen in Stool
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'fa555e3d-0f6b-4394-83b5-4d4c4a2ac32e',
  }, // Calprotectin stool
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'a6194419-7dff-413b-8c10-9e1c2e77cc2e',
  }, // Stool Examination
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '2a50a58b-7a90-4936-aab0-11728105ef4e',
  }, // Urine Culture
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'febe1cd3-c974-4f5a-96ea-a69d6da28b68',
  }, // Stool Culture
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '2547343b-6296-4d2f-a333-e35669577883',
  }, // KOH hair
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'ac6a628c-8156-4382-bee7-07c7ccfe9600',
  }, // HIV Ag/Ab for type 1 & 2
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '93b631d6-14ed-4c4a-9797-eecf00091e0a',
  }, // HBS Antigen
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'e00bfee8-e606-4b26-9adc-ff87bfe16dd0',
  }, // Hepatitis C Virus Antibodies
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '331b952f-8b01-41e6-9a23-243b534dac16',
  }, // Herpes Simplex Virus Type 1
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '4bb6b2ac-2459-4863-8ccb-f6850d2af7f3',
  }, // Herpes Simplex Virus Type 2
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'b9922a71-92a4-44b0-b2ec-bef83e30028f',
  }, // Chlamydia trachomatis
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'de4fc80f-b9a4-4daa-b285-083c010f2c67',
  }, // Haemophilus ducreyi
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'ea1e7134-b8a4-4971-8b16-aeb327f1209b',
  }, // Mycoplasma genitalium
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'c1019715-8485-48b4-9931-97ee6e6493b1',
  }, // Trichomonas vaginalis
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'fc58bbef-93c9-4e0b-87b1-500b5098ea2e',
  }, // Mycoplasma hominis
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'b4df9889-2549-4fa4-912b-4a3cf2d67431',
  }, // Neisseria gonorrhoeae
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: '5a0bb25f-09a0-42bd-a692-c92237f0c558',
  }, // Treponema pallidum
  {
    packageId: 'eb05c421-cd7d-4aa2-a250-eae9fe13ab38',
    testId: 'e860f932-11f4-4af0-957a-7f71f9d66751',
  }, // Ureaplasma urealyticum

  // ──────────────────────────────────────────────────────────────
  // Royal Women (id: royal_women)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '58d876ce-7726-4daa-9c9d-457dbf67e9fc',
  }, // ABO
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'eecf6d49-763f-488e-bebc-7edb0187231e',
  }, // CK (Total)
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '93b6018f-6c78-4b0b-90fb-c56a1c06677a',
  }, // CK (MB)
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'ba3168e3-3e60-48c1-b6a8-2551f6b66c4f',
  }, // PT
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'f56f771a-7add-483f-abda-b53b64c0117b',
  }, // PTT
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '1d6ae985-de07-4a4b-8b88-85180a4bd0da',
  }, // INR
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
  }, // Insulin (Fasting)
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '9e986956-619a-4efb-b246-c8da030dca6f',
  }, // AST/ALT
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'ceaaaf40-8fd1-4782-a6ea-d03af6fe2cd2',
  }, // Total Bilirubin
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'c207a3bc-8259-4332-8c7e-2ff2353636d6',
  }, // Direct Bilirubin
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '976d540b-9307-4b39-b370-face1db276d3',
  }, // Indirect Bilirubin
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'c9f7a9e7-46bf-4166-9f13-61431398413f',
  }, // Gamma-GT
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '665fcfe8-e244-445e-8702-41053476a12d',
  }, // Albumin (Serum)
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '13cbaad1-2355-4070-a535-2ac65f54a2b3',
  }, // Total Protein
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '9a62ae87-a786-4eb4-8777-5476fe72bda0',
  }, // Globulin
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '2b0f9810-5505-419b-ac1c-7acb0be06a95',
  }, // Albumin/Globulin Ratio
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'e2370d06-bfdd-455a-b955-5f49c0ce8a2c',
  }, // Alk. Ph.
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
  }, // Blood Urea
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'b1cefdd9-85f2-4ec6-bb45-b8d029458dd3',
  }, // Amylase
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '125aae3c-b427-4be8-89cc-41ad8330d9bd',
  }, // Lipase
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'bf2dda8d-a81c-4395-be4e-adcfb4ee1f57',
  }, // FREE (T4)
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '3099ac6b-2fc0-4a1d-8655-3e299b2c8a52',
  }, // ESR
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'b37cb3aa-715d-490c-b5fc-72780c9b774d',
  }, // CRP
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '10a13810-fc76-43bc-8f5b-9c5bcaba033f',
  }, // RF
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '04b632b0-f71e-4c38-a2ed-0565d28be25e',
  }, // Total IgE
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '0514c610-34d2-489f-9e05-066a074f0cc7',
  }, // CL
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '9db8b4ec-0e44-4769-a7c8-1c12933293c3',
  }, // Copper
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
  }, // Zinc
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '92982467-c78e-4a73-8991-684b9f5e0e7b',
  }, // Uric acid
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // الحديد
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '1d5b2f1a-a20a-4e83-be18-6939ce8a6884',
  }, // TIBC
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '6c8a2bc8-74af-4e00-8520-d768c90fc3d2',
  }, // UIBC
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'd23694f2-58ff-4552-ba1c-aaa90cf03703',
  }, // FSH
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '3835514b-4699-48a8-98c0-31f167199183',
  }, // LH
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'd63f34b8-eb1d-445c-9bea-c2e4ba661a8b',
  }, // Prolactin
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '912a45ad-25a4-49ae-839c-95e46b8bddb4',
  }, // Occult Blood In Stool
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '8f521fb3-042d-4c2f-bc4f-d1cdc87e334a',
  }, // H. pylori Antigen in Stool
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'fa555e3d-0f6b-4394-83b5-4d4c4a2ac32e',
  }, // Calprotectin stool
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'a6194419-7dff-413b-8c10-9e1c2e77cc2e',
  }, // Stool Examination
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '2a50a58b-7a90-4936-aab0-11728105ef4e',
  }, // Urine Culture
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: 'febe1cd3-c974-4f5a-96ea-a69d6da28b68',
  }, // Stool Culture
  {
    packageId: 'b55cd7e3-596e-4c9a-b199-a36fb1188319',
    testId: '2547343b-6296-4d2f-a333-e35669577883',
  }, // KOH hair

  // ──────────────────────────────────────────────────────────────
  // Royal Women Plus (id: royal_women_plus)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '58d876ce-7726-4daa-9c9d-457dbf67e9fc',
  }, // ABO
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'eecf6d49-763f-488e-bebc-7edb0187231e',
  }, // CK (Total)
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '93b6018f-6c78-4b0b-90fb-c56a1c06677a',
  }, // CK (MB)
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'ba3168e3-3e60-48c1-b6a8-2551f6b66c4f',
  }, // PT
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'f56f771a-7add-483f-abda-b53b64c0117b',
  }, // PTT
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '1d6ae985-de07-4a4b-8b88-85180a4bd0da',
  }, // INR
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
  }, // Insulin (Fasting)
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '9e986956-619a-4efb-b246-c8da030dca6f',
  }, // AST/ALT
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'ceaaaf40-8fd1-4782-a6ea-d03af6fe2cd2',
  }, // Total Bilirubin
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'c207a3bc-8259-4332-8c7e-2ff2353636d6',
  }, // Direct Bilirubin
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '976d540b-9307-4b39-b370-face1db276d3',
  }, // Indirect Bilirubin
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'c9f7a9e7-46bf-4166-9f13-61431398413f',
  }, // Gamma-GT
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '665fcfe8-e244-445e-8702-41053476a12d',
  }, // Albumin (Serum)
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '13cbaad1-2355-4070-a535-2ac65f54a2b3',
  }, // Total Protein
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '9a62ae87-a786-4eb4-8777-5476fe72bda0',
  }, // Globulin
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '2b0f9810-5505-419b-ac1c-7acb0be06a95',
  }, // Albumin/Globulin Ratio
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'e2370d06-bfdd-455a-b955-5f49c0ce8a2c',
  }, // Alk. Ph.
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
  }, // Blood Urea
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'b1cefdd9-85f2-4ec6-bb45-b8d029458dd3',
  }, // Amylase
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '125aae3c-b427-4be8-89cc-41ad8330d9bd',
  }, // Lipase
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'bf2dda8d-a81c-4395-be4e-adcfb4ee1f57',
  }, // FREE (T4)
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '3099ac6b-2fc0-4a1d-8655-3e299b2c8a52',
  }, // ESR
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'b37cb3aa-715d-490c-b5fc-72780c9b774d',
  }, // CRP
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '10a13810-fc76-43bc-8f5b-9c5bcaba033f',
  }, // RF
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '04b632b0-f71e-4c38-a2ed-0565d28be25e',
  }, // Total IgE
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '0514c610-34d2-489f-9e05-066a074f0cc7',
  }, // CL
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '9db8b4ec-0e44-4769-a7c8-1c12933293c3',
  }, // Copper
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
  }, // Zinc
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '92982467-c78e-4a73-8991-684b9f5e0e7b',
  }, // Uric acid
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // الحديد
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '1d5b2f1a-a20a-4e83-be18-6939ce8a6884',
  }, // TIBC
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '6c8a2bc8-74af-4e00-8520-d768c90fc3d2',
  }, // UIBC
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '97848f45-1e82-4cab-83c3-7aaef0e84dc1',
  }, // CA 19.9
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '7040c7f0-9c9a-43ca-8154-d8dc08de6b0a',
  }, // CA 15.3
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'a924ca48-7f49-4199-b309-4a0eb9867942',
  }, // CA 125
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'f7364c9e-a1da-4374-b116-68053ec36374',
  }, // AFP (Alpha-Fetoprotein)
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '8a2d98f6-5aa6-4892-b9d1-4ee14b84bc10',
  }, // Carcinoembryonic Antigen
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'e913eb87-f844-4ecc-96bd-98261c9568dd',
  }, // Follicle-stimulating Hormone (FSH)
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '73e5d71e-1842-4de7-a417-7d47f6aa94a3',
  }, // Luteinizing Hormone (LH)
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'd63f34b8-eb1d-445c-9bea-c2e4ba661a8b',
  }, // Prolactin
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '6024f60b-c4ed-414c-8d5c-dad418ebd37f',
  }, // Estradiol
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'e8e68243-9d04-406d-be87-5ccb76663e8a',
  }, // AMH
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'f8e1a733-cc03-4577-813a-b319d6d579c3',
  }, // Progesterone
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '912a45ad-25a4-49ae-839c-95e46b8bddb4',
  }, // Occult Blood In Stool
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '8f521fb3-042d-4c2f-bc4f-d1cdc87e334a',
  }, // H. pylori Antigen in Stool
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'fa555e3d-0f6b-4394-83b5-4d4c4a2ac32e',
  }, // Calprotectin stool
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'a6194419-7dff-413b-8c10-9e1c2e77cc2e',
  }, // Stool Examination
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '2a50a58b-7a90-4936-aab0-11728105ef4e',
  }, // Urine Culture
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'febe1cd3-c974-4f5a-96ea-a69d6da28b68',
  }, // Stool Culture
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '2547343b-6296-4d2f-a333-e35669577883',
  }, // KOH hair
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'ac6a628c-8156-4382-bee7-07c7ccfe9600',
  }, // HIV Ag/Ab for type 1 & 2
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '93b631d6-14ed-4c4a-9797-eecf00091e0a',
  }, // HBS Antigen
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'e00bfee8-e606-4b26-9adc-ff87bfe16dd0',
  }, // Hepatitis C Virus Antibodies
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '331b952f-8b01-41e6-9a23-243b534dac16',
  }, // Herpes Simplex Virus Type 1
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '4bb6b2ac-2459-4863-8ccb-f6850d2af7f3',
  }, // Herpes Simplex Virus Type 2
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'b9922a71-92a4-44b0-b2ec-bef83e30028f',
  }, // Chlamydia trachomatis
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'de4fc80f-b9a4-4daa-b285-083c010f2c67',
  }, // Haemophilus ducreyi
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'ea1e7134-b8a4-4971-8b16-aeb327f1209b',
  }, // Mycoplasma genitalium
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'c1019715-8485-48b4-9931-97ee6e6493b1',
  }, // Trichomonas vaginalis
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'fc58bbef-93c9-4e0b-87b1-500b5098ea2e',
  }, // Mycoplasma hominis
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'b4df9889-2549-4fa4-912b-4a3cf2d67431',
  }, // Neisseria gonorrhoeae
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: '5a0bb25f-09a0-42bd-a692-c92237f0c558',
  }, // Treponema pallidum
  {
    packageId: 'a0be790b-6dcb-4373-ad7f-d80f89fee50b',
    testId: 'e860f932-11f4-4af0-957a-7f71f9d66751',
  }, // Ureaplasma urealyticum

  // ──────────────────────────────────────────────────────────────
  // Rokutan (id: spec-rokutan → slug: rokutan)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: 'c3e13eb5-449e-47fc-81b8-762f31c23ad7',
  }, // ALT/AST Ratio
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
  }, // Blood Urea
  {
    packageId: '6b901c1f-c486-4e96-95d8-940ba45b02c6',
    testId: '2cf8fc00-3fc3-46f8-b9cc-55f15b515171',
  }, // pregnancy in urine qualitative

  // ──────────────────────────────────────────────────────────────
  // Coag (id: spec-coag → slug: coag)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '4bb2b371-c212-42de-961a-706cf51a9831',
    testId: 'ba3168e3-3e60-48c1-b6a8-2551f6b66c4f',
  }, // PT
  {
    packageId: '4bb2b371-c212-42de-961a-706cf51a9831',
    testId: 'f56f771a-7add-483f-abda-b53b64c0117b',
  }, // PTT
  {
    packageId: '4bb2b371-c212-42de-961a-706cf51a9831',
    testId: '1d6ae985-de07-4a4b-8b88-85180a4bd0da',
  }, // INR
  {
    packageId: '4bb2b371-c212-42de-961a-706cf51a9831',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC

  // ──────────────────────────────────────────────────────────────
  // Bones (id: spec-bones → slug: bones)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'e21a0bb3-2823-4ca9-8406-417f6ed2f8b5',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: 'e21a0bb3-2823-4ca9-8406-417f6ed2f8b5',
    testId: 'e4506f21-c9dc-4577-abe5-7e572483b9f6',
  }, // Ph
  {
    packageId: 'e21a0bb3-2823-4ca9-8406-417f6ed2f8b5',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: 'e21a0bb3-2823-4ca9-8406-417f6ed2f8b5',
    testId: 'e2370d06-bfdd-455a-b955-5f49c0ce8a2c',
  }, // Alk. Ph.
  {
    packageId: 'e21a0bb3-2823-4ca9-8406-417f6ed2f8b5',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: 'e21a0bb3-2823-4ca9-8406-417f6ed2f8b5',
    testId: '10a13810-fc76-43bc-8f5b-9c5bcaba033f',
  }, // RF
  {
    packageId: 'e21a0bb3-2823-4ca9-8406-417f6ed2f8b5',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D

  // ──────────────────────────────────────────────────────────────
  // Kidney (id: spec-kidney → slug: kidney)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'a716b690-8ce3-4ada-a49c-9d9978ab0ed1',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: 'a716b690-8ce3-4ada-a49c-9d9978ab0ed1',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: 'a716b690-8ce3-4ada-a49c-9d9978ab0ed1',
    testId: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
  }, // Blood Urea
  {
    packageId: 'a716b690-8ce3-4ada-a49c-9d9978ab0ed1',
    testId: '92982467-c78e-4a73-8991-684b9f5e0e7b',
  }, // Uric acid
  {
    packageId: 'a716b690-8ce3-4ada-a49c-9d9978ab0ed1',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination

  // ──────────────────────────────────────────────────────────────
  // Liver (id: spec-liver → slug: liver)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: 'c9f7a9e7-46bf-4166-9f13-61431398413f',
  }, // Gamma-GT
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: 'c3e13eb5-449e-47fc-81b8-762f31c23ad7',
  }, // ALT/AST Ratio
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: 'ceaaaf40-8fd1-4782-a6ea-d03af6fe2cd2',
  }, // Total Bilirubin
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: 'c207a3bc-8259-4332-8c7e-2ff2353636d6',
  }, // Direct Bilirubin
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: '976d540b-9307-4b39-b370-face1db276d3',
  }, // Indirect Bilirubin
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: '13cbaad1-2355-4070-a535-2ac65f54a2b3',
  }, // Total Protein
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: '9a62ae87-a786-4eb4-8777-5476fe72bda0',
  }, // Globulin
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: '665fcfe8-e244-445e-8702-41053476a12d',
  }, // Albumin (Serum)
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: '2b0f9810-5505-419b-ac1c-7acb0be06a95',
  }, // Albumin/Globulin Ratio
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: 'e2370d06-bfdd-455a-b955-5f49c0ce8a2c',
  }, // Alk. Ph.
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: 'ba3168e3-3e60-48c1-b6a8-2551f6b66c4f',
  }, // PT
  {
    packageId: 'c5743bef-c0d2-4141-bbab-83aa84eb4401',
    testId: 'f56f771a-7add-483f-abda-b53b64c0117b',
  }, // PTT

  // ──────────────────────────────────────────────────────────────
  // Diabetes (id: spec-diabetes → slug: diabetes)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '67359463-d741-4f11-ab3d-eb3b72d468ce',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: '67359463-d741-4f11-ab3d-eb3b72d468ce',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: '67359463-d741-4f11-ab3d-eb3b72d468ce',
    testId: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
  }, // Insulin (Fasting)
  {
    packageId: '67359463-d741-4f11-ab3d-eb3b72d468ce',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: '67359463-d741-4f11-ab3d-eb3b72d468ce',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC

  // ──────────────────────────────────────────────────────────────
  // Thyroid (id: spec-thyroid → slug: thyroid)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '6f850be8-8ec1-46fd-82dd-eefef54f9381',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: '6f850be8-8ec1-46fd-82dd-eefef54f9381',
    testId: 'bf2dda8d-a81c-4395-be4e-adcfb4ee1f57',
  }, // FREE (T3)
  {
    packageId: '6f850be8-8ec1-46fd-82dd-eefef54f9381',
    testId: '2357ab7d-437c-48ec-88e7-44fae061439e',
  }, // FREE (T4)
  {
    packageId: '6f850be8-8ec1-46fd-82dd-eefef54f9381',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC

  // ──────────────────────────────────────────────────────────────
  // Anemia (id: spec-anemia → slug: anemia)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '0354db6d-ddbe-4baa-b8e0-1877644fcae5',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // Iron Total
  {
    packageId: '0354db6d-ddbe-4baa-b8e0-1877644fcae5',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: '0354db6d-ddbe-4baa-b8e0-1877644fcae5',
    testId: '6c8a2bc8-74af-4e00-8520-d768c90fc3d2',
  }, // UIBC
  {
    packageId: '0354db6d-ddbe-4baa-b8e0-1877644fcae5',
    testId: '1d5b2f1a-a20a-4e83-be18-6939ce8a6884',
  }, // TIBC
  {
    packageId: '0354db6d-ddbe-4baa-b8e0-1877644fcae5',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '0354db6d-ddbe-4baa-b8e0-1877644fcae5',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: '0354db6d-ddbe-4baa-b8e0-1877644fcae5',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12

  // ──────────────────────────────────────────────────────────────
  // Vitamins Basic (id: spec-vitamins-basic → slug: vitamins-basic)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'c22474e6-131b-4770-bb70-9e12d9879977',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: 'c22474e6-131b-4770-bb70-9e12d9879977',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: 'c22474e6-131b-4770-bb70-9e12d9879977',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: 'c22474e6-131b-4770-bb70-9e12d9879977',
    testId: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
  }, // Zinc
  {
    packageId: 'c22474e6-131b-4770-bb70-9e12d9879977',
    testId: '9db8b4ec-0e44-4769-a7c8-1c12933293c3',
  }, // Copper

  // ──────────────────────────────────────────────────────────────
  // Children (id: spec-children → slug: children)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
  }, // Blood Urea
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: 'c3e13eb5-449e-47fc-81b8-762f31c23ad7',
  }, // ALT/AST Ratio
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // Iron Total
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination
  {
    packageId: 'e31a2768-fbb0-420b-ba5a-c7af4134eba6',
    testId: 'a6194419-7dff-413b-8c10-9e1c2e77cc2e',
  }, // Stool Examination

  // ──────────────────────────────────────────────────────────────
  // BP (id: spec-bp → slug: bp)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: 'eecf6d49-763f-488e-bebc-7edb0187231e',
  }, // CK (Total)
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: 'c3e13eb5-449e-47fc-81b8-762f31c23ad7',
  }, // ALT/AST Ratio
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: '5d3f975d-49b4-49ce-b6d1-b9720587bd38',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC

  // ──────────────────────────────────────────────────────────────
  // Pool (id: spec-pool → slug: pool)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '4122baa1-1eec-4e75-9fc5-6fda2e0f0108',
    testId: 'ac6a628c-8156-4382-bee7-07c7ccfe9600',
  }, // HIV Ag/Ab for type 1 & 2
  {
    packageId: '4122baa1-1eec-4e75-9fc5-6fda2e0f0108',
    testId: '93b631d6-14ed-4c4a-9797-eecf00091e0a',
  }, // HBS Antigen
  {
    packageId: '4122baa1-1eec-4e75-9fc5-6fda2e0f0108',
    testId: 'e00bfee8-e606-4b26-9adc-ff87bfe16dd0',
  }, // Hepatitis C Virus Antibodies
  {
    packageId: '4122baa1-1eec-4e75-9fc5-6fda2e0f0108',
    testId: '5a0bb25f-09a0-42bd-a692-c92237f0c558',
  }, // Treponema pallidum
  {
    packageId: '4122baa1-1eec-4e75-9fc5-6fda2e0f0108',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination

  // ──────────────────────────────────────────────────────────────
  // Hair (id: spec-hair → slug: hair)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // Iron Total
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
  }, // Zinc
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: '9db8b4ec-0e44-4769-a7c8-1c12933293c3',
  }, // Copper
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: '6f257201-e1d3-46fa-b57a-059c21686936',
    testId: '2547343b-6296-4d2f-a333-e35669577883',
  }, // KOH hair

  // ──────────────────────────────────────────────────────────────
  // Migraine (id: spec-migraine → slug: migraine)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: 'b37cb3aa-715d-490c-b5fc-72780c9b774d',
  }, // CRP
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: '3099ac6b-2fc0-4a1d-8655-3e299b2c8a52',
  }, // ESR
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: 'a6e29f69-c67d-4d57-8972-191eb7d0546d',
  }, // Blood Urea
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: 'c3e13eb5-449e-47fc-81b8-762f31c23ad7',
  }, // ALT/AST Ratio
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: '92982467-c78e-4a73-8991-684b9f5e0e7b',
  }, // Uric acid
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: 'bf2dda8d-a81c-4395-be4e-adcfb4ee1f57',
  }, // FREE (T4)
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: 'bf2dda8d-a81c-4395-be4e-adcfb4ee1f57',
  }, // FREE (T3)  [duplicate in list but same test]
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination
  {
    packageId: 'ffc6f530-46ff-44f9-be00-2b7daa4cbf9b',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC

  // Allergy packages have empty tests → no entries

  // ──────────────────────────────────────────────────────────────
  // PCOS (id: spec-pcos → slug: pcos)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '8e7d1905-288b-41ca-8005-aef33a13fa40',
    testId: 'd23694f2-58ff-4552-ba1c-aaa90cf03703',
  }, // FSH
  {
    packageId: '8e7d1905-288b-41ca-8005-aef33a13fa40',
    testId: '3835514b-4699-48a8-98c0-31f167199183',
  }, // LH
  {
    packageId: '8e7d1905-288b-41ca-8005-aef33a13fa40',
    testId: 'ceaf87e9-d671-4591-b14c-9a3432024d36',
  }, // Testosterone Total
  {
    packageId: '8e7d1905-288b-41ca-8005-aef33a13fa40',
    testId: 'fb49df26-1463-4ce0-9798-53d30a69791c',
  }, // DHEA-S
  {
    packageId: '8e7d1905-288b-41ca-8005-aef33a13fa40',
    testId: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
  }, // Insulin (Fasting)
  {
    packageId: '8e7d1905-288b-41ca-8005-aef33a13fa40',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: '8e7d1905-288b-41ca-8005-aef33a13fa40',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: '8e7d1905-288b-41ca-8005-aef33a13fa40',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH

  // ──────────────────────────────────────────────────────────────
  // Digestive (id: spec-digestive → slug: digestive)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'c1921bc8-5ccb-4acd-8946-c7a095cf7ad4',
    testId: 'a6194419-7dff-413b-8c10-9e1c2e77cc2e',
  }, // Stool Examination
  {
    packageId: 'c1921bc8-5ccb-4acd-8946-c7a095cf7ad4',
    testId: 'febe1cd3-c974-4f5a-96ea-a69d6da28b68',
  }, // Stool Culture
  {
    packageId: 'c1921bc8-5ccb-4acd-8946-c7a095cf7ad4',
    testId: '912a45ad-25a4-49ae-839c-95e46b8bddb4',
  }, // Occult Blood In Stool
  {
    packageId: 'c1921bc8-5ccb-4acd-8946-c7a095cf7ad4',
    testId: '8f521fb3-042d-4c2f-bc4f-d1cdc87e334a',
  }, // H. pylori Antigen in Stool
  {
    packageId: 'c1921bc8-5ccb-4acd-8946-c7a095cf7ad4',
    testId: 'fa555e3d-0f6b-4394-83b5-4d4c4a2ac32e',
  }, // Calprotectin stool
  {
    packageId: 'c1921bc8-5ccb-4acd-8946-c7a095cf7ad4',
    testId: '8a2d98f6-5aa6-4892-b9d1-4ee14b84bc10',
  }, // Carcinoembryonic Antigen
  {
    packageId: 'c1921bc8-5ccb-4acd-8946-c7a095cf7ad4',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12

  // ──────────────────────────────────────────────────────────────
  // Obesity (id: spec-obesity → slug: obesity)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
  }, // Insulin (Fasting)
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: 'c3e13eb5-449e-47fc-81b8-762f31c23ad7',
  }, // ALT/AST Ratio
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: 'aac884db-a9bc-43fa-9ee8-c0f600aa3342',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin

  // ──────────────────────────────────────────────────────────────
  // Fatigue (id: spec-fatigue → slug: fatigue)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // Iron Total
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
  }, // Zinc
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '9db8b4ec-0e44-4769-a7c8-1c12933293c3',
  }, // Copper
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: 'd419ebfe-5795-4659-9a09-6cc0aaab4e08',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C

  // ──────────────────────────────────────────────────────────────
  // Male Fertility (id: spec-male-fertility → slug: male-fertility)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'eb45c2cf-5c5e-4c57-acac-21c1f211d2a8',
    testId: 'ceaf87e9-d671-4591-b14c-9a3432024d36',
  }, // Testosterone Total
  {
    packageId: 'eb45c2cf-5c5e-4c57-acac-21c1f211d2a8',
    testId: '50e3f7f8-90c1-430d-a228-ebd172bfcc76',
  }, // Testosterone Free
  {
    packageId: 'eb45c2cf-5c5e-4c57-acac-21c1f211d2a8',
    testId: 'd23694f2-58ff-4552-ba1c-aaa90cf03703',
  }, // FSH
  {
    packageId: 'eb45c2cf-5c5e-4c57-acac-21c1f211d2a8',
    testId: '3835514b-4699-48a8-98c0-31f167199183',
  }, // LH
  {
    packageId: 'eb45c2cf-5c5e-4c57-acac-21c1f211d2a8',
    testId: 'd63f34b8-eb1d-445c-9bea-c2e4ba661a8b',
  }, // Prolactin
  // Semen Analysis / Semen Culture not present in TESTS → skipped

  // ──────────────────────────────────────────────────────────────
  // Pre-op (id: spec-pre-op → slug: pre-op)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: 'ba3168e3-3e60-48c1-b6a8-2551f6b66c4f',
  }, // PT
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: 'f56f771a-7add-483f-abda-b53b64c0117b',
  }, // PTT
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: '58d876ce-7726-4daa-9c9d-457dbf67e9fc',
  }, // ABO
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: 'ac6a628c-8156-4382-bee7-07c7ccfe9600',
  }, // HIV Ag/Ab for type 1 & 2
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: '93b631d6-14ed-4c4a-9797-eecf00091e0a',
  }, // HBS Antigen
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: 'e00bfee8-e606-4b26-9adc-ff87bfe16dd0',
  }, // Hepatitis C Virus Antibodies
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: '703d35f5-cce6-4bf1-aa9c-ee506c4ca4d4',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT

  // ──────────────────────────────────────────────────────────────
  // Gluten (id: spec-gluten → slug: gluten)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '6b7e46b4-35ed-41c1-8027-922f35b2b98f',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '6b7e46b4-35ed-41c1-8027-922f35b2b98f',
    testId: 'b37cb3aa-715d-490c-b5fc-72780c9b774d',
  }, // CRP
  {
    packageId: '6b7e46b4-35ed-41c1-8027-922f35b2b98f',
    testId: '3099ac6b-2fc0-4a1d-8655-3e299b2c8a52',
  }, // ESR
  // tTG-IgA / tTG-IgG not present in TESTS → skipped

  // ──────────────────────────────────────────────────────────────
  // Sleeve (id: spec-sleeve → slug: sleeve)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: 'c3e13eb5-449e-47fc-81b8-762f31c23ad7',
  }, // ALT/AST Ratio
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '92982467-c78e-4a73-8991-684b9f5e0e7b',
  }, // Uric acid
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '0514c610-34d2-489f-9e05-066a074f0cc7',
  }, // CL
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: '28e3eb69-d8b6-4647-8e36-0c144ec774e6',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12

  // ──────────────────────────────────────────────────────────────
  // Female Fertility (id: spec-female-fertility → slug: female-fertility)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: '6024f60b-c4ed-414c-8d5c-dad418ebd37f',
  }, // Estradiol
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: 'd63f34b8-eb1d-445c-9bea-c2e4ba661a8b',
  }, // Prolactin
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: 'e913eb87-f844-4ecc-96bd-98261c9568dd',
  }, // Follicle-stimulating Hormone (FSH)
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: '73e5d71e-1842-4de7-a417-7d47f6aa94a3',
  }, // Luteinizing Hormone (LH)
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: 'e8e68243-9d04-406d-be87-5ccb76663e8a',
  }, // AMH
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: 'f8e1a733-cc03-4577-813a-b319d6d579c3',
  }, // Progesterone
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
  }, // Insulin (Fasting)
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: 'fa5cf564-fb76-4fa2-a68b-78a186eabe9c',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination

  // ──────────────────────────────────────────────────────────────
  // Vitamins Advanced (id: spec-vitamins-adv → slug: vitamins-advanced)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: 'd1f3bcad-7f3a-47f3-aca7-1fe55ce789b6',
  }, // Na
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '77fbce9b-b203-4886-9972-5953f6a0bcdd',
  }, // K
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '9db8b4ec-0e44-4769-a7c8-1c12933293c3',
  }, // Copper
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
  }, // Zinc
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '0514c610-34d2-489f-9e05-066a074f0cc7',
  }, // CL
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: 'e4506f21-c9dc-4577-abe5-7e572483b9f6',
  }, // Ph
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // Iron Total
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: 'afa2b154-5bac-4378-86fb-c26ddb7c49e6',
    testId: '1d5b2f1a-a20a-4e83-be18-6939ce8a6884',
  }, // TIBC

  // ──────────────────────────────────────────────────────────────
  // STD PCR (id: std-pcr → slug: std-pcr)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'c7c9d4b4-ae7e-423e-9d85-4e0f4ef9aa0d',
    testId: 'b9922a71-92a4-44b0-b2ec-bef83e30028f',
  }, // Chlamydia trachomatis
  {
    packageId: 'c7c9d4b4-ae7e-423e-9d85-4e0f4ef9aa0d',
    testId: 'b4df9889-2549-4fa4-912b-4a3cf2d67431',
  }, // Neisseria gonorrhoeae
  {
    packageId: 'c7c9d4b4-ae7e-423e-9d85-4e0f4ef9aa0d',
    testId: 'ea1e7134-b8a4-4971-8b16-aeb327f1209b',
  }, // Mycoplasma genitalium
  {
    packageId: 'c7c9d4b4-ae7e-423e-9d85-4e0f4ef9aa0d',
    testId: 'fc58bbef-93c9-4e0b-87b1-500b5098ea2e',
  }, // Mycoplasma hominis
  {
    packageId: 'c7c9d4b4-ae7e-423e-9d85-4e0f4ef9aa0d',
    testId: 'e860f932-11f4-4af0-957a-7f71f9d66751',
  }, // Ureaplasma urealyticum
  {
    packageId: 'c7c9d4b4-ae7e-423e-9d85-4e0f4ef9aa0d',
    testId: 'c1019715-8485-48b4-9931-97ee6e6493b1',
  }, // Trichomonas vaginalis
  {
    packageId: 'c7c9d4b4-ae7e-423e-9d85-4e0f4ef9aa0d',
    testId: '331b952f-8b01-41e6-9a23-243b534dac16',
  }, // Herpes Simplex Virus Type 1
  {
    packageId: 'c7c9d4b4-ae7e-423e-9d85-4e0f4ef9aa0d',
    testId: '4bb6b2ac-2459-4863-8ccb-f6850d2af7f3',
  }, // Herpes Simplex Virus Type 2

  // ──────────────────────────────────────────────────────────────
  // Beauty (id: spec-beauty → slug: beauty)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '21d1b5cb-adae-4cdb-bc6d-2a2cea0f7c06',
  }, // AST
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '3ca2366c-fb16-49dd-a562-20252d39dfb2',
  }, // ALT
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: 'c3e13eb5-449e-47fc-81b8-762f31c23ad7',
  }, // ALT/AST Ratio
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // Iron Total
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '5eb17a87-e224-40b7-8b09-f68ca07d1a39',
  }, // Zinc
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '9ae30c2d-1055-4545-8e3a-03f795bf567e',
  }, // Ca
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '1d2740e9-f28a-403e-b5f8-b786eec02220',
  }, // Mg
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: 'e4506f21-c9dc-4577-abe5-7e572483b9f6',
  }, // Ph
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '9db8b4ec-0e44-4769-a7c8-1c12933293c3',
  }, // Copper
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '3077438e-12d3-4e39-bc44-56054b1e1245',
  }, // CHOL
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: 'd9b6e7fa-0dcb-4a1a-834c-b719fbd4d728',
  }, // TG
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '4ef41c43-d770-4692-aff2-3183cf94e6e5',
  }, // HDL
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '15cd6542-8798-4fc0-a536-913055c9cdb0',
  }, // LDL
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '7e432ab6-cf42-4f56-8999-58715dc069a2',
  }, // VLDL
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: 'ec4efc05-b0bc-4279-b07e-ff43d6437a7b',
  }, // CHOL/HDL
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: 'aea0cb32-6cd9-4c8f-94b8-db4e4d3fb409',
  }, // HDL/LDL
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '8255ed96-95e5-4a50-867f-4ba2ac083422',
  }, // CHOL/TG
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '185562e4-60e4-4357-a7ad-7e58a0d983a2',
  }, // Insulin (Fasting)
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: 'e9b59c41-ae6b-4be7-9dc1-f0d6473ff952',
  }, // HOMA-IR
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: 'b2d6f406-db2e-4dba-824f-ddfabcbdbebb',
  }, // Creatinine (Serum)
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '98fb5530-912d-48ea-9188-c5734514c81f',
  }, // eGFR
  {
    packageId: 'b1dbc38b-33c9-474d-9532-cbf00cc172e1',
    testId: '2547343b-6296-4d2f-a333-e35669577883',
  }, // KOH hair

  // ──────────────────────────────────────────────────────────────
  // Marriage (id: spec-marriage → slug: marriage-test) → empty tests
  // ──────────────────────────────────────────────────────────────
  // No entries

  // ──────────────────────────────────────────────────────────────
  // Pregnancy (id: spec-pregnancy → slug: pregnancy)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: '2b2c5eec-f59e-4133-bd6b-3e4dcce0e72c',
  }, // TSH
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: '887a8cbc-64dd-4083-8247-e9581159245b',
  }, // CBC
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: '6e36a34c-1d29-42fc-a3da-335967022f9d',
  }, // Iron Total
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: '00e9ba78-e285-40a1-a868-82d9a0d80144',
  }, // Ferritin
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: '87ee16ee-d681-4b63-9c94-d3a5ae2cacca',
  }, // HbA1C
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: '48120a4e-386d-474d-8109-0cc875d64745',
  }, // Fasting Blood Glucose
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: 'c2a04a5e-d68a-44c7-8a1d-6d03122cd708',
  }, // Vitamin B12
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: '09e5d115-6ea4-4a50-82c0-0aa601a8ef6c',
  }, // Folate (vitamin B9)
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: '7c2500e0-355c-4264-b6d6-53057684680c',
  }, // Vitamin D
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: 'a76f843a-8c6a-4f4b-bedd-7b09ce8c7eed',
  }, // Urine Examination
  {
    packageId: '50e96733-acc0-4797-9230-5edbec345780',
    testId: '2a50a58b-7a90-4936-aab0-11728105ef4e',
  }, // Urine Culture
  // Toxoplasma IgM / IgG / Rubella IgG not present in TESTS → skipped

  // ──────────────────────────────────────────────────────────────
  // STD Comprehensive (id: std-comprehensive → slug: std-comprehensive)
  // ──────────────────────────────────────────────────────────────
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: 'ac6a628c-8156-4382-bee7-07c7ccfe9600',
  }, // HIV Ag/Ab for type 1 & 2
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: '93b631d6-14ed-4c4a-9797-eecf00091e0a',
  }, // HBS Antigen
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: 'e00bfee8-e606-4b26-9adc-ff87bfe16dd0',
  }, // Hepatitis C Virus Antibodies
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: '331b952f-8b01-41e6-9a23-243b534dac16',
  }, // Herpes Simplex Virus Type 1
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: '4bb6b2ac-2459-4863-8ccb-f6850d2af7f3',
  }, // Herpes Simplex Virus Type 2
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: '5a0bb25f-09a0-42bd-a692-c92237f0c558',
  }, // Treponema pallidum
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: 'b9922a71-92a4-44b0-b2ec-bef83e30028f',
  }, // Chlamydia trachomatis
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: 'b4df9889-2549-4fa4-912b-4a3cf2d67431',
  }, // Neisseria gonorrhoeae
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: 'ea1e7134-b8a4-4971-8b16-aeb327f1209b',
  }, // Mycoplasma genitalium
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: 'fc58bbef-93c9-4e0b-87b1-500b5098ea2e',
  }, // Mycoplasma hominis
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: 'e860f932-11f4-4af0-957a-7f71f9d66751',
  }, // Ureaplasma urealyticum
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: 'c1019715-8485-48b4-9931-97ee6e6493b1',
  }, // Trichomonas vaginalis
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: 'de4fc80f-b9a4-4daa-b285-083c010f2c67',
  }, // Haemophilus ducreyi
  {
    packageId: '1097d9ce-e683-44a7-9e75-804edca8f2b8',
    testId: '3dbb1204-9687-4d9d-82d4-21f9e02bd94f',
  }, // STI PCR
]
