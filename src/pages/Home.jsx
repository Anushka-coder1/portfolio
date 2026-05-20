import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import GamesSection from '../components/GamesSection'

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
