type PackageType = {
  id: string
  name: string
  slug: string
  description?: string
  icon?: string
  badgeColor?: string
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
  packageTypeId?: string
  packageCategoryId?: string
  name: string
  slug: string
  description?: string
  price: double
  discountedPrice?: double
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
  testCategoryId?: string
  name: string
  slug: string
  description?: string
  price: double
  badge?: string
  individualSale: boolean
  thumbnailUrl?: string
  isActive?: boolean
}

type PackageTest = {
  packageId: string
  testId: string
}
