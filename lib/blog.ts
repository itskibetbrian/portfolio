import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface PostMeta {
  title: string
  date: string
  category: string
  excerpt: string
  coverImage: string
  slug: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    meta: {
      title: data.title ?? "",
      date: data.date ?? "",
      category: data.category ?? "",
      excerpt: data.excerpt ?? "",
      coverImage: data.coverImage ?? "",
      slug,
    },
    content,
  }
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs()
  return slugs
    .map((slug) => getPostBySlug(slug).meta)
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))
}
