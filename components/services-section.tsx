"use client"

import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollAnimate, StaggerContainer, StaggerItem } from "@/components/scroll-animate"
import { services } from "@/lib/data"
import Image from "next/image"

export function ServicesSection() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 md:py-24 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimate variant="fade-up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4 text-black dark:text-white">
                My broad <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">set of services</span>
              </h2>
              <p className="text-[#393939] dark:text-neutral-400 text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
                From backend logic to polished UI — I bring full-stack ideas to life with scalable, production-ready solutions.
              </p>
            </div>
          </ScrollAnimate>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <div
                  className="bg-white dark:bg-neutral-900 border-[3px] border-black dark:border-white rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] active:translate-y-[2px] active:shadow-none transition-all duration-300 min-h-[480px] flex flex-col group"
                >
                  <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={382}
                      height={328}
                      className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="px-8 pb-8 flex-1 flex flex-col">
                    <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B] dark:text-white">{service.title}</h3>
                    <p className="text-[18px] leading-[30px] font-medium text-[#393939] dark:text-neutral-400">{service.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}

            <StaggerItem>
              <div className="bg-[#FFC224] border-[3px] border-black dark:border-white rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] active:translate-y-[2px] active:shadow-none transition-all min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)]">
                <div className="mb-8">
                  <Image
                    src="/images/get-in-touch.svg"
                    alt="Get in touch"
                    width={92}
                    height={92}
                    className="w-[92px] h-[92px]"
                  />
                </div>
                <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Get in touch</h3>
                <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                  Looking for another service? Get in touch with me, there is a high chance that I will be able to help!
                </p>
                <Button asChild className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px] active:translate-y-[2px] active:shadow-none transition-all">
                  <a href="mailto:its.kibetbrian@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get in touch
                  </a>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
