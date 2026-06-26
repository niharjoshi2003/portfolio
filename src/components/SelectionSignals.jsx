import { motion, useReducedMotion } from 'framer-motion'
import { Palette, Layers3, Wrench, MessageSquareText, ShieldCheck } from 'lucide-react'
import { SectionHeading } from './common/SectionHeading'
import { cn } from '../lib/cn'

const signals = [
  {
    id: 'design',
    title: 'Design with intent',
    detail:
      'A custom visual language built from reusable primitives (glass panels, gradients, motion), not a template swap.',
    icon: Palette,
    accent: 'text-cyan-glow',
  },
  {
    id: 'architecture',
    title: 'System-level thinking',
    detail:
      'Projects emphasize architecture choices, trade-offs, and explainability rather than only UI snapshots.',
    icon: Layers3,
    accent: 'text-purple-neon',
  },
  {
    id: 'execution',
    title: 'Execution proof',
    detail:
      'Entries include shipped products, hackathon builds, and production work with measurable outcomes.',
    icon: Wrench,
    accent: 'text-blue-electric',
  },
  {
    id: 'communication',
    title: 'Clear technical communication',
    detail:
      'Each project description is structured to quickly answer what was built, why it mattered, and how it worked.',
    icon: MessageSquareText,
    accent: 'text-cyan-glow',
  },
  {
    id: 'readiness',
    title: 'Hiring-panel readiness',
    detail:
      'The portfolio is optimized for skim speed: quick credibility scan for HR and deep technical depth for engineers.',
    icon: ShieldCheck,
    accent: 'text-purple-neon',
  },
]

export function SelectionSignals() {
  const reduce = useReducedMotion()

  return (
    <section
      id="selection"
      className="scroll-mt-24 px-4 py-14 sm:py-16 md:px-6 md:py-20"
      aria-labelledby="selection-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="selection-heading"
          eyebrow="Selection Signals"
          title="Why this portfolio stands out"
          subtitle="Structured for real review panels: concise readability for recruiters and architecture depth for software developer hiring teams."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signals.map((signal, i) => {
            const Icon = signal.icon
            return (
              <motion.article
                key={signal.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="glass-panel rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-glow/30"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]',
                      signal.accent,
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">{signal.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-indigo-soft/85">{signal.detail}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
