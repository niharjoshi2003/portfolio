import { motion, useReducedMotion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/experience'
import { SectionHeading } from './common/SectionHeading'

export function Experience() {
  const reduce = useReducedMotion()

  return (
    <section
      id="experience"
      className="scroll-mt-24 px-4 py-16 md:px-6 md:py-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience-heading"
          eyebrow="Career"
          title="Experience"
          subtitle="Production delivery at scale plus an internship foundation in React."
        />

        <div className="relative">
          <div
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-glow/50 via-purple-neon/40 to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ul className="relative space-y-10 md:space-y-14">
            {experience.map((job, i) => (
              <motion.li
                key={job.id}
                initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 1 ? 'md:[&>article]:col-start-2' : ''}`}
              >
                <span
                  className="absolute left-4 flex h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-glow bg-space-navy md:left-1/2 md:top-3"
                  aria-hidden
                />
                <article
                  className={`glass-panel ml-10 rounded-2xl border border-white/10 p-6 md:ml-0 ${
                    job.current
                      ? 'border-l-4 border-l-cyan-glow'
                      : 'border-l-4 border-l-purple-neon/60'
                  } ${i % 2 === 1 ? 'md:mr-8' : 'md:ml-8'}`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-glow/25 bg-cyan-glow/10 text-cyan-glow"
                      aria-hidden
                    >
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{job.role}</h3>
                      <p className="mt-1 text-sm text-cyan-glow/90">
                        {job.company}
                        {job.location ? ` · ${job.location}` : ''}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-indigo-soft/60">
                        {job.period}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-indigo-soft/88">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
                {i % 2 === 0 ? <div className="hidden md:block" aria-hidden /> : null}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
