import { useState } from 'react'

export const SakuraBackground = () => {
  const [petals] = useState(() => {
    const count = 20
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: 10 + Math.random() * 8,
      duration: 5 + Math.random() * 5,
      opacity: 0.5 + Math.random() * 0.5,
    }))
  })

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5] dark:hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura animate-sakura"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.5}px`,
            opacity: petal.opacity,
          }}
        />
      ))}
    </div>
  )
}