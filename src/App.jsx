import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Toaster } from "sonner";

function App() {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
