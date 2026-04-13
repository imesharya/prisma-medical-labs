'use client'

import { useState } from 'react'
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  thumbnail: string
  slug: string
}

interface BlogTeaserProps {
  posts?: BlogPost[]
  onViewAllClick?: () => void
}

const defaultPosts: BlogPost[] = []

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="group flex-shrink-0 w-full sm:w-96 bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Category Badge */}
        <div className="inline-flex w-fit">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground line-clamp-2">{post.title}</h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{post.excerpt}</p>
      </div>
    </div>
  )
}

const BlogTeaser = ({ posts = defaultPosts, onViewAllClick }: BlogTeaserProps) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('blog-carousel')
    if (container) {
      const scrollAmount = 400
      const newPosition =
        direction === 'left'
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount

      container.scrollLeft = newPosition
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">المدونة الطبية</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance max-w-3xl">
            مقالات صحية موثوقة
          </h2>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            معلومات طبية دقيقة من فريق بريزما — لأن صحتك تستحق معرفة أعمق
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Carousel Container */}
          <div
            id="blog-carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary/20 [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => handleScroll('right')}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleScroll('left')}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>

            {/* View All CTA */}
            <button
              onClick={onViewAllClick}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-primary hover:text-primary/80 transition-colors duration-300"
            >
              تصفّح جميع المقالات
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogTeaser
