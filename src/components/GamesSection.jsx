import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'
import { renderProjectCard } from './renderProjectCard'


const GamesSection = () => {
  return (
    <section id="games" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Play <span className="text-primary">Games</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Interactive browser games that reflect my interest in playful UI,
          logic-driven experiences, and responsive frontend development.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => project.field == 'games')
            .map((project) => renderProjectCard(project))}
        </div>
        
      </div>
    </section>
  )
}

export default GamesSection
