/**
 * Footer content.
 *
 * The link columns are built from the same route and index data the nav uses,
 * so a new service or course appears in both places without a second edit.
 */
import { ROUTES } from '@/constants'
import { SERVICE_INDEX } from './serviceIndex'
import { COURSE_INDEX } from './courseIndex'

export const FOOTER_TAGLINE =
  'Nondestructive Testing, inspection, and materials engineering services, supporting mechanical integrity and inspection programs across Canadian industry since 2004.'

/**
 * Link columns. Services and Training are capped: a footer listing all ten
 * courses becomes a wall of text, so each shows the most requested few and
 * links through to the full page.
 */
export const FOOTER_COLUMNS = [
  {
    title: 'Services',
    links: [
      ...SERVICE_INDEX.slice(0, 5).map(({ id, title }) => ({
        label: title,
        to: `${ROUTES.SERVICES}#${id}`,
      })),
      { label: 'All Services', to: ROUTES.SERVICES, muted: true },
    ],
  },
  {
    title: 'Training',
    links: [
      ...COURSE_INDEX.slice(0, 5).map(({ id, title }) => ({
        label: title,
        to: `${ROUTES.NDT_TRAINING}#${id}`,
      })),
      { label: 'All Courses', to: ROUTES.NDT_TRAINING, muted: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: ROUTES.ABOUT },
      { label: 'NDT Examinations', to: ROUTES.NDT_EXAMINATIONS },
      { label: 'Contact', to: ROUTES.CONTACT },
    ],
  },
]

/**
 * Accreditations, drawn from the claims already stated on the Services,
 * Training, and Examinations pages. `detail` shows on wider screens only.
 */
export const ACCREDITATIONS = [
  { label: 'NRCan NDTCB', detail: 'Recognized Training Organization' },
  { label: 'CWB', detail: 'Recognized Training Organization' },
  { label: 'CGSB', detail: 'Level II & III certified' },
  { label: 'ASNT SNT-TC-1A', detail: 'Level III services' },
  { label: 'JSNDI', detail: 'Level III certified' },
  { label: 'Transport Canada', detail: 'AMO #64-17' },
  { label: 'CNSC', detail: 'Radiation safety program' },
]
