/**
 * Homepage copy, kept out of the JSX so wording can be edited without
 * touching markup. Sourced from the current IDL Inspection website.
 */

export const HERO = {
  eyebrow: 'NDT, Inspection & Materials Engineering',
  // Split so the hero can force a line break between the two halves on narrow
  // screens, where 'Welcome to IDL Inspection LTD.' otherwise wraps mid-name.
  titleLead: 'Welcome to',
  titleName: 'IDL Inspection LTD.',
  lead: 'Certified CGSB Level II, III, JSNDI Level III & SNT-TC-1A Level II, III personnel.',
}

export const MISSION =
  "To provide the highest level of NDT and Materials Engineering services to achieve the most reliable and accurate results for today's industry."

/**
 * The three body paragraphs from the original page, split into cards so the
 * page scans rather than reading as one long block of text.
 */
export const HIGHLIGHTS = [
  {
    title: 'A Decade of Level III Services',
    body: 'IDL Inspection has been providing NDT Training and NDT Level III Services for over a decade. We have also been working with industry for years providing our expertise with great results. We are proud to provide NDT and Materials Engineering Services and plan on working with industry keeping health, safety and environment at the highest level possible.',
  },
  {
    title: 'Training Across Canada',
    body: 'IDL has been providing NDT Training services to all of Canada using the most updated technology with highly trained instructors, delivered with confidence and reliability.',
  },
  {
    title: 'Quality Management System',
    body: 'Our Quality Management System (QMS) is set up to make sure we have the best system to monitor and verify our company is following the latest standards available.',
  },
]

export const RTO_NOTICE = {
  title: 'Recognized Training Organization',
  body: 'We are a Recognized Training Organization (RTO) through NRCan NDTCB for obtaining CGSB certification. To enrol in classes, see the NDT Training section and select the desired course.',
}

export const UPDATES = [
  'We are also a Recognized Training Organization (RTO) with CWB to obtain NDT certification to CAN/CGSB 48.9712 2022.',
  'We are now an RTO for Phased Array Level II with NRCan NDTCB for the new CGSB UT-PA L2 certification. See NDT Training for more details.',
]

export const ABOUT_BLURB =
  "IDL Inspection Ltd. is a Nondestructive Testing (NDT), Inspection and Materials Engineering company focused on supporting mechanical integrity and inspection programs for clients across a range of industries. We also provide NDT, Materials and Processes educational training courses (NRCan CGSB, and in accordance with SNT-TC-1A Written Practice under IDL's NDT Level III service agreements)."

export const INDUSTRIES = [
  'Petrochemical',
  'Refinery',
  'Pipeline',
  'Pulp & Paper',
  'Power Generation',
  'Pharmaceutical',
  'Aerospace',
  'Automotive',
]

// ── About page ───────────────────────────────────────────────────────────────

export const ABOUT_HERO = {
  eyebrow: 'About Us',
  title: 'Founded in 2004',
  lead: 'IDL Inspection Ltd. is a Nondestructive Testing (NDT), Inspection and Materials Engineering company. We also provide NDT, Materials and Processes educational training courses, CGSB and SNT-TC-1A approved.',
}

/**
 * Leadership. `credentials` renders as chips under each bio, so keep each
 * entry short enough to read as a badge.
 */
export const TEAM = [
  {
    role: 'President',
    name: 'Donald Lucic',
    bio: 'Founder of IDL Inspection and instructor of all NDT classes provided by the company. A graduate of Materials Engineering, and an NCA Accepted Training Organization through CGSB.',
    credentials: [
      'CGSB Level III',
      'JSNDI Level III',
      'UT',
      'RT',
      'MT',
      'PT',
    ],
  },
  {
    role: 'General Manager',
    name: null,
    bio: 'Co-ordinator of all NDT classes. Manages and oversees all relations with clients pertaining to NDT and Materials Engineering Services.',
    credentials: [],
  },
]

// ── NDT Examinations page ────────────────────────────────────────────────────

export const EXAMS_HERO = {
  eyebrow: 'NDT Examinations',
  title: 'Certified Examination Services',
  lead: 'We are certified with CGSB, JSNDI and ASNT (SNT-TC-1A).',
}

/** Certifying bodies we examine under, shown as credential cards. */
export const EXAM_BODIES = [
  {
    abbr: 'CGSB',
    name: 'Canadian General Standards Board',
    note: 'Administered through NRCan NDTCB.',
  },
  {
    abbr: 'JSNDI',
    name: 'Japanese Society for Non-Destructive Inspection',
    note: 'Level III certified personnel.',
  },
  {
    abbr: 'ASNT',
    name: 'American Society for Nondestructive Testing',
    note: 'In accordance with SNT-TC-1A.',
  },
]

export const EXAMS_BLURB =
  'IDL Inspection Ltd. is a Nondestructive Testing (NDT), Inspection and Materials Engineering company. We are focused on supporting a wide range of clientele with our specialized expertise through our Level III Services.'

/**
 * Exams offered alongside the training courses. `prerequisite` marks the ones
 * taken to satisfy entry requirements rather than certify a method.
 */
export const EXAMS_OFFERED = [
  {
    title: 'Materials and Processes (MP)',
    body: 'Required for a number of NDT certification paths.',
    prerequisite: false,
  },
  {
    title: 'Math for NDT',
    body: 'A prerequisite exam for candidates entering NDT certification.',
    prerequisite: true,
  },
]

export const EXAMS_NOTE =
  'We also provide NDT educational training courses, which include the exams required for certain NDT requirements. All examinations are CGSB and SNT-TC-1A approved.'
