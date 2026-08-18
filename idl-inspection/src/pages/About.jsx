import { Link } from 'react-router'
import { ROUTES } from '@/constants'
import { Section, SectionHeader } from '@/components/layout'
import { Card, CardBody, CardTitle } from '@/components/ui'
import { ABOUT_HERO, MISSION, TEAM } from '@/data/content'

// ── Icons ─────────────────────────────────────────────────────────────────────

function UserIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      {/* ── Hero banner ──
          Same navy band as the homepage so the pages read as one site. */}
      <section className="bg-primary px-6 py-16 text-primary-content md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow eyebrow-invert mb-4">{ABOUT_HERO.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            {ABOUT_HERO.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-content/80">
            {ABOUT_HERO.lead}
          </p>
        </div>
      </section>

      {/* ── Leadership ── */}
      <Section className="bg-base-200">
        <SectionHeader eyebrow="Leadership" title="Our Team" />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {TEAM.map(({ role, name, bio, credentials }) => (
            <Card key={role} className="flex flex-col p-8">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <UserIcon />
              </span>

              <p className="eyebrow mb-2">{role}</p>
              {/* Only the president is named on the current site; the GM entry
                  falls back to the role title until a name is supplied. */}
              <CardTitle className="text-xl">{name ?? role}</CardTitle>
              <CardBody className="mt-2 leading-relaxed">{bio}</CardBody>

              {credentials.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {credentials.map((credential) => (
                    <span
                      key={credential}
                      className="rounded-full border border-base-300 bg-base-200 px-3 py-1
                                 text-xs font-semibold text-base-content/70"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Mission ──
          Reuses the same MISSION constant as the homepage so the statement
          cannot drift between the two pages. */}
      <Section className="bg-base-100">
        <Card className="border-l-4 border-l-accent bg-base-200 p-8 md:p-10">
          <p className="eyebrow mb-3">Our Mission</p>
          <p className="text-xl leading-relaxed text-base-content md:text-2xl">
            {MISSION}
          </p>
        </Card>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to={ROUTES.SERVICES} className="btn btn-primary btn-md font-semibold">
            Our Services
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className="btn btn-ghost btn-md font-semibold text-base-content/70 hover:text-base-content"
          >
            Contact Us
          </Link>
        </div>
      </Section>
    </>
  )
}
