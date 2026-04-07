import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../data/site'
import { Button } from './common/Button'
import { cn } from '../lib/cn'

const headlineWords = [
  'Full-Stack',
  'Developer',
  '·',
  'React',
  '·',
  'Node.js',
  '·',
  'Scalable',
  'Web',
  'Apps',
]

const social = [
  { href: site.github, label: 'GitHub', icon: Github },
  { href: site.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: `mailto:${site.email}`, label: 'Email', icon: Mail },
]

function FloatingOrb() {
  const reduce = useReducedMotion()
  return (
    <div className="relative mx-auto h-48 w-48 md:h-56 md:w-56" aria-hidden>
      <motion.div
        className="absolute inset-4 rounded-full border border-cyan-glow/30 bg-gradient-to-br from-cyan-glow/20 via-purple-neon/10 to-blue-electric/20 shadow-[0_0_40px_rgba(0,217,255,0.15)]"
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
      <div className="absolute inset-0 flex items-center justify-center font-display text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-glow/90">
        React · Node · AWS
      </div>
    </div>
  )
}

export function Hero({ onConnect }) {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-32 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:px-6">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-display text-sm font-medium tracking-widest text-cyan-glow uppercase"
          >
            Pune, India · Open to full-stack roles
          </motion.p>

          <h1
            id="hero-heading"
            className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.4 }}
                className={`inline-block ${word === '·' ? 'mx-1 text-cyan-glow/80' : ''}`}
              >
                {word}{' '}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-indigo-soft/90 sm:text-lg"
          >
            Crafting modern solutions for real-world problems. Expert in{' '}
            <span className="text-gradient-holo font-medium">React</span>,{' '}
            <span className="text-white">Node.js</span>, and{' '}
            <span className="text-white">AWS</span>—shipping production systems recruiters can trust.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              type="button"
              variant="primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
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
              Download Resume
            </a>
            <Button type="button" variant="outline" onClick={onConnect}>
              Let&apos;s Connect
            </Button>
          </motion.div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {social.map((item, i) => {
              const IconComponent = item.icon
              return (
                <motion.li
                  key={item.label}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.1, duration: 0.35 }}
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
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-glow/10 via-transparent to-purple-neon/10 blur-2xl" aria-hidden />
          <FloatingOrb />
        </motion.div>
      </div>
    </section>
  )
}
