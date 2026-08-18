import { Link } from 'react-router'
import { ROUTES } from '@/constants'
import { Section, SectionHeader } from '@/components/layout'
import { Card, CardBody, CardTitle } from '@/components/ui'
import {
  EXAMS_BLURB,
  EXAMS_HERO,
  EXAMS_NOTE,
  EXAMS_OFFERED,
  EXAM_BODIES,
} from '@/data/content'

// ── Icons ─────────────────────────────────────────────────────────────────────

function BadgeIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function NdtExaminations() {
  return (
    <>
      {/* ── Hero banner ── */}
      <section className="bg-primary px-6 py-16 text-primary-content md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow eyebrow-invert mb-4">{EXAMS_HERO.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            {EXAMS_HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-content/80">
            {EXAMS_HERO.lead}
          </p>
        </div>
      </section>

      {/* ── Certifying bodies ── */}
      <Section className="bg-base-200">
        <SectionHeader eyebrow="Accreditation" title="Certified With">
          {EXAMS_BLURB}
        </SectionHeader>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {EXAM_BODIES.map(({ abbr, name, note }) => (
            <Card key={abbr} className="flex flex-col p-7">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <BadgeIcon />
              </span>
              <CardTitle className="text-xl">{abbr}</CardTitle>
              <p className="mt-1 text-sm font-medium text-base-content/80">{name}</p>
              <CardBody className="mt-3 leading-relaxed">{note}</CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Exams offered ── */}
      <Section className="bg-base-100">
        <SectionHeader eyebrow="Examinations" title="Exams We Administer">
          {EXAMS_NOTE}
        </SectionHeader>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {EXAMS_OFFERED.map(({ title, body, prerequisite }) => (
            <Card key={title} className="flex gap-5 bg-base-200 p-7">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <DocumentIcon />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Plain <h3> rather than CardTitle: cn() is a straight join
                      with no conflict resolution, so CardTitle's mb-2 would
                      fight an mb-0 override depending on CSS order. */}
                  <h3 className="text-lg font-semibold text-base-content">{title}</h3>
                  {prerequisite && (
                    <span className="rounded-full border border-base-300 bg-base-100 px-2.5 py-0.5
                                     text-xs font-semibold text-base-content/70">
                      Prerequisite
                    </span>
                  )}
                </div>
                <CardBody className="mt-2 leading-relaxed">{body}</CardBody>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to={ROUTES.NDT_TRAINING} className="btn btn-primary btn-md font-semibold">
            View NDT Training
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
