import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard }  from '../projects/ProjectCard.jsx'

export const ProjectsSection = () => {
  return (
    <section id="project" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          A collection of data science projects highlighting my work in data analysis, machine learning, visualization, and insight-driven solutions.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => project.field !== 'games')
            .slice(0, 3)
            .map((project) => ProjectCard(project))}
        </div>
        <div className="mt-12 text-center">
          <Link
            className="cosmic-button mx-auto flex w-fit items-center gap-2"
            to="/projects"
          >
            View All Projects <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
