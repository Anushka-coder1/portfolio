import { Briefcase, Code, User } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-left">
            <span className="inline-flex rounded-full border border-primary/25 bg-primary/8 px-4 py-1 text-sm font-medium text-primary">
              Passionate developer and visual builder
            </span>
            <h3 className="text-3xl font-semibold leading-tight">
              I design and build websites that feel alive, fast, and easy to use.
            </h3>
            <p className="text-muted-foreground">
              I specialize in creating responsive, accessible, and performant web
              applications using modern frontend and backend tools.
            </p>
            <p className="text-muted-foreground">
              I enjoy turning complex ideas into elegant interfaces, and I&apos;m
              always learning new technologies to keep improving the quality of
              what I ship.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a href="#contact" className="cosmic-button text-center">
                Get in Touch
              </a>
              <a
                href="#project"
                className="rounded-full border border-primary px-6 py-2 text-center font-medium text-primary transition-colors duration-300 hover:bg-primary/10"
              >
                Explore Projects
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradiant-border card-hover rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradiant-border card-hover rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and smooth product
                    journeys with attention to detail.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradiant-border card-hover rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Project Ownership</h4>
                  <p className="text-muted-foreground">
                    Taking ideas from concept to launch with practical planning,
                    iteration, and clean delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
