import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Building2,
  Cloud,
  BookOpen,
  Rocket,
} from 'lucide-react'
import { site } from '../data/site'
import { Button } from './common/Button'
import { cn } from '../lib/cn'

const social = [
  { href: site.github, label: 'GitHub', icon: Github },
  { href: site.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: `mailto:${site.email}`, label: 'Email', icon: Mail },
]

const credibility = [
  { icon: Building2, label: 'Amdocs', sub: 'Production' },
  { icon: Cloud, label: 'AWS', sub: 'Serverless' },
  { icon: Rocket, label: '4 Projects', sub: 'Shipped live' },
  { icon: BookOpen, label: 'ICTCS \'24', sub: 'Published' },
]

function FloatingOrb() {
  const reduce = useReducedMotion()
  return (
    <div
      className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-64 lg:w-64"
      aria-hidden
    >
      <motion.div
        className="absolute inset-4 rounded-full border border-cyan-glow/30 bg-gradient-to-br from-cyan-glow/20 via-purple-neon/10 to-blue-electric/20 shadow-[0_0_40px_rgba(0,217,255,0.18)]"
        animate={
          reduce
            ? undefined
            : { rotateY: [0, 12, -8, 0], rotateX: [0, -6, 4, 0] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border border-dashed border-purple-neon/25"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border border-cyan-glow/20"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
        <span className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-glow/90">
          React · Node · AWS
        </span>
        <span className="font-display text-[9px] font-medium uppercase tracking-[0.2em] text-indigo-soft/55">
          Full-stack · Cloud
        </span>
      </div>
    </div>
  )
}

export function Hero({ onConnect }) {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:px-6">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 px-3 py-1.5 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-glow/70 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-glow" />
            </span>
            <span className="font-display text-[11px] font-semibold uppercase tracking-widest text-cyan-glow">
              Available · Pune, India · Full-stack roles
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="font-display mt-5 text-[2rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[3.25rem] lg:text-6xl"
          >
            I ship{' '}
            <span className="text-gradient-holo">production-grade</span>
            <br />
            full-stack apps —
            <br className="hidden sm:block" />{' '}
            <span className="text-white">end to end.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-indigo-soft/90 sm:text-base md:text-lg"
          >
            Software Engineering Associate at{' '}
            <span className="font-semibold text-white">Amdocs</span>, building automation
            for a platform used in production. I&apos;ve shipped{' '}
            <span className="font-semibold text-white">4 full-stack projects</span> across{' '}
            <span className="font-semibold text-white">React</span>,{' '}
            <span className="font-semibold text-white">Node.js</span>, and{' '}
            <span className="font-semibold text-white">AWS</span> — including a peer-to-peer
            relay over WebSockets and a published serverless research paper.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3"
          >
            <Button
              type="button"
              variant="primary"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              See My Work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <a
              href={site.resumeUrl}
              download={site.resumeDownloadName}
              className={cn(
                'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200',
                'glass-panel text-indigo-soft hover:border-cyan-glow/50 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow focus-visible:ring-offset-2 focus-visible:ring-offset-space-navy',
              )}
            >
              <Download className="h-4 w-4" aria-hidden />
              Resume
            </a>
            <Button type="button" variant="outline" onClick={onConnect}>
              Let&apos;s Connect
            </Button>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.45 }}
            className="mt-7 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-4 sm:gap-3"
            aria-label="Credibility highlights"
          >
            {credibility.map((c) => {
              const Icon = c.icon
              return (
                <li
                  key={c.label}
                  className="glass-panel flex items-center gap-2.5 rounded-xl border border-white/10 px-3 py-2.5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-glow/25 bg-cyan-glow/10 text-cyan-glow">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-[13px] font-semibold text-white">
                      {c.label}
                    </span>
                    <span className="block truncate text-[10px] uppercase tracking-wider text-indigo-soft/65">
                      {c.sub}
                    </span>
                  </span>
                </li>
              )
            })}
          </motion.ul>

          <ul className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
            {social.map((item, i) => {
              const IconComponent = item.icon
              return (
                <motion.li
                  key={item.label}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.08, duration: 0.35 }}
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto') ? undefined : 'noreferrer noopener'}
                    className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-indigo-soft transition-all hover:-translate-y-0.5 hover:border-cyan-glow/45 hover:text-cyan-glow hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow"
                    aria-label={item.label}
                  >
                    <IconComponent className="h-4 w-4" aria-hidden />
                    {item.label}
                  </a>
                </motion.li>
              )
            })}
          </ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative order-first md:order-none"
        >
          <div
            className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-glow/10 via-transparent to-purple-neon/10 blur-2xl"
            aria-hidden
          />
          <FloatingOrb />
        </motion.div>
      </div>
    </section>
  )
}
