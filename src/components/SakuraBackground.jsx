import { useMemo } from 'react'

const PETAL_COUNT = 18

export const SakuraBackground = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        scale: 0.7 + Math.random() * 0.9,
        delay: Math.random() * -16,
        duration: 14 + Math.random() * 8,
        drift: 40 + Math.random() * 120,
        sway: 4 + Math.random() * 5,
        opacity: 0.45 + Math.random() * 0.35,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none dark:hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_45%),linear-gradient(180deg,rgba(255,244,248,0.85),rgba(255,250,252,0))]" />
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="sakura animate-sakura"
          style={{
            left: `${petal.left}%`,
            top: '-12%',
            opacity: petal.opacity,
            scale: petal.scale,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            '--sakura-drift': `${petal.drift}px`,
            '--sakura-sway': `${petal.sway}deg`,
          }}
        />
      ))}
    </div>
  )
}
