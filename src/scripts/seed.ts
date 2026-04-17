import { SanitizedConfig } from 'payload'
import {
  PACKAGE_TYPES,
  PACKAGE_CATEGORIES,
  PACKAGES,
  TEST_CATEGORIES,
  TESTS,
  PACKAGE_TESTS,
} from './data' // ← your data.ts file
import payload from 'payload'

export const script = async (config: SanitizedConfig) => {
  await payload.init({ config })
  payload.logger.info('Starting seed...')

  // 1. Storage for ID mappings
  const categoryMap: Record<string, string> = {}
  const testMap: Record<string, string> = {}
  const packageTypeMap: Record<string, string> = {}
  const packageCategoryMap: Record<string, string> = {}

  // 2. Seed Test Categories
  for (const cat of TEST_CATEGORIES) {
    const doc = await payload.create({
      collection: 'test-categories',
      data: cat,
      overrideAccess: true,
    })
    categoryMap[cat.id] = doc.id // Store the mapping
  }

  // 3. Seed Tests
  for (const test of TESTS) {
    const doc = await payload.create({
      collection: 'tests',
      data: {
        ...test,
        testCategory: categoryMap[test.testCategoryId], // Resolve the foreign key
      },
      overrideAccess: true,
    })
    testMap[test.id] = doc.id
  }

  // 4. Seed Package Types
  for (const type of PACKAGE_TYPES) {
    const doc = await payload.create({
      collection: 'package-types',
      data: { ...type, thumbnail: null },
      overrideAccess: true,
    })
    packageTypeMap[type.id] = doc.id
  }

  // 5. Seed Package Categories
  for (const cat of PACKAGE_CATEGORIES) {
    const doc = await payload.create({
      collection: 'package-categories',
      data: cat,
      overrideAccess: true,
    })
    packageCategoryMap[cat.id] = doc.id
  }

  // 6. Seed Packages + Many-to-Many Linking
  const testsByPackage = new Map<string, string[]>()
  for (const pt of PACKAGE_TESTS) {
    if (!testsByPackage.has(pt.packageId)) {
      testsByPackage.set(pt.packageId, [])
    }
    // Map the old testId to the new DB testId
    const newTestId = testMap[pt.testId]
    if (newTestId) testsByPackage.get(pt.packageId)!.push(newTestId)
  }

  for (const pkg of PACKAGES) {
    const newTestIds = testsByPackage.get(pkg.id) || []

    await payload.create({
      collection: 'packages',
      data: {
        ...pkg,
        thumbnail: null,
        tests: newTestIds,
        packageType: packageTypeMap[pkg.packageTypeId],
        ...(pkg.packageCategoryId && {
          packageCategory: packageCategoryMap[pkg.packageCategoryId],
        }),
      },
      overrideAccess: true,
    })
  }

  payload.logger.info('✅ Seed completed successfully!')
  process.exit(0)
}
