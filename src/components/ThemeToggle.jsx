import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import cn from '../lib/utils'
import { StarBackground } from './StarBackground'
import { SakuraBackground } from './SakuraBackground'

const getInitialTheme = () => {
  if (typeof document === 'undefined') {
    return false
  }

  return document.documentElement.classList.contains('dark')
}

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const syncTheme = (nextDarkMode) => {
      document.documentElement.classList.toggle('dark', nextDarkMode)
      setIsDarkMode(nextDarkMode)

      try {
        localStorage.setItem('theme', nextDarkMode ? 'dark' : 'light')
      } catch {
        // ignore storage failures
      }
    }

    const handleSystemTheme = (event) => {
      let storedTheme = null

      try {
        storedTheme = localStorage.getItem('theme')
      } catch {
        storedTheme = null
      }

      if (!storedTheme) {
        syncTheme(event.matches)
      }
    }

    setIsDarkMode(getInitialTheme())
    mediaQuery.addEventListener('change', handleSystemTheme)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemTheme)
    }
  }, [])

  const toggleTheme = () => {
    const nextDarkMode = !isDarkMode

    document.documentElement.classList.toggle('dark', nextDarkMode)
    setIsDarkMode(nextDarkMode)

    try {
      localStorage.setItem('theme', nextDarkMode ? 'dark' : 'light')
    } catch {
      // ignore storage failures
    }
  }

  return (
    <>
      {isDarkMode ? <StarBackground /> : <SakuraBackground />}

      <button
        onClick={toggleTheme}
        className={cn(
          'fixed top-5 right-5 z-50 rounded-full border border-border/70 bg-background/80 p-3 text-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-background',
          'focus:outline-hidden focus:ring-2 focus:ring-primary/70',
        )}
        aria-label={isDarkMode ? 'Switch to day mode' : 'Switch to night mode'}
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-amber-300" />
        ) : (
          <Moon className="h-5 w-5 text-sky-900" />
        )}
      </button>
    </>
  )
}
