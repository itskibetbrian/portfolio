"use client"

import { ScrollAnimate, StaggerContainer, StaggerItem } from "@/components/scroll-animate"
import { toolboxCategories } from "@/lib/data"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <ScrollAnimate variant="fade-left">
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg aspect-square border-[4px] border-black dark:border-white rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[-8px_8px_0px_0px_rgba(255,255,255,0.15)]">
              <Image src="/images/about-me.svg" alt="About me illustration" fill className="object-cover" />
            </div>
          </div>
        </ScrollAnimate>

        <div className="space-y-6 md:space-y-8">
          <ScrollAnimate variant="fade-up">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-black dark:text-white">
                The tech behind the <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">magic</span>
              </h2>
            </div>
          </ScrollAnimate>

          <div className="space-y-6">
            {toolboxCategories.map((category, index) => (
              <div key={category.name}>
                <ScrollAnimate variant="fade-up" delay={index * 0.1}>
                  <h3 className="text-sm md:text-base font-bold text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <StaggerContainer className="flex flex-wrap gap-3 md:gap-4" staggerDelay={0.04}>
                    {category.items.map((item, itemIndex) => (
                      <StaggerItem key={`${item.title}-${itemIndex}`}>
                        <div className="inline-flex items-center gap-3 py-2.5 px-3 border-[3px] border-black dark:border-white rounded-[12px] bg-white dark:bg-neutral-900 text-black dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.25)] transition-all">
                          <div className="shrink-0 flex items-center justify-center">
                            <Image
                              src={item.iconUrl}
                              alt={`${item.title} icon`}
                              width={24}
                              height={24}
                              className="w-5 h-5 md:w-6 md:h-6"
                              unoptimized
                            />
                          </div>
                          <span className="font-bold text-xs md:text-sm whitespace-nowrap">{item.title}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </ScrollAnimate>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
