import { cn } from '../../lib/cn'

export function Card({ className, children, glowClass }) {
  return (
    <div
      className={cn(
        'glass-panel relative overflow-hidden rounded-2xl p-6 transition-all duration-300',
        glowClass,
        className,
      )}
    >
      {children}
    </div>
  )
}
