import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Github, Sparkles, Radio, Gauge } from 'lucide-react'
import { projects } from '../data/projects'
import { Badge } from './common/Badge'
import { buttonVariants } from '../lib/buttonVariants'
import { SectionHeading } from './common/SectionHeading'
import { cn } from '../lib/cn'

const accentRing = {
  cyan: 'hover:border-cyan-glow/50 hover:shadow-[0_0_32px_rgba(0,217,255,0.22)]',
  purple: 'hover:border-purple-neon/50 hover:shadow-[0_0_32px_rgba(168,85,247,0.22)]',
  blue: 'hover:border-blue-electric/50 hover:shadow-[0_0_32px_rgba(14,165,233,0.22)]',
}

const visualGrad = {
  cyan: 'from-cyan-glow/30 via-blue-electric/15 to-space-navy',
  purple: 'from-purple-neon/30 via-cyan-glow/10 to-space-navy',
  blue: 'from-blue-electric/30 via-purple-neon/10 to-space-navy',
}

const accentText = {
  cyan: 'text-cyan-glow',
  purple: 'text-purple-neon',
  blue: 'text-blue-electric',
}

const accentDot = {
  cyan: 'bg-cyan-glow shadow-[0_0_12px_rgba(0,217,255,0.65)]',
  purple: 'bg-purple-neon shadow-[0_0_12px_rgba(168,85,247,0.65)]',
  blue: 'bg-blue-electric shadow-[0_0_12px_rgba(14,165,233,0.65)]',
}

const linkBtn =
  'inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow focus-visible:ring-offset-2 focus-visible:ring-offset-space-navy'

function ProjectVisual({ project }) {
  const initials = project.title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className={cn(
        'relative flex aspect-[16/10] w-full items-end overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br p-5 sm:aspect-[16/9] md:aspect-auto md:min-h-[260px]',
        visualGrad[project.accent],
      )}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 flex w-full items-end justify-between gap-3">
        <div>
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
            {project.year ? `Project · ${project.year}` : 'Project'}
          </p>
          <p className={cn('font-display mt-2 text-5xl font-bold leading-none sm:text-6xl', accentText[project.accent])}>
            {initials}
          </p>
        </div>

        {project.hasLive && project.liveUrl ? (
          <span className="flex items-center gap-2 rounded-full border border-white/15 bg-space-navy/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur">
            <span className={cn('h-1.5 w-1.5 rounded-full', accentDot[project.accent])} />
            Live
          </span>
        ) : project.comingSoon ? (
          <span className="rounded-full border border-white/15 bg-space-navy/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur">
            Soon
          </span>
        ) : null}
      </div>
    </div>
  )
}

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-14 sm:py-16 md:px-6 md:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects-heading"
          eyebrow="Selected work"
          title="Things I've built and shipped"
          subtitle="Recent work across shipped products and hackathon builds — from full-stack platforms and production CRM tooling to agentic AI security monitoring and real-time intelligence systems."
        />

        <div className="grid gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className={cn(
                'glass-panel relative overflow-hidden rounded-2xl border border-white/10 p-5 transition-all duration-300 sm:p-6 md:p-8',
                'hover:-translate-y-1 sm:hover:-translate-y-2',
                accentRing[project.accent],
              )}
            >
              {project.featured ? (
                <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-cyan-glow/40 bg-cyan-glow/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-glow backdrop-blur">
                  <Sparkles className="h-3 w-3" aria-hidden />
                  New
                </span>
              ) : null}

              <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:gap-8 md:items-center lg:gap-10">
                <ProjectVisual project={project} />

                <div className="min-w-0">
                  <p className={cn('font-display text-xs font-medium uppercase tracking-wider', accentText[project.accent])}>
                    {project.subtitle}
                  </p>
                  <h3 className="font-display mt-1.5 text-2xl font-semibold text-white sm:text-[1.625rem] md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-indigo-soft/85 sm:text-[15px] md:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-indigo-soft/90">
                    {project.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className={cn('shrink-0', accentText[project.accent])} aria-hidden>
                          ✓
                        </span>
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {project.stats?.length ? (
                    <div className="mt-5">
                      <p
                        className={cn(
                          'flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider',
                          accentText[project.accent],
                        )}
                      >
                        <Gauge className="h-3.5 w-3.5" aria-hidden />
                        Impact snapshot
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {project.stats.map((s) => (
                          <span
                            key={s}
                            className="rounded-md border border-white/12 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-indigo-soft/90"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                    {project.hasLive && project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={cn(linkBtn, buttonVariants.primary)}
                      >
                        <Radio className="h-4 w-4" aria-hidden />
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
                      <span className="inline-flex min-h-11 items-center rounded-lg border border-dashed border-white/20 px-4 text-xs font-medium text-indigo-soft/70 sm:text-sm">
                        Source coming soon
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
