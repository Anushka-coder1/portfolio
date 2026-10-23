import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import Projects from './pages/Projects'
import MyJourney from './pages/MyJourney'
import NotFound from './pages/NotFound'
import { Toaster } from 'sonner'
import { ThemeToggle } from './components/layout/ThemeToggle'
import About from './pages/About'
import { SkillsSection } from './components/sections/SkillsSection'
import { PageLayout } from './components/layout/PageLayout'
import GamesSection from './components/sections/GamesSection'
import { ContactSection } from './components/sections/ContactSection'



function App() {
  return (
    <>
      <Toaster richColors closeButton />
      <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PageLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/games" element={<GamesSection />} />
            <Route path="/myJourney" element={<MyJourney />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
