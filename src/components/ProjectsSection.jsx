import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'
import { renderProjectCard } from './renderProjectCard'

export const ProjectsSection = () => {
  return (
    <section id="project" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          A collection of projects that highlight my work across frontend
          experiences, backend integration, and creative interfaces.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => project.field !== 'games')
            .map((project) => renderProjectCard(project))}
        </div>
        <div className="mt-12 text-center">
          <a
            className="cosmic-button mx-auto flex w-fit items-center gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Anushka-coder1"
          >
            Check My GitHub <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
