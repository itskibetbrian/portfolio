"use client"

import { useState, useEffect, useCallback } from "react"
import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimate } from "@/components/scroll-animate"
import { roles } from "@/lib/data"
import Image from "next/image"

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex]
    
    if (!isDeleting) {
      if (currentText.length < currentRole.length) {
        setCurrentText(currentRole.substring(0, currentText.length + 1))
      } else {
        setTimeout(() => setIsDeleting(true), 1500)
      }
    } else {
      if (currentText.length > 0) {
        setCurrentText(currentRole.substring(0, currentText.length - 1))
      } else {
        setIsDeleting(false)
        setRoleIndex((current) => (current + 1) % roles.length)
      }
    }
  }, [currentText, isDeleting, roleIndex])

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [tick, isDeleting])

  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <ScrollAnimate variant="fade-left">
          <div className="space-y-6">
            <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px] text-black dark:text-white">
              I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Kibet Brian</span>, a{" "}
              <span className="text-[#2F81F7]">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-[#393939] dark:text-neutral-400 text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
              I specialize in building scalable, production-ready applications that ship, scale, and solve complex business challenges.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
              <Button asChild className="bg-[#0B0B0B] dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] active:translate-y-[2px] active:shadow-none transition-all">
                <a href="mailto:its.kibetbrian@gmail.com">
                  <Mail className="w-5 h-5" />
                  Get in touch
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="bg-white dark:bg-neutral-900 border-[3px] border-black dark:border-white hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] text-black dark:text-white active:translate-y-[2px] active:shadow-none transition-all"
              >
                <a href="#portfolio">
                  <FolderOpen className="w-5 h-5" />
                  View portfolio
                </a>
              </Button>
            </div>
          </div>
        </ScrollAnimate>

        <ScrollAnimate variant="fade-right" delay={0.2}>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black dark:border-white rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)]">
              <Image
                src="/images/avatar-illustration.png"
                alt="Illustrated character avatar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  )
}
