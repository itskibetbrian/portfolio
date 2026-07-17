import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ArticlesSection />
      <Footer />
    </main>
  )
}
