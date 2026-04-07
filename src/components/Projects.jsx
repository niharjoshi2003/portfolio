import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'
import { Badge } from './common/Badge'
import { buttonVariants } from '../lib/buttonVariants'
import { SectionHeading } from './common/SectionHeading'
import { cn } from '../lib/cn'

const accentRing = {
  cyan: 'hover:border-cyan-glow/50 hover:shadow-[0_0_28px_rgba(0,217,255,0.18)]',
  purple: 'hover:border-purple-neon/50 hover:shadow-[0_0_28px_rgba(168,85,247,0.2)]',
  blue: 'hover:border-blue-electric/50 hover:shadow-[0_0_28px_rgba(14,165,233,0.18)]',
}

const panelGrad = {
  cyan: 'from-cyan-glow/25 to-blue-electric/5',
  purple: 'from-purple-neon/25 to-cyan-glow/5',
  blue: 'from-blue-electric/25 to-purple-neon/5',
}

const linkBtn =
  'inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow focus-visible:ring-offset-2 focus-visible:ring-offset-space-navy'

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-16 md:px-6 md:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects-heading"
          eyebrow="Portfolio"
          title="Featured projects"
          subtitle="Shipped products from habit tracking to distribution ops and serverless data pipelines."
        />

        <div className="grid gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
              className={cn(
                'glass-panel relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-300 md:p-8',
                'hover:-translate-y-2',
                accentRing[project.accent],
              )}
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
                <div>
                  <p className="font-display text-xs font-medium uppercase tracking-wider text-cyan-glow/90">
                    {project.subtitle}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-white md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-indigo-soft/88 md:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-indigo-soft/90">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-cyan-glow" aria-hidden>
                          ✓
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.hasLive && project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={cn(linkBtn, buttonVariants.primary)}
                      >
                        View Live
                        <ExternalLink className="h-4 w-4" aria-hidden />
                      </a>
                    ) : null}
                    {project.hasRepo && project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={cn(linkBtn, buttonVariants.secondary)}
                      >
                        <Github className="h-4 w-4" aria-hidden />
                        View Code
                      </a>
                    ) : null}
                    {project.comingSoon ? (
                      <span className="inline-flex min-h-11 items-center rounded-lg border border-dashed border-white/20 px-4 text-sm text-indigo-soft/70">
                        GitHub: coming soon
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div
                    className={cn(
                      'col-span-2 flex min-h-[140px] items-end rounded-xl border border-white/10 bg-gradient-to-br p-4 sm:min-h-[160px]',
                      panelGrad[project.accent],
                    )}
                  >
                    <p className="font-display text-xs font-medium uppercase tracking-widest text-white/80">
                      Product UI
                    </p>
                  </div>
                  {project.stats.slice(0, 2).map((s) => (
                    <div
                      key={s}
                      className="flex min-h-[100px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center text-xs font-medium text-indigo-soft/85"
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
