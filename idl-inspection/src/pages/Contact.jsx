import {
  COMPANY,
  COMPANY_ADDRESS,
  COMPANY_PHONE_HREF,
  MAP_EMBED_URL,
  MAP_LINK_URL,
} from '@/constants'
import { Section } from '@/components/layout'
import { Card } from '@/components/ui'

// ── Icons ─────────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

// ── Detail row ────────────────────────────────────────────────────────────────

/**
 * One labelled contact detail. Renders as a link when `href` is given so phone
 * and email are tappable on mobile, and as plain text otherwise.
 */
function DetailRow({ icon, label, value, href, external = false }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-base-content/75">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            // Opt-in rather than automatic: tel: and mailto: hand off to another
            // app, so opening a tab for them leaves a blank one behind.
            {...(external
              ? { target: '_blank', rel: 'noreferrer noopener' }
              : {})}
            className="mt-1 block break-words font-medium text-primary
                       underline-offset-4 transition-colors hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 break-words font-medium text-base-content">{value}</p>
        )}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <>
      {/* ── Hero banner ── */}
      <section className="bg-primary px-6 py-16 text-primary-content md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow eyebrow-invert mb-4">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-content/80">
            We can be reached during business hours, {COMPANY.hours}.
          </p>
        </div>
      </section>

      {/* ── Details + map ── */}
      <Section className="bg-base-200">
        <div className="grid gap-6 lg:grid-cols-5">

          {/* Contact details */}
          <Card className="flex flex-col gap-7 p-8 lg:col-span-2">
            <DetailRow
              icon={<PhoneIcon />}
              label="Phone"
              value={`${COMPANY.contactName}, ${COMPANY.phone}`}
              href={COMPANY_PHONE_HREF}
            />
            <DetailRow
              icon={<MailIcon />}
              label="Email"
              value={COMPANY.email}
              href={`mailto:${COMPANY.email}`}
            />
            <DetailRow
              icon={<PinIcon />}
              label="Location"
              value={COMPANY_ADDRESS}
              href={MAP_LINK_URL}
              external
            />
            <DetailRow
              icon={<ClockIcon />}
              label="Business Hours"
              value={COMPANY.hours}
            />
          </Card>

          {/* Map. overflow-hidden clips the iframe's square corners to the
              rounded border. */}
          <div className="overflow-hidden rounded-box border border-base-200
                          shadow-sm lg:col-span-3">
            <iframe
              title={`Map showing ${COMPANY.name} at ${COMPANY_ADDRESS}`}
              src={MAP_EMBED_URL}
              className="h-[380px] w-full lg:h-full lg:min-h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  )
}
