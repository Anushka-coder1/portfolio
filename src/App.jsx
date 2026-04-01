import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Toaster } from "sonner";
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <>
      <Toaster />
      <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App