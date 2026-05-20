import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'

const renderProjectCard = (project) => {
  const isLive = project.demoUrl && project.demoUrl !== '/NotFound'

  return (
    <div
      key={project.id}
      className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xs card-hover"
    >
      <div className="relative h-52 overflow-hidden">
        <a
          href={project.demoUrl}
          target={project.demoUrl.startsWith('http') ? '_blank' : undefined}
          rel={project.demoUrl.startsWith('http') ? 'noreferrer' : undefined}
          className="block h-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        {!isLive && (
          <span className="absolute right-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground shadow">
            In Progress
          </span>
        )}
      </div>
      <div className="p-6 text-left">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={`${project.id}-${tag}`}
              className="rounded-full border bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
        <p className="mb-5 text-sm text-muted-foreground">{project.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {isLive ? 'Live project' : 'Case study'}
          </span>
          <div className="flex space-x-3">
            <a
              href={project.demoUrl}
              target={project.demoUrl.startsWith('http') ? '_blank' : undefined}
              rel={project.demoUrl.startsWith('http') ? 'noreferrer' : undefined}
              className="text-foreground/80 transition-colors duration-300 hover:text-primary"
              aria-label={`Open ${project.title} demo`}
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 transition-colors duration-300 hover:text-primary"
              aria-label={`Open ${project.title} GitHub repository`}
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

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
