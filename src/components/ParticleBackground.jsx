import { motion, useReducedMotion } from 'framer-motion'

export function ParticleBackground() {
  const reduce = useReducedMotion()
  return reduce ? (
    <div className="pointer-events-none fixed inset-0 -z-10 mesh-bg opacity-95" aria-hidden />
  ) : (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-10 mesh-bg grid-bg opacity-95"
      aria-hidden
      animate={{ opacity: [0.93, 0.98, 0.93] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}
