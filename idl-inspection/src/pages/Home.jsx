import { Link } from 'react-router'
import { ROUTES } from '@/constants'
import { Section, SectionHeader } from '@/components/layout'
import { Card, CardBody, CardTitle } from '@/components/ui'
import {
  ABOUT_BLURB,
  HERO,
  HIGHLIGHTS,
  INDUSTRIES,
  MISSION,
  RTO_NOTICE,
  UPDATES,
} from '@/data/content'

// ── Icons ─────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Hero banner ──
          Navy band so the page opens on the brand colour rather than the grey
          page background. */}
      <section className="bg-primary px-6 py-20 text-primary-content md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow eyebrow-invert mb-4">{HERO.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {HERO.titleLead}{' '}
            {/* Forced break below md so the company name always starts its own
                line on a phone instead of wrapping partway through. From md up
                the <br /> is removed from the flow and the heading wraps
                naturally. */}
            <br className="md:hidden" />
            {HERO.titleName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-content/80">
            {HERO.lead}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to={ROUTES.NDT_TRAINING}
              className="btn btn-accent btn-md font-semibold shadow-sm
                         transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
            >
              Browse NDT Training
            </Link>
            <Link
              to={ROUTES.SERVICES}
              className="btn btn-md border-primary-content/30 bg-transparent font-semibold
                         text-primary-content transition-all duration-200 ease-out
                         hover:border-primary-content/60 hover:bg-primary-content/10"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mission + highlights ──
          One band rather than two: they share a background, so separate
          sections only stacked their vertical padding into a dead gap.
          The cards sit close under the mission statement as a single group. */}
      <Section className="bg-base-200 pt-12 md:pt-16">
        <Card className="border-l-4 border-l-accent p-8 md:p-10">
          <p className="eyebrow mb-3">Our Mission</p>
          <p className="text-xl leading-relaxed text-base-content md:text-2xl">
            {MISSION}
          </p>
        </Card>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map(({ title, body }) => (
            <Card key={title} className="flex flex-col p-7">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <CheckIcon />
              </span>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardBody className="mt-1 leading-relaxed">{body}</CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── RTO notice + new updates ── */}
      <Section className="bg-base-100">
        <div className="grid gap-6 lg:grid-cols-5">
          <Card className="border-base-300 bg-base-200 p-8 lg:col-span-2">
            <p className="eyebrow mb-3">Certification</p>
            <CardTitle className="text-xl">{RTO_NOTICE.title}</CardTitle>
            <CardBody className="mt-2 leading-relaxed">{RTO_NOTICE.body}</CardBody>
            <Link
              to={ROUTES.NDT_TRAINING}
              className="btn btn-primary btn-sm mt-6 w-fit font-semibold"
            >
              View Courses
            </Link>
          </Card>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-3">New Updates</p>
            <ul className="flex flex-col gap-4">
              {UPDATES.map((update) => (
                <li
                  key={update}
                  className="flex gap-4 rounded-box border border-base-200 bg-base-100 p-6 shadow-sm"
                >
                  <span className="mt-0.5 text-accent">
                    <SparkIcon />
                  </span>
                  <p className="leading-relaxed text-base-content/80">{update}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── About + industries served ── */}
      <Section className="bg-base-200">
        <SectionHeader
          eyebrow="Who We Are"
          title="NDT, Inspection & Materials Engineering Services"
        >
          {ABOUT_BLURB}
        </SectionHeader>

        <div className="mt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/75">
            Industries We Serve
          </p>
          <div className="flex flex-wrap gap-2.5">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-base-300 bg-base-100 px-4 py-2
                           text-sm font-medium text-base-content/80"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to={ROUTES.ABOUT} className="btn btn-primary btn-md font-semibold">
            About Us
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
