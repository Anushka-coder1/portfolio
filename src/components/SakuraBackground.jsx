import { useEffect, useState } from 'react'

export const SakuraBackground = () => {
  const [petals, setPetals] = useState([])

  useEffect(() => {
    const count = 14
    const newPetals = []

    for (let i = 0; i < count; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        size: 10 + Math.random() * 6,
        duration: 8 + Math.random() * 6,
      })
    }

    setPetals(newPetals)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 dark:hidden">
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
          }}
        />
      ))}
    </div>
  )
}
