import { Link } from 'react-router'
import {
  COMPANY,
  COMPANY_ADDRESS,
  COMPANY_PHONE_HREF,
  MAP_LINK_URL,
  ROUTES,
} from '@/constants'
import {
  ACCREDITATIONS,
  FOOTER_COLUMNS,
  FOOTER_TAGLINE,
} from '@/data/footer'
import { openHashTarget } from '@/utils'

// ── Icons ─────────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

// ── Pieces ────────────────────────────────────────────────────────────────────

const LINK_CLASS =
  'text-sm text-neutral-content/65 underline-offset-4 transition-colors duration-150 hover:text-neutral-content hover:underline'

function ColumnHeading({ children }) {
  return (
    <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral-content">
      {children}
    </h3>
  )
}

/** Contact row: icon plus a value that may or may not be a link. */
function ContactRow({ icon, children }) {
  return (
    <li className="flex gap-3 text-neutral-content/65">
      <span className="text-accent">{icon}</span>
      <span className="min-w-0 text-sm">{children}</span>
    </li>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      {/* ── Main columns ── */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Identity and contact */}
          <div className="lg:col-span-4">
            <Link
              to={ROUTES.HOME}
              className="text-lg font-bold tracking-tight text-neutral-content
                         transition-opacity hover:opacity-80"
            >
              {COMPANY.name}
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-content/65">
              {FOOTER_TAGLINE}
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              <ContactRow icon={<PinIcon />}>
                <a
                  href={MAP_LINK_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline-offset-4 transition-colors hover:text-neutral-content hover:underline"
                >
                  {COMPANY_ADDRESS}
                </a>
              </ContactRow>

              <ContactRow icon={<PhoneIcon />}>
                <a
                  href={COMPANY_PHONE_HREF}
                  className="underline-offset-4 transition-colors hover:text-neutral-content hover:underline"
                >
                  {COMPANY.phone}
                </a>
              </ContactRow>

              <ContactRow icon={<MailIcon />}>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-words underline-offset-4 transition-colors hover:text-neutral-content hover:underline"
                >
                  {COMPANY.email}
                </a>
              </ContactRow>

              <ContactRow icon={<ClockIcon />}>{COMPANY.hours}</ContactRow>
            </ul>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map(({ title, links }) => (
            <nav key={title} aria-label={title} className="lg:col-span-2">
              <ColumnHeading>{title}</ColumnHeading>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, to, muted }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      // Footer links into the accordions need the same
                      // open-and-scroll handling as the nav dropdowns.
                      onClick={openHashTarget}
                      className={`${LINK_CLASS} ${muted ? 'font-semibold text-neutral-content/80' : ''}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Call to action */}
          <div className="md:col-span-2 lg:col-span-2">
            <ColumnHeading>Get in Touch</ColumnHeading>
            <p className="text-sm leading-relaxed text-neutral-content/65">
              Questions about a service, or ready to book a course?
            </p>
            <Link
              to={ROUTES.CONTACT}
              className="btn btn-accent btn-sm mt-4 font-semibold shadow-sm
                         transition-all duration-200 ease-out hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ── Accreditations ── */}
      <div className="border-t border-neutral-content/10">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral-content/50">
            Certifications & Accreditations
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {ACCREDITATIONS.map(({ label, detail }) => (
              <li
                key={label}
                className="rounded-lg border border-neutral-content/15 bg-neutral-content/5
                           px-3.5 py-2 text-sm"
              >
                <span className="font-semibold text-neutral-content">{label}</span>
                {/* Detail is supporting text, so it drops on narrow screens
                    rather than wrapping each chip onto two lines. */}
                <span className="hidden text-neutral-content/55 sm:inline">
                  {' '}
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Legal ── */}
      <div className="border-t border-neutral-content/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs
                        text-neutral-content/50 md:flex-row md:items-center
                        md:justify-between md:px-10">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            Serving the Petrochemical, Refinery, Pipeline, Pulp &amp; Paper, Power
            Generation, Pharmaceutical, Aerospace, and Automotive industries.
          </p>
        </div>
      </div>
    </footer>
  )
}
