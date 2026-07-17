import { Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const toolboxItems = [
    { title: "Python", iconUrl: "https://skillicons.dev/icons?i=python" },
    { title: "TypeScript", iconUrl: "https://skillicons.dev/icons?i=ts" },
    { title: "PHP", iconUrl: "https://skillicons.dev/icons?i=php" },
    { title: "Go", iconUrl: "https://skillicons.dev/icons?i=go" },
    { title: "Bash", iconUrl: "https://skillicons.dev/icons?i=bash" },
    { title: "React", iconUrl: "https://skillicons.dev/icons?i=react" },
    { title: "Next.js", iconUrl: "https://skillicons.dev/icons?i=nextjs" },
    { title: "Tailwind CSS", iconUrl: "https://skillicons.dev/icons?i=tailwind" },
    { title: "Flutter", iconUrl: "https://skillicons.dev/icons?i=flutter" },
    { title: "NestJS", iconUrl: "https://skillicons.dev/icons?i=nestjs" },
    { title: "FastAPI", iconUrl: "https://skillicons.dev/icons?i=fastapi" },
    { title: "Node.js", iconUrl: "https://skillicons.dev/icons?i=nodejs" },
    { title: "Prisma", iconUrl: "https://skillicons.dev/icons?i=prisma" },
    { title: "PostgreSQL", iconUrl: "https://skillicons.dev/icons?i=postgres" },
    { title: "MongoDB", iconUrl: "https://skillicons.dev/icons?i=mongodb" },
    { title: "Supabase", iconUrl: "https://skillicons.dev/icons?i=supabase" },
    { title: "Redis", iconUrl: "https://skillicons.dev/icons?i=redis" },
    { title: "Firebase", iconUrl: "https://skillicons.dev/icons?i=firebase" },
    { title: "PyTorch", iconUrl: "https://skillicons.dev/icons?i=pytorch" },
    { title: "TensorFlow", iconUrl: "https://skillicons.dev/icons?i=tensorflow" },
    { title: "AWS", iconUrl: "https://skillicons.dev/icons?i=aws" },
    { title: "Docker", iconUrl: "https://skillicons.dev/icons?i=docker" },
    { title: "GitHub Actions", iconUrl: "https://skillicons.dev/icons?i=githubactions" },
    { title: "Vercel", iconUrl: "https://skillicons.dev/icons?i=vercel" },
    { title: "Linux", iconUrl: "https://skillicons.dev/icons?i=linux" },
    { title: "Git", iconUrl: "https://skillicons.dev/icons?i=git" },
]

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-me.svg" alt="About me illustration" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The tech behind the <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">magic</span>
            </h2>
          </div>

          <div className="pt-2 pb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {toolboxItems.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="inline-flex items-center gap-3 py-2.5 px-3 border-[3px] border-black rounded-[12px] bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="shrink-0 flex items-center justify-center">
                    <img src={item.iconUrl} alt={`${item.title} icon`} className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-xs md:text-sm truncate">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
