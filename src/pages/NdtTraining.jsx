import { Link } from 'react-router'
import { ROUTES } from '@/constants'
import { Section, SectionHeader } from '@/components/layout'
import { Accordion, AccordionItem, Card } from '@/components/ui'
import { CoursePanel } from '@/components/CoursePanel'
import {
  COURSES,
  REGISTRATION_NOTICE,
  TRAINING_HERO,
  TRAINING_INTRO,
} from '@/data/training'

export default function NdtTraining() {
  return (
    <>
      {/* ── Hero banner ── */}
      <section className="bg-primary px-6 py-16 text-primary-content md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow eyebrow-invert mb-4">{TRAINING_HERO.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            {TRAINING_HERO.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-content/80">
            {TRAINING_HERO.lead}
          </p>
        </div>
      </section>

      {/* ── SNT-TC-1A / Level III overview ── */}
      <Section className="bg-base-200">
        <SectionHeader
          eyebrow="Certification"
          title="NDT Level III Services & SNT-TC-1A"
        />

        <div className="mt-8 flex max-w-4xl flex-col gap-5">
          {TRAINING_INTRO.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="leading-relaxed text-base-content/80"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* ── Course accordion ── */}
      {/* Same grey as the band above, so a rule marks the boundary. */}
      <Section className="border-t border-base-300 bg-base-200">
        <SectionHeader eyebrow="Courses" title="Our Courses">
          Select a course to see its outline, class dates, and registration
          details.
        </SectionHeader>

        <Accordion className="mt-10">
          {COURSES.map((course) => (
            <AccordionItem
              key={course.id}
              id={course.id}
              title={course.title}
              summary={course.summary}
            >
              <CoursePanel course={course} />
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* ── Registration ── */}
      <Section className="border-t border-base-300 bg-base-200">
        <Card className="border-l-4 border-l-accent p-8 md:p-10">
          <p className="eyebrow mb-3">Registration</p>
          <h2 className="text-2xl font-semibold text-base-content">
            {REGISTRATION_NOTICE.title}
          </h2>
          <p className="mt-3 leading-relaxed text-base-content/80">
            {REGISTRATION_NOTICE.body}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to={ROUTES.CONTACT} className="btn btn-primary btn-md font-semibold">
              Contact Us
            </Link>
            <Link
              to={ROUTES.NDT_EXAMINATIONS}
              className="btn btn-ghost btn-md font-semibold text-base-content/70 hover:text-base-content"
            >
              NDT Examinations
            </Link>
          </div>
        </Card>
      </Section>
    </>
  )
}
