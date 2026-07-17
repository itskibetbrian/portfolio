import { getAllPosts } from "@/lib/blog"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and insights on web development, system architecture, and performance optimization by Kibet Brian.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Articles & <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">News</span>
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-12">
            Thoughts on engineering, architecture, and building things that scale.
          </p>

          {posts.length === 0 ? (
            <p className="text-neutral-500 dark:text-neutral-400 text-center py-20">
              No posts yet. Check back soon!
            </p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white dark:bg-neutral-900 border-[3px] border-black dark:border-white rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-300 active:translate-y-[2px] active:shadow-none">
                    <div className="flex flex-col sm:flex-row">
                      <div className="bg-[#EDEDED] dark:bg-neutral-800 min-w-full sm:min-w-[220px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                        <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black dark:bg-white text-white dark:text-black text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                          {post.category}
                        </span>
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 md:p-10 flex flex-col justify-center">
                        <span className="text-sm text-neutral-500 dark:text-neutral-400 mb-2 block">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <h2 className="text-lg md:text-2xl font-bold mb-3 text-black dark:text-white group-hover:text-[#2F81F7] transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-black dark:text-white group-hover:gap-3 transition-all">
                          Read article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
