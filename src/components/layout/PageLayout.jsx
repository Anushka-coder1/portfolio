import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

export const PageLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
