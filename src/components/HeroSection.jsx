import { ArrowDown } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(244,114,182,0.18),transparent_20%),radial-gradient(circle_at_50%_85%,rgba(125,211,252,0.18),transparent_24%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.2),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(148,163,184,0.12),transparent_20%),radial-gradient(circle_at_50%_85%,rgba(99,102,241,0.15),transparent_24%)]" />
      <div className="container z-10 mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <p className="opacity-0 text-sm uppercase tracking-[0.35em] text-primary animate-fade-in">
            Full Stack Developer
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="animate-fade-in">Hi, I&apos;m</span>
            <span className="ml-2 text-primary opacity-0 animate-fade-in-delay-1">
              Anushka
            </span>
            <span className="hero-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Verma
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in-delay-3 md:text-xl">
            I&apos;m a full-stack developer who loves building polished, responsive
            web experiences with expressive animation, clean UI, and dependable
            backend integrations.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in-delay-4 sm:flex-row">
            <a href="#project" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-primary/40 px-6 py-2 font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center animate-bounce">
        <span className="mb-2 text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  )
}
