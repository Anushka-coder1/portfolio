import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Myntra Clone',
    description: 'A responsive Myntra-inspired e-commerce website built using HTML and CSS, focusing on clean UI design, product listings, and a visually engaging shopping experience.',
    image: '/projectImage/myntra.png',
    tags: ['HTML', 'CSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Portfolio',
    description: 'A personal portfolio website built with React and Tailwind CSS, featuring smooth animations including stars and meteor effects to create an engaging and modern user experience.',
    image: '/projectImage/portfolio.png',
    tags: ['React', 'TailwindCSS',],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Tic Tac Toe',
    description: 'A classic Tic Tac Toe game built using HTML, CSS, and JavaScript, featuring interactive gameplay, real-time win detection, and a clean, user-friendly interface.',
    image: '/projectImage/Tic tac Toe.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Rock Paper Scissors',
    description: 'A fun and responsive Rock Paper Scissors game using vanilla JavaScript, showcasing conditional logic, event handling, and smooth UI interactions.',
    image: '/projectImage/rock paper scissors.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: '#',
    githubUrl: '#',
  },
]

export const ProjectsSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {' '}
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {' '}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          magni in corrupti incidunt earum aperiam unde, animi nisi id amet hic
          aspernatur blanditiis, eaque possimus, impedit aut cum.{' '}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank' href="https://github.com/Anushka-coder1">
            Check My Github <ArrowRight/>
          </a>
        </div>
      </div>
    </section>
  )
}
