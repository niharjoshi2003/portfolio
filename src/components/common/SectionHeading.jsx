import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

export function SectionHeading({ eyebrow, title, subtitle, className, id }) {
  const reduce = useReducedMotion()

  return (
    <div className={cn('mb-12 max-w-3xl', className)}>
      {eyebrow ? (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4 }}
          className="font-display text-sm font-medium tracking-widest text-cyan-glow uppercase"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        id={id}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="font-display mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl"
      >
        {title}
        <span
          className="mt-4 block h-0.5 w-20 rounded-full bg-cyan-glow/70"
          aria-hidden
        />
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-4 text-base leading-relaxed text-indigo-soft/85"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}
