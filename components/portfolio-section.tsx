import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const portfolioProjects = [
  {
    company: "Nogeybix Labs",
    year: "2024 - Present",
    title: "Founder & Lead Engineer",
    results: [
      { title: "Spearheading the technical strategy for 10+ high-growth startups and digital ventures" },
      { title: "Directing architecture for a diverse portfolio, ensuring 99.9% system availability" },
      { title: "Building and scaling production-ready systems that have processed over $1M+ in transactions" },
    ],
    link: "https://nogeybix.com",
    linkText: "Visit Nogeybix Labs",
    tags: ["Technical Leadership", "System Architecture", "Full-Stack Development"],
    bgColor: "bg-[#6366F1]",
    illustration: "/images/studio-workspace.svg",
  },
  {
    company: "GPS Travel",
    year: "2023",
    title: "Tours & Travel Platform",
    results: [
      { title: "Translated complex bespoke travel requirements into a performant, high-conversion platform" },
      { title: "Integrated real-time safari and transfer booking flows, reducing manual entry by 50%" },
      { title: "Implemented multi-currency support and automated itinerary generation for luxury clients" },
    ],
    link: "https://gpstravel.co.ke",
    linkText: "View Live Site",
    tags: ["React", "Travel Tech", "API Integration"],
    bgColor: "bg-[#FFC224]",
    illustration: "/images/venture-workspace.svg",
  },
  {
    company: "BuildAfrique",
    year: "2023",
    title: "Building & Construction Platform",
    results: [
      { title: "Increased user engagement by 25% through a complete UI refactor and performance tuning" },
      { title: "Developed a dynamic project showcase module that handles high-resolution asset delivery with zero lag" },
      { title: "Achieved perfect 100/100 Lighthouse performance scores for construction service pages" },
    ],
    link: "https://buildafrique.com",
    linkText: "View Live Site",
    tags: ["Next.js", "Performance", "SEO"],
    bgColor: "bg-[#FF6B6B]",
    illustration: "/images/studio-workspace.svg",
  },
  {
    company: "Numida Africa",
    year: "2023",
    title: "SME Lending Application",
    results: [
      { title: "Hardened API security and RBAC logic for systems handling sensitive financial SME data" },
      { title: "Optimized loan application data flows, ensuring zero data loss during high-concurrency periods" },
      { title: "Integrated real-time credit scoring APIs that supported a 15% increase in loan processing speed" },
    ],
    link: "https://play.google.com/store/apps/details?id=com.numidatech.numida",
    linkText: "View Project",
    tags: ["Fintech", "Security", "Scalability"],
    bgColor: "bg-[#10B981]",
    illustration: "/images/venture-workspace.svg",
  },
  {
    company: "xGscore.io",
    year: "2024",
    title: "Sports Analytics Platform",
    results: [
      { title: "Optimized real-time data streaming for 10k+ concurrent sports analytics users globally" },
      { title: "Developed complex visualization modules that render 100+ match data points per second with zero lag" },
      { title: "Hardened frontend security to prevent unauthorized scraping of proprietary betting analytics" },
    ],
    link: "https://xgscore.io",
    linkText: "View Site",
    tags: ["Analytics", "Data Visualization", "Real-time"],
    bgColor: "bg-[#2F81F7]",
    illustration: "/images/studio-workspace.svg",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">portfolio</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                  <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
                    {project.title}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                </div>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.company}
                </h3>

                <ul className="space-y-3 mb-6">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#393939] text-sm md:text-base leading-relaxed">
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
                        className="text-xs font-semibold px-3 py-1 rounded-full border-2 border-black/10 bg-gray-50 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
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
          ))}
        </div>
      </div>
    </section>
  )
}
