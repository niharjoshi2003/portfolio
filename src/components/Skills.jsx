import { motion, useReducedMotion } from 'framer-motion'
import { Monitor, Server, Database, Wrench } from 'lucide-react'
import { skillCategories } from '../data/skills'
import { SectionHeading } from './common/SectionHeading'
import { cn } from '../lib/cn'

const barColor = {
  'blue-electric': 'bg-blue-electric',
  'purple-neon': 'bg-purple-neon',
  'cyan-glow': 'bg-cyan-glow',
  'indigo-soft': 'bg-indigo-soft',
}

const barGlow = {
  'blue-electric': 'shadow-[0_0_12px_rgba(14,165,233,0.45)]',
  'purple-neon': 'shadow-[0_0_12px_rgba(168,85,247,0.45)]',
  'cyan-glow': 'shadow-[0_0_12px_rgba(0,217,255,0.45)]',
  'indigo-soft': 'shadow-[0_0_12px_rgba(224,231,255,0.35)]',
}

const iconBg = {
  'blue-electric': 'border-blue-electric/30 bg-blue-electric/10 text-blue-electric',
  'purple-neon': 'border-purple-neon/30 bg-purple-neon/10 text-purple-neon',
  'cyan-glow': 'border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow',
  'indigo-soft': 'border-indigo-soft/30 bg-indigo-soft/10 text-indigo-soft',
}

const iconMap = {
  monitor: Monitor,
  server: Server,
  database: Database,
  wrench: Wrench,
}

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section
      id="skills"
      className="scroll-mt-24 px-4 py-14 sm:py-16 md:px-6 md:py-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="skills-heading"
          eyebrow="Capabilities"
          title="The full-stack toolkit"
          subtitle="Depth across the entire stack — frontend, backend, data, and cloud — with proficiency levels grounded in shipped projects, not tutorials."
        />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
          {skillCategories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] ?? Monitor
            return (
              <motion.div
                key={cat.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: 0.06 * ci, duration: 0.45 }}
                className="glass-panel rounded-2xl border border-white/10 p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border',
                      iconBg[cat.color],
                    )}
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{cat.label}</h3>
                </div>

                <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-5" aria-label={`${cat.label} skills`}>
                  {cat.skills.map((skill, si) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="text-indigo-soft/90">{skill.name}</span>
                        <span className="font-display text-xs font-semibold text-cyan-glow/90">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"
                        role="presentation"
                        aria-hidden
                      >
                        <motion.div
                          className={cn(
                            'h-full rounded-full',
                            barColor[cat.color],
                            barGlow[cat.color],
                          )}
                          initial={reduce ? false : { width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            duration: reduce ? 0 : 0.9,
                            delay: reduce ? 0 : 0.08 * si + 0.05 * ci,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
