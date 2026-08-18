import { Link } from 'react-router'
import { ROUTES } from '@/constants'

/**
 * Shared accordion panel body, used by both the Services and NDT Training
 * pages. Both render the same shape: a heading, prose, then named lists whose
 * `style` picks how the items are drawn.
 */

// ── Icons ─────────────────────────────────────────────────────────────────────

export function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

// ── Sections ──────────────────────────────────────────────────────────────────

/**
 * One named list inside a panel. `style` picks the rendering: full sentences
 * get a tick per row, short terms become chips, and resources become links.
 */
export function DetailSection({ title, style, items }) {
  if (!items?.length) return null

  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>

      {style === 'chips' && (
        <div className="flex flex-wrap gap-2.5">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-base-300 bg-base-200 px-4 py-2
                         text-sm font-medium text-base-content/80"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {style === 'checks' && (
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3">
              <CheckIcon />
              <span className="leading-relaxed text-base-content/80">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {style === 'links' && (
        <ul className="flex flex-col gap-2.5">
          {items.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 font-medium text-primary
                           underline-offset-4 transition-colors hover:underline"
              >
                {label}
                <ExternalIcon />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ── Panel body ────────────────────────────────────────────────────────────────

/**
 * Renders one entry's detail. Entries without supplied copy show a short
 * placeholder instead, so the page never presents invented technical claims
 * as IDL's own.
 *
 * `noun` is used in that placeholder sentence, e.g. "our ultrasonic testing
 * course" vs "our ultrasonic testing services".
 */
export function DetailPanel({ item, noun = 'services' }) {
  if (item.draft) {
    return (
      <div className="flex flex-col items-start gap-4">
        <p className="text-base-content/70">
          Detailed information about our {item.title.toLowerCase()} {noun} is
          coming soon. Get in touch and we will be glad to answer any questions in
          the meantime.
        </p>
        <Link to={ROUTES.CONTACT} className="btn btn-primary btn-sm font-semibold">
          Contact Us
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      {item.heading && (
        <h4 className="text-xl font-semibold text-base-content">{item.heading}</h4>
      )}

      {item.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="leading-relaxed text-base-content/80">
          {paragraph}
        </p>
      ))}

      {item.sections?.map((section) => (
        <DetailSection key={section.title} {...section} />
      ))}
    </div>
  )
}
