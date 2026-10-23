import { ProjectCard } from '../components/projects/ProjectCard'
import { projects } from '../data/projects'
const Projects = () => {
  const portfolioProjects = projects.filter((project) => project.field !== 'games')

  return (
    <main className="relative isolate px-4 pb-12 pt-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,183,212,0.2),transparent_48%)] dark:bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.14),transparent_42%)]" />
        <div className="container mx-auto max-w-6xl">

          <header className="mx-auto mb-14 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              All <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground">
              A collection of data science projects covering analysis, machine
              learning, visualization, and practical problem-solving.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => ProjectCard(project))}
          </div>
        </div>
    </main>
  )
}

export default Projects
