import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, animate } from 'framer-motion'
import { Calendar, Rocket, Trophy, Award } from 'lucide-react'
import { Card } from './common/Card'
import { SectionHeading } from './common/SectionHeading'

const stats = [
  {
    key: 'years',
    label: 'Years building production software',
    display: (v) => `${v.toFixed(1)}+`,
    target: 1.0,
    icon: Calendar,
    accent: 'text-cyan-glow',
  },
  {
    key: 'projects',
    label: 'Portfolio projects delivered',
    display: (v) => `${Math.round(v)}`,
    target: 5,
    icon: Rocket,
    accent: 'text-purple-neon',
  },
  {
    key: 'hackathons',
    label: 'Recent hackathon builds',
    display: () => '2',
    isStatic: true,
    icon: Trophy,
    accent: 'text-blue-electric',
  },
  {
    key: 'pub',
    label: 'Peer-reviewed publication',
    display: () => 'ICTCS \'24',
    isStatic: true,
    icon: Award,
    accent: 'text-cyan-glow',
  },
]

const hackathonDetails = [
  {
    name: 'Microsoft Hackathon',
    project: 'AgentSentinel',
    detail:
      'Built a runtime security monitoring layer for MCP-based agents with threat detection and live dashboarding.',
    tag: 'Security + Observability',
  },
  {
    name: 'Flipkart Challenge',
    project: 'ParkSense',
    detail:
      'Built an AI-driven parking enforcement intelligence system with explainable scoring, hotspot mapping, and dispatch simulation.',
    tag: 'Mobility + AI',
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
      <p ref={ref} className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
        {stat.display()}
      </p>
    )
  }

  const value = reduce ? stat.target : animated

  return (
    <p ref={ref} className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
      {stat.display(value)}
    </p>
  )
}

export function Stats() {
  const reduce = useReducedMotion()

  return (
    <section
      id="highlights"
      className="scroll-mt-24 px-4 py-14 sm:py-16 md:px-6 md:py-20"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="highlights-heading"
          eyebrow="Highlights"
          title="Track record at a glance"
          subtitle="Quick evidence of depth: production engineering experience, project delivery, and recent hackathon execution with domain-specific builds."
        />

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.key}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.06 * i, duration: 0.45 }}
              >
                <Card
                  glowClass="hover:-translate-y-1 hover:border-cyan-glow/35 hover:shadow-[0_0_24px_rgba(0,217,255,0.12)]"
                  className="h-full"
                >
                  <div className="flex items-start justify-between gap-3">
                    <StatValue stat={stat} />
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] ${stat.accent}`}
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-snug text-indigo-soft/80">{stat.label}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.12, duration: 0.45 }}
          className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-cyan-glow">
            Recent hackathon work
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {hackathonDetails.map((item) => (
              <article key={item.name} className="rounded-xl border border-white/10 bg-space-navy/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-soft/65">{item.name}</p>
                <h3 className="font-display mt-1 text-lg font-semibold text-white">{item.project}</h3>
                <p className="mt-2 text-sm leading-relaxed text-indigo-soft/80">{item.detail}</p>
                <span className="mt-3 inline-flex rounded-md border border-cyan-glow/25 bg-cyan-glow/10 px-2 py-0.5 text-[11px] font-medium text-cyan-glow">
                  {item.tag}
                </span>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
