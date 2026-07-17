"use client"

import { Star } from "lucide-react"
import { Fragment } from "react"
import { marqueeWords } from "@/lib/data"

export function LogoMarquee() {
  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black dark:bg-white py-10 md:py-16 -rotate-[5deg] mt-24 md:mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="flex items-center gap-8 md:gap-16 animate-marquee whitespace-nowrap">
          {[...new Array(4)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {marqueeWords.map((word) => (
                <div key={`${index}-${word}`} className="inline-flex items-center gap-8 md:gap-16">
                  <span className="text-white dark:text-black font-extrabold uppercase text-2xl md:text-4xl tracking-wider">{word}</span>
                  <Star className="w-8 h-8 md:w-12 md:h-12 text-white dark:text-black fill-white dark:fill-black -rotate-12" />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
