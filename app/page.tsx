import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { LocationSection } from "@/components/location-section"
import { ScheduleSection } from "@/components/schedule-section"
import { PartnersSection } from "@/components/partners-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <ScheduleSection />
      <PartnersSection />
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Devconnect Buenos Aires. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
