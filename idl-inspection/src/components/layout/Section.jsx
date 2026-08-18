import { cn } from '@/utils'

/**
 * One horizontal band of a page: consistent max width, gutters, and vertical
 * rhythm. `className` sets the band's own background so alternating sections
 * can differ.
 */
export function Section({ className, innerClassName, ...props }) {
  return (
    <section className={cn('px-6 py-16 md:px-10 md:py-20', className)}>
      <div className={cn('mx-auto max-w-7xl', innerClassName)} {...props} />
    </section>
  )
}

/**
 * Eyebrow + heading pair used at the top of most sections.
 */
export function SectionHeader({ eyebrow, title, children, className }) {
  return (
    <div className={cn('max-w-3xl', className)}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-base-content/70">{children}</p>}
    </div>
  )
}
