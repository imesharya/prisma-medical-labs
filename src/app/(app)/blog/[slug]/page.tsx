import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Metadata } from 'next'
import { BlogPost } from '@/payload-types'
import Image from 'next/image'
import { Bookmark, Calendar, Clock, Tag, User } from 'lucide-react'
import RichText from '@/components/RichText'
import { calculateReadTime } from '@/lib/calculateReadTime'
import Link from 'next/link'

type PopulatedBlogPost = Populated<BlogPost, 2>
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'blog-posts',
    where: { slug: { equals: decodeURIComponent(slug) }, status: { equals: 'published' } },
    limit: 1,
    depth: 1,
  })

  const post = result.docs[0] as PopulatedBlogPost
  if (!post) return {}

  const title = post.meta?.metaTitle ?? post.title
  const description = post.meta?.metaDescription ?? post.excerpt ?? undefined
  const imageUrl = post.meta?.metaImage?.url ?? post.featuredImage?.url ?? undefined
  const imageAlt = post.meta?.metaImage?.alt ?? post.featuredImage?.alt ?? post.title

  const images = imageUrl
    ? [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ]
    : undefined

  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/blog/${slug}`

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt ?? undefined,
      authors: post.author ? [post.author] : [],
      images,
      url,
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'blog-posts',
    where: { slug: { equals: decodeURIComponent(slug) }, status: { equals: 'published' } },
    limit: 1,
    depth: 2,
  })

  const post = result.docs[0] as PopulatedBlogPost | undefined
  if (!post) notFound()

  const { docs: relatedPosts } = (await payload.find({
    collection: 'blog-posts',
    where: {
      category: { equals: post.category },
      id: { not_equals: post.id },
    },
    limit: 3,
  })) as { docs: PopulatedBlogPost[] }

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
    <article className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative w-full h-125 overflow-hidden bg-muted">
        {post.featuredImage?.url && (
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt || post.title}
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative -mt-24 mx-auto max-w-3xl">
        {/* Category Badge */}
        {post.category && (
          <div className="mb-4 flex items-center gap-2 px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
              {post.category.name}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance px-4 sm:px-6 lg:px-8">
          {post.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-6 border-b border-border px-4 sm:px-6 lg:px-8">
          {/* Author */}
          {post.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground font-medium">{post.author}</span>
            </div>
          )}

          {/* Publish Date */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <time
              dateTime={post.publishedAt ?? undefined}
              className="text-sm text-foreground font-medium"
            >
              {formattedDate}
            </time>
          </div>

          {/* Read Time (optional) */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground font-medium">{readTime}</span>
          </div>
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed px-4 sm:px-6 lg:px-8">
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2 px-4 sm:px-6 lg:px-8">
            {post.tags.map((item, index) => (
              <a
                key={index}
                href={`/blog/tags/${item.tag?.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
              >
                <Tag className="w-3 h-3" />
                {item.tag}
              </a>
            ))}
          </div>
        )}

        {/* Post Content */}
        <div className="mt-12 prose prose-lg max-w-none">
          {/* Your actual post content goes here */}
          <div className="bg-card text-card-foreground md:rounded-lg p-8 border border-border">
            <RichText className="prose-custom" data={post.content} />
          </div>
        </div>

        {/* FAQ Section */}
        {post.faq && post.faq.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-foreground">الأسئلة الشائعة</h2>
            <div className="space-y-4">
              {post.faq.map((item, index) => (
                <details
                  key={index}
                  className="group border border-border rounded-lg p-4 cursor-pointer hover:bg-accent/5 transition-colors"
                >
                  <summary className="flex items-center justify-between font-semibold text-foreground">
                    {item.question}
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="mt-16 py-16 border-t border-border px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground">مقالات ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => {
              const relatedReadTime = calculateReadTime(
                relatedPost.content || relatedPost.excerpt || '',
              )
              const publishDate = relatedPost.publishedAt ? new Date(relatedPost.publishedAt) : null
              const relatedDate = publishDate
                ? publishDate.toLocaleDateString('ar-SA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : ''

              return (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block h-full"
                >
                  <div className="flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
                    {/* Featured Image */}
                    {relatedPost.featuredImage?.url && (
                      <div className="relative w-full aspect-video overflow-hidden bg-muted">
                        <Image
                          src={relatedPost.featuredImage.url}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5">
                      {/* Category Badge */}
                      {relatedPost.category && (
                        <div className="mb-3 inline-flex w-fit">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Tag className="h-3 w-3" />
                            {relatedPost.category.name}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>

                      {/* Excerpt */}
                      {relatedPost.excerpt && (
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                          {relatedPost.excerpt}
                        </p>
                      )}

                      {/* Metadata Footer */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border text-xs text-muted-foreground flex-wrap">
                        {relatedPost.author && (
                          <div className="flex items-center gap-1.5">
                            <User className="h-4 w-4" />
                            <span>
                              {typeof relatedPost.author === 'string'
                                ? relatedPost.author
                                : relatedPost.author}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{relatedDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          <span>{relatedReadTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </article>
  )
}
