import { cn } from '../../lib/cn'

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-indigo-soft/90',
        className,
      )}
    >
      {children}
    </span>
  )
}
