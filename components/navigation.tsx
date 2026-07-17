import { Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex-shrink-0">
          <img src="/favicon.ico" alt="Logo" className="w-10 h-10 object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#home" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Home
          </a>
          <a href="#about" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#portfolio" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Portfolio
          </a>
        </div>

        <Button asChild className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
          <a href="mailto:its.kibetbrian@gmail.com">
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </a>
        </Button>
      </nav>
    </div>
  )
}
