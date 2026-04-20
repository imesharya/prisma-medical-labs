import BlogTeaser from '@/components/homepage/BlogTeaser'
import ContactForm from '@/components/homepage/ContactForm'
import PackageTypes from '@/components/homepage/FeaturedPackages'
import Hero from '@/components/homepage/Hero'
import HomeVisitCTA from '@/components/homepage/HomeVisitCTA'
import Metrics from '@/components/homepage/Metrics'
import { getPayload } from 'payload'
import config from '@payload-config'
import { BlogPost } from '@/payload-types'
import { Suspense } from 'react'

type PopulatedBlogPost = Populated<BlogPost, 1>

export default async function Home() {
  const payload = await getPayload({ config })
  const { docs: posts } = (await payload.find({ collection: 'blog-posts' })) as {
    docs: PopulatedBlogPost[]
  }

  return (
    <div className="flex flex-col w-full relative">
      <Hero />
      <Metrics />
      <PackageTypes />
      <HomeVisitCTA />
      <Suspense>
        <BlogTeaser posts={posts} />
      </Suspense>
      <ContactForm />
    </div>
  )
}
