import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Copy, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '../data/site'
import { SectionHeading } from './common/SectionHeading'
import { Button } from './common/Button'

export function Contact({ onOpenModal }) {
  const [copied, setCopied] = useState(false)
  const reduce = useReducedMotion()

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 py-16 md:px-6 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact-heading"
          eyebrow="Get in touch"
          title="Let's build something worth shipping"
          subtitle="Actively interviewing for full-stack and software engineer roles where ownership, craft, and customer impact actually matter. Replies within one business day."
        />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-cyan-glow/20 via-space-navy-light/90 to-purple-neon/15 p-[1px] shadow-[0_0_40px_rgba(0,217,255,0.08)]"
        >
          <div className="rounded-2xl bg-space-navy/95 p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-display text-sm font-medium text-cyan-glow">Direct lines</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  For recruiters & hiring managers
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-indigo-soft/85">
                  Looking for a builder who owns problems end-to-end? Drop me a line — email, phone,
                  or the form below. I respond within one business day, every time.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button type="button" variant="primary" onClick={onOpenModal}>
                    Open contact form
                  </Button>
                  <Button type="button" variant="secondary" onClick={copyEmail}>
                    <Copy className="h-4 w-4" aria-hidden />
                    {copied ? 'Copied!' : 'Copy email'}
                  </Button>
                </div>
              </div>

              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-cyan-glow/40"
                  >
                    <Mail className="h-5 w-5 text-cyan-glow" aria-hidden />
                    <span className="text-indigo-soft/90 group-hover:text-white">{site.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, '')}`}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-cyan-glow/40"
                  >
                    <Phone className="h-5 w-5 text-cyan-glow" aria-hidden />
                    <span className="text-indigo-soft/90 group-hover:text-white">{site.phone}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <MapPin className="h-5 w-5 text-cyan-glow" aria-hidden />
                  <span className="text-indigo-soft/90">{site.location}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-8">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-medium text-cyan-glow underline-offset-4 hover:underline"
              >
                LinkedIn profile
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-medium text-cyan-glow underline-offset-4 hover:underline"
              >
                GitHub profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
