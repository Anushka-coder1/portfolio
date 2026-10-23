import { ArrowLeft, Award, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import journey from '../data/journey.json'

const MyJourney = () => {
  const { page, education, highlights } = journey

  return (
    <main className="relative isolate px-4 pb-12 pt-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,183,212,0.2),transparent_48%)] dark:bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.14),transparent_42%)]" />

        <div className="container mx-auto max-w-5xl">

          <header className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {page.title}
            </h1>
            <p className="text-muted-foreground">{page.intro}</p>
          </header>

          <section className="mb-16 pt-4 text-left" aria-labelledby="education-heading">
            <div className="mb-10 mt-4 flex items-center gap-3">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <h2 id="education-heading" className="text-2xl font-bold">
                  Academic journey
                </h2>
                <p className="text-sm text-muted-foreground">
                  The foundation behind my data-focused work.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {education.map((item) => (
                <article
                  key={item.id}
                  className="rounded-[28px] border border-border/60 bg-card/95 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-8"
                >
                  <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                    <div>
                      <p className="mb-2 text-sm font-semibold text-primary">{item.period}</p>
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                      <p className="mt-1 text-muted-foreground">{item.institution}</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {item.status}
                      </span>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                        {item.scoreLabel}: {item.score}
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 max-w-3xl text-muted-foreground">{item.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16 pt-4 text-left" aria-labelledby="highlights-heading">
            <div className="mb-10 flex items-center gap-3">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Award size={24} />
              </div>
              <div>
                <h2 id="highlights-heading" className="text-2xl font-bold">
                  Highlights and leadership
                </h2>
                <p className="text-sm text-muted-foreground">
                  Milestones that have shaped how I work.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map((highlight) => (
                <article
                  key={highlight.id}
                  className="rounded-[24px] border border-border/60 bg-card/95 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
                >
                  <h3 className="mb-3 text-lg font-semibold">{highlight.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
    </main>
  )
}

export default MyJourney
