import { motion, useReducedMotion } from 'framer-motion'

const DOTS = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  x: `${(i * 17) % 100}%`,
  y: `${(i * 23) % 100}%`,
  delay: (i % 8) * 0.15,
}))

export function ParticleBackground() {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10 mesh-bg opacity-90"
        aria-hidden
      />
    )
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 mesh-bg grid-bg opacity-95"
      aria-hidden
    >
      {DOTS.map((d) => (
        <motion.span
          key={d.id}
          className="absolute h-1 w-1 rounded-full bg-cyan-glow/40"
          style={{ left: d.x, top: d.y }}
          animate={{ opacity: [0.2, 0.85, 0.2], scale: [1, 1.4, 1] }}
          transition={{
            duration: 4 + (d.id % 5),
            repeat: Infinity,
            delay: d.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
