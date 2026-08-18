import { COURSE_INDEX } from './courseIndex'

/**
 * NDT Training page content.
 *
 * Each entry is one accordion panel; `id` is the anchor slug the nav dropdown
 * links to. Beyond the shared panel fields (heading, paragraphs, sections),
 * courses carry structured detail the generic panel does not express:
 *
 *   codes[]     course codes, e.g. 'IDL 1082'
 *   offerings[] one row per level: { label, hours, cost, dates[] }
 *   text        recommended reading
 *   instructor  who teaches it
 *   payment     how to pay
 *   notes[]     course-specific caveats, shown above the shared policy
 *
 * TERMS below holds the wording common to every course, so the cancellation
 * and eligibility policy lives in exactly one place.
 */

export const TRAINING_HERO = {
  eyebrow: 'NDT Training',
  title: 'NDT Training, Level III Services & Materials Engineering Courses',
  lead: 'Recognized Training Organization (RTO), approved by NRCan NDTCB for CGSB in MT, PT, UT and PA.',
}

// ── Intro copy (shown above the accordion) ───────────────────────────────────

export const TRAINING_INTRO = {
  paragraphs: [
    'NDT Level III Services and Agreements for the ASNT published document SNT-TC-1A Written Practice (WP) are in accordance with the latest revision of the SNT-TC-1A Written Practice. The SNT-TC-1A Recommended Practice establishes a framework for a qualification and certification program for companies and their personnel.',
    "SNT-TC-1A is an in-house certification and is only valid for the employer it was issued from. It applies to the NDT performed by that company under its own latest revision of the SNT-TC-1A Written Practice. A company's or employer's certifications must be approved by a certifying authority and a designated NDT Level III, in accordance with the SNT-TC-1A Written Practice, to be valid.",
    'IDL Inspection Ltd. is a Nondestructive Testing (NDT), Inspection and Materials Engineering company that provides NDT training and materials courses and programs for clients in the Petrochemical, Refinery, Pipeline, Pulp & Paper, Power Generation, Pharmaceutical, Aerospace, and Automotive industries.',
    'We also provide NDT Level III services that, by agreement, can certify SNT-TC-1A programs to meet or exceed CGSB, SNT-TC-1A, and ANSI/ASNT CP-105 requirements.',
  ],
}

export const REGISTRATION_NOTICE = {
  title: 'Class Dates & Registration',
  body: 'Select a course above to find class dates and registration details. Get in touch to reserve a seat or to ask about scheduling.',
}

/**
 * Policy wording that applies to every course. Kept in one place so a change
 * to the cancellation terms does not have to be made ten times.
 */
export const TERMS = [
  'Cancellations must be made 7 days before the course start date for a refund to be issued. A 25% administrative fee will be charged.',
  'For SNT-TC-1A training and certifications under agreements, pricing may vary.',
  'Students must have valid ID and be Canadian citizens. Tuition for international students is twice the amount listed.',
]

const INSTRUCTOR = 'Donald Lucic, CGSB Level III'
const INSTRUCTOR_BOTH = 'Donald Lucic, CGSB and SNT-TC-1A Level III'
const PAY_ETRANSFER_PO = 'Payments to be made via e-transfer or company PO.'
const PAY_ETRANSFER_PO_CREDIT =
  'Payments to be made via e-transfer, or by company PO if a Credit Application is approved.'

// ── Course panels ────────────────────────────────────────────────────────────

export const COURSES = [
  {
    id: 'magnetic-testing',
    title: 'Magnetic Testing',
    summary: 'IDL 1082 | Magnetic Particle Inspection (MT/MPI) Level II',
    codes: ['IDL 1082'],
    heading: 'Magnetic Testing (MT or MPI) Level II',
    paragraphs: [
      'This Magnetic Particle Inspection (MPI) course is intended to meet the training requirements of CGSB Standard 48.9712-2022 for certification of NDT personnel in the MT method. Materials covered include methods of magnetization, test variables, calibration techniques, equipment operation, and metallurgical properties. Test pieces include welds, castings, forgings, and machined parts.',
      'Students should be aware that in addition to classroom training, NRCan and CGSB require completion of Materials and Processes, Math for NDT, suitable work experience, and proof of vision to qualify for NDT certification.',
    ],
    text: "Magnetic Particle Testing; General Dynamics CT-6-3. The text is not required but can be used as reference.",
    instructor: INSTRUCTOR,
    offerings: [
      {
        label: 'Magnetic Testing Level II',
        hours: '40 hours',
        cost: '$1,450 per student (+GST)',
        dates: [
          'Sep 8, 2025',
          'Nov 10, 2025',
          'Jan 12, 2026',
          'Apr 20, 2026',
          'Nov 16, 2026',
        ],
      },
    ],
    payment: 'Payments can be made via e-transfer.',
  },

  {
    id: 'penetrant-testing',
    title: 'Penetrant Testing',
    summary: 'IDL 1092 | Liquid Penetrant Inspection (PT/LPI) Level II',
    codes: ['IDL 1092'],
    heading: 'Penetrant Testing (PT or LPI) Level II',
    paragraphs: [
      'This Liquid Penetrant Inspection course is intended to meet the training requirements of CGSB Standard 48.9712-2022 for certification of NDT personnel in the PT method. Materials covered include testing variables, calibration techniques, equipment operation, test sensitivity, interpretation of results, and metallurgical properties. Test pieces include welds, castings, forgings, and machined parts.',
      'Students should be aware that in addition to classroom training, NRCan and CGSB require suitable work experience and proof of vision to qualify for NDT certification.',
    ],
    text: "Liquid Penetrant Testing; General Dynamics CT-6-2. The text is not required but can be used as reference.",
    instructor: INSTRUCTOR,
    offerings: [
      {
        label: 'Penetrant Testing Level II',
        hours: '40 hours',
        cost: '$1,450 per student (+GST)',
        dates: [
          'Sep 15, 2025',
          'Nov 17, 2025',
          'Jan 19, 2026',
          'Apr 27, 2026',
          'Nov 24, 2026',
        ],
      },
    ],
    payment: PAY_ETRANSFER_PO,
  },

  {
    id: 'ultrasonic-testing',
    title: 'Ultrasonic Testing',
    summary: 'IDL 1061 / 1062 | Ultrasonic Testing (UT) Level I and Level II',
    codes: ['IDL 1061', 'IDL 1062'],
    heading: 'Ultrasonic Testing Level I (UT I) and Level II (UT II)',
    paragraphs: [
      'Ultrasonic testing methods are used to inspect typical samples such as welds, castings, forgings, and rolled products. Topics covered include the production of ultrasound, variables affecting test sensitivity, calibration procedures, and testing techniques. These courses are based on and meet the training requirements for CGSB Level I and Level II.',
      'The Level I course provides a basic knowledge of the principles of ultrasonic testing and allows the technician to perform established ultrasonic procedures under the supervision of Level II or Level III personnel. The Level II course provides advanced theoretical knowledge and skills, including immersion testing and advanced evaluation of flaws.',
    ],
    prerequisites:
      'All candidates must have an aptitude in math; physics is a definite asset. CGSB requires a math skills test prior to the first class, and students will not be able to participate without successfully passing the NRCan NDTCB CGSB exam. IDL Inspection Ltd. can provide this examination.',
    text: 'TBA. The text is not required but can be used as reference.',
    instructor: INSTRUCTOR,
    offerings: [
      {
        label: 'UT Level I',
        hours: '64 hours',
        cost: '$2,250 per student (+GST)',
        dates: [
          'Sep 22, 2025',
          'Dec 8, 2025',
          'Jan 26, 2026',
          'Feb 9, 2026',
          'May 4, 2026',
        ],
      },
      {
        label: 'UT Level II',
        hours: '80 hours',
        cost: '$2,550 per student (+GST)',
        dates: [
          'Oct 6, 2025',
          'Dec 15, 2025 (plus the following week)',
          'Feb 9, 2026 (plus the following week)',
          'May 19, 2026 (plus the following week)',
        ],
      },
    ],
    payment: PAY_ETRANSFER_PO_CREDIT,
    notes: ['MPI and LPI courses are highly recommended before taking the UT course.'],
  },

  {
    id: 'phased-array',
    title: 'Phased Array',
    summary: 'IDL 1064 | Phased Array Testing (UT-PA) Level II',
    codes: ['IDL 1064'],
    heading: 'Phased Array Testing Level II (UT-PA II)',
    paragraphs: [
      'The Phased Array method is used to inspect typical samples such as welds, castings, forgings, and rolled products. Topics covered include the production of ultrasound, variables affecting test sensitivity, calibration procedures, and testing techniques. This course is based on and meets the training requirements for NRCan CGSB Level II.',
      'The course provides knowledge of the principles of phased array and allows the technician to perform established procedures under supervision, along with advanced theoretical knowledge and skills including sectorial and linear scans and advanced evaluation of flaws.',
    ],
    prerequisites:
      'All candidates must hold CGSB UT Level II and have experience operating an Olympus OmniScan MX, MX2, or MX3 to register for Phased Array. Students will not be able to participate without arranging and bringing the necessary equipment prior to class: OmniScan MX2 or MX3, mini wheel encoder, probes 5L64 A2 with SA2 0L parallel wedge and SA2 N55S angled wedge (or 5L64 A2 with SA12 0L parallel wedge and SA12 N55S angled wedge), and the proper software for the multigroup option. IDL Inspection can provide some direction about the qualifications necessary; guidelines are to NRCan CGSB 48.9712-2022.',
    text: 'TBA. The text is not required but can be used as reference.',
    instructor: INSTRUCTOR,
    offerings: [
      {
        label: 'UT-PA Level II',
        hours: '80 hours',
        cost: '$5,495 per student (+GST)',
        dates: ['Oct 20, 2025', 'Mar 9, 2026'],
      },
    ],
    payment: PAY_ETRANSFER_PO_CREDIT,
    notes: ['MPI and LPI courses are highly recommended before taking the UT-PA course.'],
  },

  {
    id: 'radiographic-testing',
    title: 'Radiographic Testing',
    summary: 'IDL 1071 / 1072 | Radiographic Testing (RT) Level I and Level II',
    codes: ['IDL 1071', 'IDL 1072'],
    heading: 'Radiographic Testing Level I (RT I) and Level II (RT II)',
    paragraphs: [
      'Radiographic testing methods are used to inspect typical samples such as welds, castings, forgings, and rolled products. Topics covered include the production of X-rays and gamma radiation, variables affecting test sensitivity, calibration procedures, and testing techniques. These courses are based on and meet the training requirements for SNT-TC-1A Level I and Level II.',
      'The Level I course provides a basic knowledge of the principles of radiographic testing and allows the technician to perform established radiographic procedures under the supervision of Level II or Level III personnel. The Level II course provides advanced theoretical knowledge and skills, including specific techniques for film interpretation and calibration density curves for radiation sources.',
    ],
    prerequisites:
      'All candidates must have an aptitude in math; physics is a definite asset. This class requires a math skills test prior to the first class, and students will not be able to participate without successfully passing the exam. IDL Inspection Ltd. can provide this examination.',
    text: 'TBA. The text is not required but can be used as reference.',
    instructor: INSTRUCTOR_BOTH,
    offerings: [
      {
        label: 'RT Level I',
        hours: '40 hours',
        cost: '$2,250 per student (+GST)',
        dates: ['Jun 1, 2026'],
      },
      {
        label: 'RT Level II',
        hours: '80 hours',
        cost: '$4,850 per student (+GST)',
        dates: ['Jun 8, 2026'],
      },
    ],
    payment: PAY_ETRANSFER_PO,
    notes: [
      "This class must be set up in advance, with a commitment meeting IDL management's requirements such as enrolment deposits, and with ASNT.",
    ],
  },

  {
    id: 'eddy-current-testing',
    title: 'Eddy Current Testing',
    summary: 'IDL 1041 / 1042 | Eddy Current Testing (ET) Level I and Level II',
    codes: ['IDL 1041', 'IDL 1042'],
    heading: 'Eddy Current Testing Level I (ET I) and Level II (ET II)',
    paragraphs: [
      'Eddy current testing methods are used to inspect typical samples such as welds, castings, forgings, and rolled products. Topics covered include the production of eddy currents, variables affecting test sensitivity, calibration procedures, and testing techniques. These courses are based on and meet the training requirements for SNT-TC-1A Level I and Level II.',
      'The Level I course provides a basic knowledge of the principles of eddy current testing and allows the technician to perform established eddy current procedures under the supervision of Level II or Level III personnel. The Level II course provides advanced theoretical knowledge and skills, including selection of eddy current techniques and advanced interpretation of results.',
    ],
    prerequisites:
      'All candidates must have an aptitude in math; physics is a definite asset. This class requires a math skills test prior to the first class, and students will not be able to participate without successfully passing the exam. IDL Inspection Ltd. can provide this examination.',
    text: 'TBA. The text is not required but can be used as reference.',
    instructor: `TBA, and ${INSTRUCTOR_BOTH}`,
    offerings: [
      {
        label: 'ET Level I',
        hours: '40 hours',
        cost: '$2,450 per student (+GST)',
        dates: ['Mar 2, 2026', 'Nov 9, 2026'],
      },
      {
        label: 'ET Level II',
        hours: '80 hours',
        cost: '$4,850 per student (+GST)',
        dates: ['Mar 9, 2026', 'Nov 16, 2026'],
      },
    ],
    payment: PAY_ETRANSFER_PO,
    notes: [
      "This class must be set up in advance, with a commitment meeting IDL management's requirements, and with ASNT SNT-TC-1A.",
    ],
  },

  {
    id: 'cedo',
    title: 'CEDO',
    summary: 'IDL 1070 | Certified Exposure Device Operator',
    codes: ['IDL 1070'],
    heading: 'Certified Exposure Device Operator (CEDO)',
    paragraphs: [
      'This course assists students with preparation for CNSC certification and the written examination component for an exposure device operator in Radiographic Testing (RT). Topics include properties of matter, radiation and radioactivity, radiation units, and radiation measurement and detection using safety equipment such as survey meters, DRDs, and alarming meters. Further topics include the biological effects of radiation, controlling radiation exposure, gamma ray exposure devices, emergency operating procedures, and CNSC Regulations PCP-09.',
    ],
    prerequisites:
      'Students must have completed the Math for NDT class, or a math examination, prior to the CEDO class.',
    text: 'TBA. The text is not required but can be used as reference.',
    instructor: INSTRUCTOR,
    offerings: [
      {
        label: 'CEDO',
        hours: '40 hours',
        cost: '$1,450 per student (+GST)',
        dates: ['Sep 29, 2025', 'Oct 27, 2025', 'Feb 24, 2026', 'Jun 1, 2026'],
      },
    ],
    payment: PAY_ETRANSFER_PO,
    notes: [
      'The EDO practical examination is not included and can be booked after completion of the CEDO class for a separate fee.',
    ],
  },

  {
    id: 'radiation-safety-officer',
    title: 'Radiation Safety Officer',
    summary: 'IDL 1075 | Radiation Safety Officer (RSO), full course and refresher',
    codes: ['IDL 1075'],
    heading: 'Radiation Safety Officer (RSO)',
    paragraphs: [
      'This course meets the CNSC requirements for individuals who are to be the Radiation Safety Officer (RSO) for their company, and the update training requirements for current RSOs. Topics include radiation and radioactivity, radiation protection management, radiation monitoring, the effects of radiation, principles of radiation protection, radiography operations, and the relevant acts and regulations.',
    ],
    text: 'TBA.',
    instructor: INSTRUCTOR,
    offerings: [
      {
        label: 'RSO Refresher',
        hours: '8 hours (1 day)',
        cost: '$1,450 per student (+GST)',
        dates: ['Dec 1, 2026'],
      },
      {
        label: 'RSO Full Course',
        hours: '40 hours',
        cost: '$1,450 per student (+GST)',
        dates: ['Dec 9, 2026'],
      },
    ],
    payment: PAY_ETRANSFER_PO,
  },

  {
    id: 'materials-and-processes',
    title: 'Materials & Processes',
    summary: 'IDL 1051 | Materials and Processes (M&P)',
    codes: ['IDL 1051'],
    heading: 'Materials and Processes (M&P)',
    paragraphs: [
      'This course introduces NDT technicians to the engineering materials, material processes, codes, and standards typically used in the NDT industry. Mechanical testing, heat treatment, welding metallurgy, and casting and forging principles are discussed. Students are introduced to codes and standards and their particular application to the NDT industry.',
      'This informative course is designed for personnel involved in the design, use, or evaluation of Nondestructive Testing applications in QC, manufacturing, maintenance, and construction industries.',
    ],
    text: 'ASNT Materials and Processes for NDT Technology. The text is not required but can be used as reference.',
    instructor: INSTRUCTOR,
    offerings: [
      {
        label: 'Materials and Processes',
        hours: '32 hours',
        cost: '$1,450 per student (+GST)',
        dates: [
          'Sep 2, 2025',
          'Nov 3, 2025',
          'Jan 5, 2026',
          'Apr 13, 2026',
          'Nov 9, 2026',
        ],
      },
    ],
    payment: PAY_ETRANSFER_PO,
  },

  {
    id: 'math-for-ndt',
    title: 'Math for NDT',
    summary: 'IDL 1052 | Math for NDT, study package and examination',
    codes: ['IDL 1052'],
    heading: 'Math for NDT',
    paragraphs: [
      'This material covers the math topics required to complete NDT certifications. The written examination must be booked at the IDL facility. Completion of this course is a prerequisite to all training programs needed to obtain CGSB certifications, both those offered by IDL and by many other certified NDT trainers.',
      'A study package and math tutorials may be offered or arranged. Examination time may be arranged when both the student and the test facility are available, and must be completed within 6 months of the start date, or of when payment was made, to avoid expiry. No refunds are issued for expired bookings.',
    ],
    text: 'TBA. The text is not required but can be used as reference.',
    instructor: INSTRUCTOR,
    offerings: [
      {
        label: 'Math for NDT',
        hours: 'N/A, study package provided',
        cost: '$350 per student (+GST)',
        dates: [],
      },
    ],
    payment: PAY_ETRANSFER_PO,
    // Math for NDT cancels against an exam booking rather than a class start
    // date, so it replaces the first shared term rather than adding to it.
    terms: [
      'Cancellations must be made 1 day before the arranged examination start time; no refund will be issued. A 25% administrative fee will be charged.',
      'For SNT-TC-1A Level III certifications under agreements for Level III services, applicable terms may vary.',
      'Students must have valid ID and be Canadian citizens. Tuition for international students is twice the amount listed.',
    ],
  },
]

// Dev-time guard: a menu link pointing at an id with no panel would scroll
// nowhere, so fail loudly while developing rather than silently in production.
if (import.meta.env.DEV) {
  const panelIds = COURSES.map((c) => c.id).join(',')
  const menuIds = COURSE_INDEX.map((c) => c.id).join(',')
  if (panelIds !== menuIds) {
    console.error('training.js and courseIndex.js are out of sync.', {
      panels: panelIds,
      menu: menuIds,
    })
  }
}
