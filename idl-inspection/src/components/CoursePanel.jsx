import { Link } from 'react-router'
import { ROUTES } from '@/constants'
import { TERMS } from '@/data/training'

/**
 * Accordion panel body for one training course.
 *
 * Courses carry structured detail (codes, class dates, hours, cost) that the
 * generic DetailPanel does not model, so they get their own renderer. The
 * cancellation and eligibility policy comes from the shared TERMS list unless
 * a course overrides it.
 */

// ── Icons ─────────────────────────────────────────────────────────────────────

function CalendarIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

function TagIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-5 5a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

// ── Pieces ────────────────────────────────────────────────────────────────────

/** Label above a block of course detail. */
function FieldLabel({ children }) {
  return <p className="eyebrow mb-2">{children}</p>
}

/**
 * One level of a course: its hours, cost, and the dates it runs.
 * Courses with a single level still use this, so the layout stays uniform.
 */
function Offering({ label, hours, cost, dates }) {
  return (
    <div className="rounded-box border border-base-300 bg-base-100 p-5">
      <p className="font-semibold text-base-content">{label}</p>

      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-base-content/70">
        <span className="inline-flex items-center gap-2">
          <ClockIcon />
          {hours}
        </span>
        <span className="inline-flex items-center gap-2 font-medium text-primary">
          <TagIcon />
          {cost}
        </span>
      </div>

      {dates.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-base-content/75">
            <CalendarIcon />
            Course Dates
          </p>
          <div className="flex flex-wrap gap-2">
            {dates.map((date) => (
              <span
                key={date}
                className="rounded-full border border-base-300 bg-base-200 px-3 py-1
                           text-sm font-medium text-base-content/80"
              >
                {date}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Panel ─────────────────────────────────────────────────────────────────────

export function CoursePanel({ course }) {
  const terms = course.terms ?? TERMS

  return (
    <div className="flex flex-col gap-7">
      {/* Course codes */}
      {course.codes?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {course.codes.map((code) => (
            <span
              key={code}
              className="rounded-full bg-primary px-3 py-1 text-xs font-semibold
                         tracking-wide text-primary-content"
            >
              {code}
            </span>
          ))}
        </div>
      )}

      {course.heading && (
        <h4 className="text-xl font-semibold text-base-content">{course.heading}</h4>
      )}

      {course.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="leading-relaxed text-base-content/80">
          {paragraph}
        </p>
      ))}

      {course.prerequisites && (
        <div>
          <FieldLabel>Prerequisites</FieldLabel>
          <p className="leading-relaxed text-base-content/80">{course.prerequisites}</p>
        </div>
      )}

      {/* Dates, hours, and cost */}
      {course.offerings?.length > 0 && (
        <div>
          <FieldLabel>Dates & Cost</FieldLabel>
          <div className="flex flex-col gap-4">
            {course.offerings.map((offering) => (
              <Offering key={offering.label} {...offering} />
            ))}
          </div>
        </div>
      )}

      {/* Text and instructor sit together: both are short reference details. */}
      <div className="grid gap-6 sm:grid-cols-2">
        {course.text && (
          <div>
            <FieldLabel>Text</FieldLabel>
            <p className="text-sm leading-relaxed text-base-content/80">{course.text}</p>
          </div>
        )}
        {course.instructor && (
          <div>
            <FieldLabel>Instructor</FieldLabel>
            <p className="text-sm leading-relaxed text-base-content/80">
              {course.instructor}
            </p>
          </div>
        )}
      </div>

      {course.payment && (
        <div>
          <FieldLabel>Payment</FieldLabel>
          <p className="text-sm leading-relaxed text-base-content/80">{course.payment}</p>
        </div>
      )}

      {/* Course-specific notes, highlighted above the shared policy. */}
      {course.notes?.length > 0 && (
        <ul className="flex flex-col gap-3">
          {course.notes.map((note) => (
            <li
              key={note.slice(0, 40)}
              className="flex gap-3 rounded-box border border-accent/30 bg-accent/5 p-4"
            >
              <InfoIcon />
              <span className="text-sm leading-relaxed text-base-content/80">{note}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Shared cancellation and eligibility policy. */}
      <div className="border-t border-base-300 pt-5">
        <FieldLabel>Cancellations & Eligibility</FieldLabel>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          {terms.map((term) => (
            <li key={term.slice(0, 40)} className="text-sm leading-relaxed text-base-content/70">
              {term}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-base-content/70">
          To cancel, please{' '}
          <Link
            to={ROUTES.CONTACT}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            contact us directly
          </Link>
          .
        </p>
      </div>

      <Link to={ROUTES.CONTACT} className="btn btn-primary btn-sm w-fit font-semibold">
        Register or Ask a Question
      </Link>
    </div>
  )
}
