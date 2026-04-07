import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, animate } from 'framer-motion'
import { Card } from './common/Card'
import { SectionHeading } from './common/SectionHeading'

const stats = [
  {
    key: 'years',
    label: 'Years of software development',
    display: (v) => `${v.toFixed(1)}+`,
    target: 1.5,
  },
  {
    key: 'projects',
    label: 'Major projects shipped',
    display: (v) => `${Math.round(v)}`,
    target: 3,
  },
  {
    key: 'stack',
    label: 'React & Node.js expertise',
    display: () => 'React & Node',
    isStatic: true,
  },
  {
    key: 'arch',
    label: 'Full-stack architecture',
    display: () => 'FE → BE → DB',
    isStatic: true,
  },
]

function StatValue({ stat }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.45 })
  const reduce = useReducedMotion()
  const [animated, setAnimated] = useState(0)

  const shouldAnimate = !stat.isStatic && stat.target != null && !reduce

  useEffect(() => {
    if (!shouldAnimate || !inView) return
    const ctrl = animate(0, stat.target, {
      duration: 1.15,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setAnimated(v),
    })
    return () => ctrl.stop()
  }, [inView, stat.target, shouldAnimate])

  if (stat.isStatic) {
    return (
      <p ref={ref} className="font-display text-2xl font-bold text-cyan-glow md:text-3xl">
        {stat.display()}
      </p>
    )
  }

  const value = reduce ? stat.target : animated

  return (
    <p ref={ref} className="font-display text-2xl font-bold text-white md:text-3xl">
      {stat.display(value)}
    </p>
  )
}

export function Stats() {
  const reduce = useReducedMotion()

  return (
    <section
      id="highlights"
      className="scroll-mt-24 px-4 py-16 md:px-6 md:py-20"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="highlights-heading"
          eyebrow="Highlights"
          title="Impact in numbers"
          subtitle="Production experience across automation platforms, full-stack apps, and cloud architecture."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.08 * i, duration: 0.45 }}
            >
              <Card
                glowClass="hover:-translate-y-1 hover:border-cyan-glow/35 hover:shadow-[0_0_24px_rgba(0,217,255,0.12)]"
                className="h-full"
              >
                <StatValue stat={stat} />
                <p className="mt-3 text-sm leading-snug text-indigo-soft/80">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
