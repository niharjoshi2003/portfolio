import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, Rocket } from 'lucide-react'
import { site } from '../data/site'
import { Button } from './common/Button'
import { cn } from '../lib/cn'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar({ onConnect }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <motion.header
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-space-navy/75 backdrop-blur-xl"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow rounded-md"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow transition-shadow group-hover:shadow-[0_0_16px_rgba(0,217,255,0.35)]">
            <Rocket className="h-4 w-4" aria-hidden />
          </span>
          <span className="hidden sm:inline">{site.name.split(' ')[0]}.dev</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-soft/90 transition-colors hover:bg-white/5 hover:text-cyan-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="primary"
            className="hidden px-4 text-xs sm:inline-flex sm:text-sm"
            onClick={onConnect}
          >
            Let&apos;s Connect
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-indigo-soft lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-space-navy/95 lg:hidden"
          >
            <ul className="flex flex-col px-4 py-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={cn(
                      'block rounded-lg px-3 py-3 text-base font-medium text-indigo-soft hover:bg-white/5 hover:text-cyan-glow',
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button type="button" className="w-full" variant="primary" onClick={() => { setOpen(false); onConnect() }}>
                  Let&apos;s Connect
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
