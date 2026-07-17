import type { MetadataRoute } from "next"
import { getPostSlugs, getPostBySlug } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kibetbrian.codes" // Update with actual domain if different

  // Static routes
  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Dynamic blog routes
  const slugs = getPostSlugs()
  const blogRoutes = slugs.map((slug) => {
    const { meta } = getPostBySlug(slug)
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(meta.date).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }
  })

  return [...routes, ...blogRoutes]
}
