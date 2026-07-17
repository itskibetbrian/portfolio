"use client"

import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimate, StaggerContainer, StaggerItem } from "@/components/scroll-animate"
import Image from "next/image"
import Link from "next/link"

export function ArticlesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimate variant="fade-up">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white">Articles & News</h2>
            <Button
              variant="outline"
              asChild
              className="border-[3px] border-black dark:border-white rounded-xl px-4 md:px-6 py-4 md:py-6 hover:bg-gray-50 dark:hover:bg-neutral-800 bg-white dark:bg-neutral-900 text-black dark:text-white font-semibold text-sm md:text-base w-full sm:w-auto active:translate-y-[2px] active:shadow-none transition-all"
            >
              <Link href="/blog">
                <Pencil className="w-4 h-4 mr-2" />
                Browse all articles
              </Link>
            </Button>
          </div>
        </ScrollAnimate>

        <StaggerContainer className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 mb-16">
          {/* Large featured article card */}
          <StaggerItem>
            <Link href="/blog/building-scalable-apis" className="block group">
              <div className="bg-white dark:bg-neutral-900 border-[3px] border-black dark:border-white rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] active:translate-y-[2px] active:shadow-none transition-all duration-300 h-full">
                <div className="bg-[#EDEDED] dark:bg-neutral-800 relative min-h-[220px] md:min-h-[320px] m-3 md:m-4 rounded-2xl overflow-hidden">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black dark:bg-white text-white dark:text-black text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                    Resources
                  </span>
                  <Image
                    src="/images/article-design-tools.png"
                    alt="Design tools illustration"
                    fill
                    className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black dark:text-white group-hover:text-[#2F81F7] transition-colors">
                    Building Scalable APIs: Lessons from Production
                  </h3>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FDB927] border-2 border-black dark:border-white rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/avatar-illustration.png"
                        alt="Author avatar"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-base md:text-lg text-[#0B0B0B] dark:text-white">Kibet Brian</div>
                      <div className="text-sm md:text-base text-gray-600 dark:text-neutral-400">2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </StaggerItem>

          {/* Right side - Two smaller article cards */}
          <div className="space-y-6 md:space-y-8 flex flex-col">
            {/* First smaller card */}
            <StaggerItem className="flex-1">
              <Link href="/blog/lighthouse-scores-nextjs" className="block group h-full">
                <div className="bg-white dark:bg-neutral-900 border-[3px] border-black dark:border-white rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] active:translate-y-[2px] active:shadow-none transition-all duration-300 h-full">
                  <div className="flex flex-col sm:flex-row h-full">
                    {/* Image area */}
                    <div className="bg-[#EDEDED] dark:bg-neutral-800 min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                      <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black dark:bg-white text-white dark:text-black text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                        Articles
                      </span>
                      <Image
                        src="/images/article-font-sizes.png"
                        alt="Font sizes illustration"
                        fill
                        className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>
                    {/* Content area */}
                    <div className="p-6 md:p-10 flex flex-col justify-center">
                      <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-black dark:text-white group-hover:text-[#2F81F7] transition-colors">
                        Achieving 100/100 Lighthouse Scores in Next.js
                      </h3>
                      <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-lg leading-relaxed">
                        Performance optimization strategies for modern web applications
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>

            {/* Second smaller card */}
            <StaggerItem className="flex-1">
              <Link href="/blog/realtime-data-streaming" className="block group h-full">
                <div className="bg-white dark:bg-neutral-900 border-[3px] border-black dark:border-white rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] active:translate-y-[2px] active:shadow-none transition-all duration-300 h-full">
                  <div className="flex flex-col sm:flex-row h-full">
                    {/* Image area */}
                    <div className="bg-[#EDEDED] dark:bg-neutral-800 min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                      <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black dark:bg-white text-white dark:text-black text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                        News
                      </span>
                      <Image
                        src="/images/article-exercises.png"
                        alt="Exercises illustration"
                        fill
                        className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>
                    {/* Content area */}
                    <div className="p-6 md:p-10 flex flex-col justify-center">
                      <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-black dark:text-white group-hover:text-[#2F81F7] transition-colors">
                        Real-time Data Streaming at Scale: Architecture Patterns
                      </h3>
                      <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-lg leading-relaxed">
                        Handling 10k+ concurrent users with efficient data pipelines
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
