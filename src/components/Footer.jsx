import { Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../data/site'

const quick = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-space-navy-light/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-display text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-indigo-soft/80">
            Software developer shipping production-grade full-stack and agentic systems with
            React, Node.js, and Python. Currently at Amdocs and open to software developer
            roles.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {quick.map((q) => (
              <li key={q.href}>
                <a
                  href={q.href}
                  className="text-sm text-indigo-soft/90 underline-offset-4 hover:text-cyan-glow hover:underline"
                >
                  {q.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex gap-3">
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-indigo-soft transition-all hover:border-cyan-glow/50 hover:text-cyan-glow hover:shadow-[0_0_16px_rgba(0,217,255,0.25)]"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-indigo-soft transition-all hover:border-cyan-glow/50 hover:text-cyan-glow hover:shadow-[0_0_16px_rgba(0,217,255,0.25)]"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-indigo-soft transition-all hover:border-cyan-glow/50 hover:text-cyan-glow hover:shadow-[0_0_16px_rgba(0,217,255,0.25)]"
                aria-label={`Email ${site.email}`}
              >
                <Mail className="h-5 w-5" aria-hidden />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-indigo-soft/60">
        © {year} {site.name}. Designed and engineered from scratch — no templates, no shortcuts.
      </div>
    </footer>
  )
}
