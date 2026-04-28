import { getPayload } from 'payload'
import config from '@payload-config'
import { Metadata } from 'next'
import { BlogPost } from '@/payload-types'
import BlogCard from '@/components/blog/BlogCard'
import BlogFilters from '@/components/blog/BlogFilters'

type PopulatedBlogPost = Populated<BlogPost, 1>

export const metadaat: Metadata = {
  title: 'مدونة مختبرات بريزما',
  description: 'معلومات طبية موثوقة وشاملة عن التحاليل والفحوصات الصحية',
}

interface PageProps {
  searchParams: Promise<{
    page?: string
    title?: string
    category?: string[]
  }>
}

export default async function Page({ searchParams }: PageProps) {
  const { category } = await searchParams
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'blog-posts',
    where: {
      status: { equals: 'published' },
      ...(category && { 'category.name': { equals: category } }),
    },
    sort: '-publishedAt',
    limit: 100,
    depth: 1,
  })

  const posts: PopulatedBlogPost[] = result.docs as PopulatedBlogPost[]
  const { docs: categoryFilters } = await payload.find({
    collection: 'blog-categories',
    limit: 100,
  })

  return (
    <div className="w-full">
      <section className="relative w-full h-80 md:h-96 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        {/* Hero Section */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            مدونة مختبرات بريزما
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            معلومات طبية موثوقة وشاملة عن التحاليل والفحوصات الصحية
          </p>

          {/* Filter/Category Buttons */}

          <BlogFilters blogCategories={categoryFilters} />
        </div>
      </section>

      {/* Featured Post */}
      {/* {posts.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">مميزة</h2>
              <div className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full" />
            </div>

            <Link href={`/blog/${posts[0].slug}`}>
              <article className="group grid grid-cols-1 md:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                {posts[0].featuredImage?.url && (
                  <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
                    <Image
                      src={posts[0].featuredImage.url}
                      alt={posts[0].featuredImage.alt || posts[0].title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex flex-col justify-center p-6 md:p-8">
                  {posts[0].category && (
                    <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                      {posts[0].category.name}
                    </span>
                  )}
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-balance">
                    {posts[0].title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {posts[0].author}
                    </div>
                    {posts[0].publishedAt ? (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(posts[0].publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )} */}

      {/* All Posts Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">أحدث المقالات</h2>
            <div className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.length > 0 ? (
              posts.map((post) => <BlogCard key={post.id} post={post} />)
            ) : (
              <p className="col-span-full text-xl md:text-2xl text-muted-foreground text-center">
                لا توجد مقالات
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
