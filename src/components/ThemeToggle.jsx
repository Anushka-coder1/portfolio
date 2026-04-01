import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import cn from '../lib/utils'
import { StarBackground } from '../components/StarBackground'
import { SakuraBackground } from './SakuraBackground'

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    let storedTheme = null
    try {
      storedTheme = localStorage.getItem('theme')
    } catch {
      storedTheme = null
    }

    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    const shouldBeDark = storedTheme
      ? storedTheme === 'dark'
      : prefersDark

    const root = document.documentElement
    if (shouldBeDark) {
      root.classList.add('dark')
      setIsDarkMode(true)
    } else {
      root.classList.remove('dark')
      setIsDarkMode(false)
    }

    try {
      localStorage.setItem('theme', shouldBeDark ? 'dark' : 'light')
    } catch {
      // ignore storage failures (e.g., privacy mode)
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      try {
        localStorage.setItem('theme', 'light')
      } catch {
        // ignore storage failures
      }
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      try {
        localStorage.setItem('theme', 'dark')
      } catch {
        // ignore storage failures
      }
      setIsDarkMode(true)
    }
  }

  return (
    <>
      {/* Background */}
      {isDarkMode ? <StarBackground /> : <SakuraBackground />}

      {/* Toggle Button */}
      <button
        onClick={toggleTheme}
        className={cn(
          'fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
          'focus:outline-none',
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-white" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </>
  )
}
