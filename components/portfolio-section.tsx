"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { ScrollAnimate, StaggerContainer, StaggerItem } from "@/components/scroll-animate"
import { portfolioProjects } from "@/lib/data"
import Image from "next/image"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimate variant="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
              Take a look at my <br />
              <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">portfolio</span>
            </h2>
          </div>
        </ScrollAnimate>

        <StaggerContainer className="space-y-8 mb-12" staggerDelay={0.15}>
          {portfolioProjects.map((project, index) => (
            <StaggerItem key={index}>
              <div
                className="group grid md:grid-cols-2 bg-white dark:bg-neutral-900 border-[3px] border-black dark:border-white rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] active:translate-y-[2px] active:shadow-none transition-all"
              >
                <div className="p-6 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                    <span className="inline-block bg-black dark:bg-white text-white dark:text-black text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
                      {project.title}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-neutral-400 font-medium">{project.year}</span>
                  </div>

                  <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B] dark:text-white">
                    {project.company}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#393939] dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-[#2F81F7] shrink-0 mt-0.5" />
                        {result.title}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1 rounded-full border-2 border-black/10 dark:border-white/20 bg-gray-50 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 font-bold text-black dark:text-white transition-all text-sm md:text-base px-5 py-2.5 border-[3px] border-black dark:border-white rounded-xl bg-white dark:bg-neutral-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.25)] active:translate-y-[2px] active:shadow-none hover:gap-3"
                    >
                      {project.linkText}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}>
                  <Image
                    src={project.illustration}
                    alt={project.company}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
