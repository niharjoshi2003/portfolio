import { motion, useReducedMotion } from 'framer-motion'
import { Award, GraduationCap, BookOpen } from 'lucide-react'
import { education } from '../data/experience'
import { SectionHeading } from './common/SectionHeading'
import { Badge } from './common/Badge'

export function Education() {
  const reduce = useReducedMotion()

  return (
    <section
      id="education"
      className="scroll-mt-24 px-4 py-16 md:px-6 md:py-20"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="education-heading"
          eyebrow="Background"
          title="Education & research"
          subtitle="Engineering foundation with peer-reviewed work in serverless financial tech."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel flex gap-4 rounded-2xl border border-white/10 p-6"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-neon/30 bg-purple-neon/10 text-purple-neon"
              aria-hidden
            >
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">{education.degree}</h3>
              <p className="mt-1 text-sm text-indigo-soft/85">{education.school}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>CGPA {education.cgpa}</Badge>
                <Badge>Graduated {education.graduated}</Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.06 }}
            className="glass-panel flex gap-4 rounded-2xl border border-white/10 p-6"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow"
              aria-hidden
            >
              <BookOpen className="h-6 w-6" />
            </span>
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-glow">
                <Award className="h-4 w-4" aria-hidden />
                Published research
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold text-white">
                {education.publication.title}
              </h3>
              <p className="mt-1 text-sm text-indigo-soft/80">{education.publication.venue}</p>
              <p className="mt-3 text-sm leading-relaxed text-indigo-soft/85">
                {education.publication.note}
              </p>
              {education.publication.url ? (
                <a
                  href={education.publication.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-block text-sm font-medium text-cyan-glow underline-offset-4 hover:underline"
                >
                  View publication
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
