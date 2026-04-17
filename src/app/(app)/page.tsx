import BlogTeaser from '@/components/BlogTeaser'
import ContactForm from '@/components/ContactForm'
import PackageTypes from '@/components/FeaturedPackages'
import Hero from '@/components/Hero'
import HomeVisitCTA from '@/components/HomeVisitCTA'
import Metrics from '@/components/Metrics'

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      <Hero />
      <Metrics />
      <PackageTypes />
      <HomeVisitCTA />
      <BlogTeaser />
      <ContactForm />
    </div>
  )
}
