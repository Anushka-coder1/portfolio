import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import NotFoundPage from '../components/NotFoundPage'

const NotFound = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Navbar />
      <NotFoundPage />
      <Footer />
    </div>
  )
}

export default NotFound
