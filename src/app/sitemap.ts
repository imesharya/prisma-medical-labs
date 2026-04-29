import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://prismalaboratory.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/packages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/home-visit`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/consultation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/prisma-ai`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Fetch dynamic package types
  const { docs: packageTypes } = await payload.find({
    collection: 'package-types',
    where: { isActive: { equals: true } },
    limit: 1000,
    select: {
      slug: true,
      updatedAt: true,
    },
  })

  const packageTypeRoutes: MetadataRoute.Sitemap = packageTypes.map((pt) => ({
    url: `${BASE_URL}/packages/${pt.slug}`,
    lastModified: pt.updatedAt ? new Date(pt.updatedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Fetch dynamic blog posts
  const { docs: blogPosts } = await payload.find({
    collection: 'blog-posts',
    where: { status: { equals: 'published' } },
    limit: 1000,
    select: {
      slug: true,
      updatedAt: true,
    },
  })

  const blogPostRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...packageTypeRoutes, ...blogPostRoutes]
}
