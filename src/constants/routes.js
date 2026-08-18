/**
 * Central route table. Import these instead of writing path strings inline so
 * a URL change happens in exactly one place.
 */
export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  NDT_TRAINING: '/ndt-training',
  NDT_EXAMINATIONS: '/ndt-examinations',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '*',
}

/**
 * Browser tab title per route, keyed by path.
 *
 * Home is null so it shows the company name alone rather than
 * "IDL Inspection LTD. | Home", which reads as redundant on a landing page.
 */
export const PAGE_TITLES = {
  [ROUTES.HOME]: null,
  [ROUTES.SERVICES]: 'Services',
  [ROUTES.NDT_TRAINING]: 'NDT Training',
  [ROUTES.NDT_EXAMINATIONS]: 'NDT Examinations',
  [ROUTES.ABOUT]: 'About Us',
  [ROUTES.CONTACT]: 'Contact',
}

/** Shown when the path matches no known route. */
export const NOT_FOUND_TITLE = 'Page Not Found'
