"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between bg-white dark:bg-neutral-900 border-4 border-black dark:border-white rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]"
      >
        <div className="flex-shrink-0">
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#home" className="text-[18px] font-bold leading-[20px] text-black dark:text-white hover:opacity-70 transition-opacity">
            Home
          </a>
          <a href="#about" className="text-[18px] font-bold leading-[20px] text-black dark:text-white hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#portfolio" className="text-[18px] font-bold leading-[20px] text-black dark:text-white hover:opacity-70 transition-opacity">
            Portfolio
          </a>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
            <a href="mailto:its.kibetbrian@gmail.com" aria-label="Send email to Kibet Brian">
              <Mail className="w-10 h-10" strokeWidth={2.5} />
            </a>
          </Button>
        </div>
      </nav>
    </div>
  )
}
