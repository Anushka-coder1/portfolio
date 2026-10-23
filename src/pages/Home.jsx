import { Navbar } from '../components/layout/Navbar'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { ContactSection } from '../components/sections/ContactSection'
import { Footer } from '../components/layout/Footer'
import GamesSection from '../components/sections/GamesSection'

const Home = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="relative isolate">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,183,212,0.2),transparent_48%)] dark:bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.14),transparent_42%)]" />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GamesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
