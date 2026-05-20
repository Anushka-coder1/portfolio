import { useEffect, useMemo, useState } from 'react'

const getViewport = () => ({
  width: typeof window === 'undefined' ? 1440 : window.innerWidth,
  height: typeof window === 'undefined' ? 900 : window.innerHeight,
})

export const StarBackground = () => {
  const [viewport, setViewport] = useState(getViewport)

  useEffect(() => {
    let frameId = 0

    const handleResize = () => {
      cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(() => {
        setViewport(getViewport())
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const { stars, meteors } = useMemo(() => {
    const starCount = Math.min(
      110,
      Math.max(40, Math.floor((viewport.width * viewport.height) / 18000)),
    )

    const nextStars = Array.from({ length: starCount }, (_, index) => ({
      id: `star-${index}`,
      size: 1 + Math.random() * 2.4,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.35 + Math.random() * 0.6,
      duration: 2.8 + Math.random() * 4.6,
      delay: Math.random() * -5,
    }))

    const nextMeteors = Array.from({ length: 5 }, (_, index) => ({
      id: `meteor-${index}`,
      x: 8 + Math.random() * 72,
      y: Math.random() * 28,
      delay: Math.random() * -18,
      duration: 6 + Math.random() * 6,
      length: 120 + Math.random() * 90,
    }))

    return { stars: nextStars, meteors: nextMeteors }
  }, [viewport.height, viewport.width])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none hidden dark:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.9),rgba(15,23,42,0.68)_40%,rgba(2,6,23,0.95))]" />

      {stars.map((star) => (
        <span
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.length}px`,
            animationDuration: `${meteor.duration}s`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
