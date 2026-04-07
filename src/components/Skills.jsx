import { motion, useReducedMotion } from 'framer-motion'
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

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section
      id="skills"
      className="scroll-mt-24 px-4 py-16 md:px-6 md:py-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="skills-heading"
          eyebrow="Capabilities"
          title="Technical skills"
          subtitle="Depth across frontend, backend, data stores, and shipping tooling—with measurable proficiency."
        />

        <div className="grid gap-10 md:grid-cols-2">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.06 * ci, duration: 0.45 }}
              className="glass-panel rounded-2xl border border-white/10 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-white">{cat.label}</h3>
              <ul className="mt-6 space-y-5" aria-label={`${cat.label} skills`}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
