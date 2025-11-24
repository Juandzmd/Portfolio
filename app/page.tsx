import { Hero } from "@/components/hero"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { TechStack } from "@/components/tech-stack"
import { Certifications } from "@/components/certifications"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Hero />
      <ExperienceTimeline />
      <TechStack />
      <Certifications />
      <ContactForm />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-primary/10">
        <p>© {new Date().getFullYear()} Juan Salvador Díaz Modinger. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind & AI.</p>
      </footer>
    </main>
  )
}
