"use client"

import { useState, useEffect } from "react"
import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  "web designer",
  "mobile app dev",
  "backend/API dev",
  "AI/automation engineer",
  "technical consultant"
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.substring(0, currentText.length + 1))
        } else {
          // Wait before starting to delete
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
    }, isDeleting ? 50 : 100) // Type slower, delete faster
    
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, roleIndex])

  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Kibet Brian</span>, a{" "}
            <span className="text-[#2F81F7]">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            I specialize in building scalable, production-ready applications that ship, scale, and solve complex business challenges.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button asChild className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <a href="mailto:its.kibetbrian@gmail.com">
                <Mail className="w-5 h-5" />
                Get in touch
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <a href="#portfolio">
                <FolderOpen className="w-5 h-5" />
                View portfolio
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/avatar-illustration.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

