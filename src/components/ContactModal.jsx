import { useEffect, useId, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { site } from '../data/site'
import { Button } from './common/Button'

export function ContactModal({ open, onClose }) {
  const reduce = useReducedMotion()
  const titleId = useId()
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) panelRef.current?.querySelector('input')?.focus()
  }, [open])

  function submit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const message = String(fd.get('message') || '').trim()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}\n\n— Sent from ${site.url}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    onClose()
  }

  return (
    <AnimatePresence>
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          role="presentation"
        >
          <motion.button
            type="button"
            aria-label="Close contact dialog"
            className="absolute inset-0 bg-space-navy/80 backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg rounded-2xl border border-cyan-glow/25 bg-space-navy-light/95 p-6 shadow-[0_0_40px_rgba(0,217,255,0.12)] backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={titleId} className="font-display text-xl font-semibold text-white">
                  Let&apos;s work together
                </h2>
                <p className="mt-2 text-sm text-indigo-soft/85">
                  Share a short note—your mail client will open with the details pre-filled.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-white/10 p-2 text-indigo-soft transition-colors hover:border-cyan-glow/40 hover:text-cyan-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow"
                aria-label="Close"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <form className="mt-6 space-y-4" onSubmit={submit}>
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-indigo-soft">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-shadow placeholder:text-indigo-soft/40 focus:border-cyan-glow/60 focus:ring-2 focus:ring-cyan-glow/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-indigo-soft">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-shadow placeholder:text-indigo-soft/40 focus:border-cyan-glow/60 focus:ring-2 focus:ring-cyan-glow/30"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-medium text-indigo-soft">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-y rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-shadow placeholder:text-indigo-soft/40 focus:border-cyan-glow/60 focus:ring-2 focus:ring-cyan-glow/30"
                  placeholder="Role, timeline, and what you are building…"
                />
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" variant="primary">
                  Open email draft
                </Button>
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
