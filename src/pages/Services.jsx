import { Link } from 'react-router'
import { ROUTES } from '@/constants'
import { Section, SectionHeader } from '@/components/layout'
import { Accordion, AccordionItem, Card } from '@/components/ui'
import { CheckIcon, DetailPanel } from '@/components/DetailPanel'
import { NDT_OVERVIEW, SERVICES, SERVICES_HERO } from '@/data/services'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <>
      {/* ── Hero banner ── */}
      <section className="bg-primary px-6 py-16 text-primary-content md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow eyebrow-invert mb-4">{SERVICES_HERO.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            {SERVICES_HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-content/80">
            {SERVICES_HERO.lead}
          </p>
        </div>
      </section>

      {/* ── NDT overview + quality systems ── */}
      <Section className="bg-base-200">
        <SectionHeader eyebrow="Nondestructive Testing" title={NDT_OVERVIEW.title}>
          {NDT_OVERVIEW.body}
        </SectionHeader>

        <Card className="mt-10 border-l-4 border-l-accent p-8">
          <p className="leading-relaxed text-base-content/80">
            {NDT_OVERVIEW.qualityIntro}
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {NDT_OVERVIEW.qualityPoints.map((point) => (
              <li key={point.slice(0, 40)} className="flex gap-3">
                <CheckIcon />
                <span className="leading-relaxed text-base-content/80">{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* ── Service accordion ── */}
      {/* Same grey as the band above, so a rule marks the boundary. */}
      <Section className="border-t border-base-300 bg-base-200">
        <SectionHeader eyebrow="Our Services" title="Explore Our Services">
          Select a service to see what it covers.
        </SectionHeader>

        <Accordion className="mt-10">
          {SERVICES.map((service) => (
            <AccordionItem
              key={service.id}
              id={service.id}
              title={service.title}
              summary={service.summary}
            >
              <DetailPanel item={service} />
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to={ROUTES.CONTACT} className="btn btn-primary btn-md font-semibold">
            Contact Us
          </Link>
          <Link
            to={ROUTES.NDT_TRAINING}
            className="btn btn-ghost btn-md font-semibold text-base-content/70 hover:text-base-content"
          >
            NDT Training
          </Link>
        </div>
      </Section>
    </>
  )
}
