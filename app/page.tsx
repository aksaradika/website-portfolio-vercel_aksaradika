import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Highlights } from '@/components/highlights'
import { ExperienceThemes } from '@/components/experience-themes'
import { ProjectsExpanded } from '@/components/projects-expanded'
import { Skills } from '@/components/skills'
import { AchievementsExpanded } from '@/components/achievements-expanded'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Highlights />
      <ExperienceThemes />
      <ProjectsExpanded />
      <Skills />
      <AchievementsExpanded />
      <Contact />
      <Footer />
    </main>
  )
}
