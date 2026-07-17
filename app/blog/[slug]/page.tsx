import { getPostBySlug, getPostSlugs } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const { meta } = getPostBySlug(slug)
  return {
    title: meta.title,
    description: meta.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const { meta, content } = getPostBySlug(slug)

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      <article className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>

          <header className="mb-10">
            <span className="inline-block bg-black dark:bg-white text-white dark:text-black text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              {meta.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black dark:text-white leading-tight">
              {meta.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FDB927] border-2 border-black dark:border-white rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/avatar-illustration.png"
                  alt="Kibet Brian"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-sm text-black dark:text-white">Kibet Brian</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {new Date(meta.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          </header>

          {meta.coverImage && (
            <div className="relative w-full aspect-video bg-[#EDEDED] dark:bg-neutral-800 rounded-2xl overflow-hidden border-[3px] border-black dark:border-white mb-10">
              <Image
                src={meta.coverImage}
                alt={meta.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-a:text-[#2F81F7] prose-a:no-underline hover:prose-a:underline prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-pre:bg-neutral-900 dark:prose-pre:bg-neutral-800 prose-pre:border-2 prose-pre:border-neutral-200 dark:prose-pre:border-neutral-700 prose-pre:rounded-xl prose-img:rounded-xl prose-table:border-collapse prose-th:border prose-th:border-neutral-300 dark:prose-th:border-neutral-600 prose-th:px-4 prose-th:py-2 prose-td:border prose-td:border-neutral-300 dark:prose-td:border-neutral-600 prose-td:px-4 prose-td:py-2">
            <MDXRemote source={content} />
          </div>

          <div className="mt-16 pt-8 border-t-2 border-neutral-200 dark:border-neutral-800">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold text-black dark:text-white hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
