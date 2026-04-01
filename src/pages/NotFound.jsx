import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import NotFoundPage from '../components/NotFoundPage'

const NotFound = () => {
  return (
     <div className="bg-background text-foreground overflow-x-hidden min-h-screen">
          {/* Theme Toggle */}
          <ThemeToggle />
    
          {/* Background effects */}
          {/* Dark mode background */}
            <StarBackground />
    
          {/* Navbar */}
          <Navbar />
    
          {/* Main Content */}
          <NotFoundPage/>
    
          {/* Footer */}
          <Footer />
        </div>
  )
}

export default NotFound