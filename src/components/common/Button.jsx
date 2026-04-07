import { forwardRef } from 'react'
import { buttonVariants } from '../../lib/buttonVariants'
import { cn } from '../../lib/cn'

export const Button = forwardRef(function Button(
  { className, variant = 'primary', children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow focus-visible:ring-offset-2 focus-visible:ring-offset-space-navy disabled:pointer-events-none disabled:opacity-50',
        buttonVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
})
