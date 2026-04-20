import { calculateReadTime } from '@/lib/calculateReadTime'
import { BlogPost } from '@/payload-types'
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type PopulatedBlogPost = Populated<BlogPost, 1>

const BlogCard = ({ post }: { post: PopulatedBlogPost }) => {
  const publishDate = post.publishedAt ? new Date(post.publishedAt) : null

  const formattedDate = publishDate
    ? publishDate.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''
  const readTime = calculateReadTime(post.content || post.excerpt || '')

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group flex flex-col h-full bg-card hover:bg-card/80 border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        {/* Featured Image */}
        {post.featuredImage?.url && (
          <div className="relative w-full h-48 overflow-hidden bg-muted">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {post.category && (
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center rounded-full bg-primary/90 backdrop-blur px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {post.category.name}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col grow p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 text-balance">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 grow line-clamp-2">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 2).map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {item.tag}
                </span>
              ))}
            </div>
          )}

          {/* Metadata */}
          <div className="flex items-center gap-4 pt-4 border-t border-border/50 text-xs text-muted-foreground">
            {post.author ? (
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>{post.author}</span>
              </div>
            ) : null}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={post.publishedAt ?? undefined}>{formattedDate}</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {/* CTA Arrow */}
        <div className="px-6 pb-4 pt-0">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
            اقرأ المزيد
            <ArrowLeft className="w-4 h-4" />
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard
