import { useEffect, useState } from 'react'
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

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export function Navbar({ onConnect }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()
  const active = useActiveSection(links.map((l) => l.href.slice(1)))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors',
        scrolled
          ? 'border-white/10 bg-space-navy/85 shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
          : 'border-white/5 bg-space-navy/60',
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="group flex items-center gap-2 rounded-md font-display text-sm font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow transition-shadow group-hover:shadow-[0_0_16px_rgba(0,217,255,0.35)]">
            <Rocket className="h-4 w-4" aria-hidden />
          </span>
          <span className="hidden sm:inline">{site.name.split(' ')[0]}.dev</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1)
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow',
                    isActive
                      ? 'text-cyan-glow'
                      : 'text-indigo-soft/85 hover:bg-white/5 hover:text-cyan-glow',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {l.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-[1] rounded-lg bg-cyan-glow/10 ring-1 ring-cyan-glow/25"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  ) : null}
                </a>
              </li>
            )
          })}
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-indigo-soft transition-colors hover:bg-white/5 lg:hidden"
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
              {links.map((l) => {
                const isActive = active === l.href.slice(1)
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={cn(
                        'block rounded-lg px-3 py-3 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-cyan-glow/10 text-cyan-glow ring-1 ring-cyan-glow/25'
                          : 'text-indigo-soft hover:bg-white/5 hover:text-cyan-glow',
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                )
              })}
              <li className="pt-2">
                <Button
                  type="button"
                  className="w-full"
                  variant="primary"
                  onClick={() => {
                    setOpen(false)
                    onConnect()
                  }}
                >
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
