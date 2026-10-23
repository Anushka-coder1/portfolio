import { Menu, X } from 'lucide-react'
import cn from '../../lib/utils'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Skills', to: '/skills' },
  { name: 'Projects', to: '/projects' },
  { name: 'Games', to: '/games' },
  { name: 'My Journey', to: '/myJourney' },
  { name: 'Contact', to: '/contact' },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs'
          : 'py-5',
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          className="text-xl font-bold text-primary flex items-center"
          to="/#hero"
        >
          <span className="relative z-10 pl-5">
            <span className="text-glow text-foreground "> Anushka </span>{' '}
            PortFolio
          </span>
        </Link>
        {/* desktop */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.to}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* mobile nav*/}
        <button onClick={()=>setIsMenuOpen((prev)=> !prev)}
          className='fixed left-4 top-4 z-50 p-2 text-foreground md:hidden'
          aria-label={isMenuOpen ? "close Menu" : "open Menu"}
        > 
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center ',
            'transition-all duration-300 md:hidden',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none',
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.to}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={()=>setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
