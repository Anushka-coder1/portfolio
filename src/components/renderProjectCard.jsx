import { ArrowRight, ExternalLink, Github } from 'lucide-react'

export const renderProjectCard = (project) => {
  const hasDemo = project.demoUrl && project.demoUrl !== '/NotFound'
  const isExternalDemo = hasDemo && project.demoUrl.startsWith('http')

  return (
    <div
      key={project.id}
      className="group overflow-hidden rounded-[28px] border border-border/60 bg-card/95 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm card-hover"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/50 p-3">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(244,114,182,0.1),transparent_34%)]" />

        <div className="relative overflow-hidden rounded-[22px] border border-white/20 bg-background/90 shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
          <div className="flex items-center justify-between border-b border-border/60 bg-background/85 px-4 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="max-w-[65%] truncate rounded-full bg-secondary/80 px-3 py-1 text-[11px] font-medium text-secondary-foreground">
              {hasDemo ? project.demoUrl.replace(/^https?:\/\//, '') : 'Preview coming soon'}
            </span>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-card">
            {hasDemo ? (
              <iframe
                src={project.demoUrl}
                title={project.title}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none h-full w-full scale-100 border-none transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="relative h-full w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-background/10 to-transparent" />
              </div>
            )}
          </div>
        </div>

        {hasDemo && (
          <a
            href={project.demoUrl}
            target={isExternalDemo ? '_blank' : undefined}
            rel={isExternalDemo ? 'noreferrer' : undefined}
            className="absolute inset-0 z-10"
            aria-label={`Open ${project.title} demo`}
          />
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
        <div className="flex items-center justify-between gap-4">
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
              hasDemo
                ? 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-300'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {hasDemo ? 'Live project' : 'In progress'}
          </span>
          <div className="flex space-x-3">
            {hasDemo && (
              <a
                href={project.demoUrl}
                target={isExternalDemo ? '_blank' : undefined}
                rel={isExternalDemo ? 'noreferrer' : undefined}
                className="rounded-full border border-border/70 p-2 text-foreground/80 transition-colors duration-300 hover:border-primary hover:text-primary"
                aria-label={`Open ${project.title} demo`}
              >
                <ExternalLink size={20} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/70 p-2 text-foreground/80 transition-colors duration-300 hover:border-primary hover:text-primary"
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