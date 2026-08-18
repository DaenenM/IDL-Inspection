import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { cn } from '@/utils'

function ChevronIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 transition-transform duration-300 ease-out
                 group-open:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

/**
 * One collapsible panel, built on native <details>/<summary>.
 *
 * Using the native element rather than a state-driven div gives correct
 * keyboard handling, screen-reader semantics, and in-page find for free, and
 * the panel still works if JS fails to load.
 *
 * The panel opens itself when the URL hash matches its `id`, so a link to
 * /services#ultrasonic-testing both scrolls here and expands the content.
 * <details> is uncontrolled, so this is done imperatively: binding `open` to a
 * prop would fight the user's own clicks.
 */
export function AccordionItem({
  id,
  title,
  summary,
  defaultOpen = false,
  children,
  className,
}) {
  const ref = useRef(null)
  const { hash } = useLocation()

  useEffect(() => {
    // Strip the leading '#'. decodeURIComponent guards against ids that get
    // percent-encoded in the address bar.
    const target = decodeURIComponent(hash.slice(1))
    if (!target || target !== id) return

    const el = ref.current
    if (!el) return

    el.open = true
    // Wait a frame so the expanded height is measured before scrolling,
    // otherwise the panel lands part-way up the viewport.
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [hash, id])

  return (
    <details
      ref={ref}
      id={id}
      // Initial state only. Passing `undefined` rather than `false` leaves the
      // attribute off entirely, so React never reasserts it and clobbers a
      // panel the user (or the hash effect) opened.
      open={defaultOpen || undefined}
      className={cn(
        'group overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm',
        // scroll-mt keeps the sticky header from covering the panel when it is
        // reached via an anchor link.
        'scroll-mt-28',
        className,
      )}
    >
      <summary
        className="flex cursor-pointer list-none items-center justify-between gap-4 p-6
                   transition-colors duration-200 hover:bg-base-200/60
                   focus-visible:outline-2 focus-visible:outline-offset-[-2px]
                   focus-visible:outline-accent
                   [&::-webkit-details-marker]:hidden"
      >
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          {summary && (
            <p className="mt-1 text-sm text-base-content/70">{summary}</p>
          )}
        </div>
        <span className="text-base-content/55 transition-colors group-open:text-accent">
          <ChevronIcon />
        </span>
      </summary>

      <div className="border-t border-base-300 px-6 pb-7 pt-6">{children}</div>
    </details>
  )
}

/**
 * Vertical stack of AccordionItems. Panels open independently, so a reader can
 * compare two services side by side.
 */
export function Accordion({ className, ...props }) {
  return <div className={cn('flex flex-col gap-4', className)} {...props} />
}
