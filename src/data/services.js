import { SERVICE_INDEX } from './serviceIndex'

/**
 * Services page content.
 *
 * Each entry becomes one accordion panel. `id` is the anchor slug, so a link
 * to /services#ultrasonic-testing opens that panel directly.
 *
 * Panel body shape:
 *   heading     -- optional <h4> above the prose
 *   paragraphs  -- intro prose
 *   sections[]  -- named lists; `style` picks the rendering:
 *                    'checks' full-sentence items, one per row with a tick
 *                    'chips'  short terms rendered as pills
 *                    'links'  external resources ({ label, href })
 *
 * `draft: true` marks a service whose copy IDL has not supplied yet.
 */

export const SERVICES_HERO = {
  eyebrow: 'Services',
  title: 'NDT & Materials Engineering',
  lead: 'We are proud to offer a diverse selection of both NDT and Materials Engineering services.',
}

// ── NDT overview (shown above the accordion) ─────────────────────────────────

export const NDT_OVERVIEW = {
  title: 'Nondestructive Testing (NDT) Services',
  body: 'We provide the full spectrum of NDT methods, from the most basic to the most advanced, and we work with equipment suppliers and industry technical societies on an ongoing basis to develop new and improved methods.',
  qualityIntro:
    'Equally important are the rigorous internal quality systems we have instituted to ensure that the right method is applied in the right manner:',
  qualityPoints: [
    'Inspectors and technicians are certified, trained and qualified before using each method; certification records are maintained and regularly updated in a company-wide database.',
    'Our standard procedures and written practices are updated regularly and provided automatically to every quality assurance manager on a periodic basis.',
    'Fixed schedules are in place for all equipment requiring calibration; permanent records of calibration results are maintained in a database or on the equipment.',
    'Rigorous protocols are in place for qualifying equipment suppliers and subcontractors.',
    'Our lab and location are audited a minimum of once per year to ensure compliance with our quality standards.',
  ],
}

// ── Accordion panels ─────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: 'materials-engineering',
    title: 'Materials Engineering',
    summary: 'Failure analysis, material selection, and laboratory testing.',
    heading: 'Materials Engineering and Failure Analysis Services',
    paragraphs: [
      'We have Materials Engineering analysis equipment to help with design, inspection, maintenance, repair, and failure analysis. Our engineers and technologists maintain their technical competency through in-house and external training, participation in specification writing bodies, and membership in several industry associations. They regularly make presentations at client facilities, conferences, and specialist society meetings.',
      "Our inspection and testing services and materials engineers work alongside our NDT and laboratory technicians. This integrated approach is unique and offers clients the total solution. Whether it's understanding the failure of a crane's weld or cast spindle, selecting the right material, or designing a component for maximum long-term durability, our technologists are able to provide quick, detailed, and cost-effective analyses.",
    ],
    sections: [
      {
        title: 'Materials Engineering Services Include',
        style: 'checks',
        items: [
          'Selection of metallic and non-metallic materials for the construction of components operating in corrosive environments, either in existing industrial facilities or in plants under construction.',
          'Material selection performed in conjunction with the analysis of failed components from service and fatigue.',
          'Recommending modifications to existing processing procedures, or the application of alternative processing techniques, to improve component durability and service life.',
          'Comparison of materials using laboratory test techniques designed to simulate operational conditions. Testing can include strength evaluation, fatigue durability, notch toughness, corrosion resistance, wear resistance, and other evaluations as needed.',
        ],
      },
      {
        title: 'We Also Provide',
        style: 'chips',
        items: [
          'Hardness Testing',
          'Metallographic and Metallurgical Analysis (Microscopes)',
          'Grain Size Analysis',
          'Impact Testing',
          'Tensile Testing',
          'Fatigue Testing',
          'In-situ Testing',
          'Failure Analysis for Insurance Investigations',
          'Failure Analysis related to NDT practices, with our NDT Level III expertise auditing',
          'Heat-treating procedures for stress relieving, annealing, normalizing, spheroidizing, surface hardening and more',
        ],
      },
    ],
  },

  {
    id: 'ultrasonic-testing',
    title: 'Ultrasonic Testing',
    summary: 'Ultrasonic Testing (UT) and Phased Array (PA / UT-PA).',
    heading: 'Ultrasonic Testing (UT) and Phased Array (PA or UT-PA)',
    paragraphs: [
      'Our Ultrasonic Testing services range from manual thickness readings to large-scale automated corrosion and flaw detection thickness mapping, using the latest ultrasonic logging systems and data acquisition software. Our skilled ultrasonic technicians can provide manual weld examinations for various applications, including piping, vessels, and plate. Our encoded and automated applications include state-of-the-art reporting and analysis systems, and our inventory of specialized tools meets the highest industry standards.',
    ],
    sections: [
      {
        title: 'Ultrasonic Testing & Phased Array (UT-PA) Applications',
        style: 'chips',
        items: [
          'Thickness',
          'Corrosion Monitoring',
          'Longitudinal',
          'Shear Wave',
          'Automated Ultrasonic Systems',
          'Guided Ultrasonic Wave (GUL)',
          'Electromagnetic Acoustic Transducers (EMAT)',
          'Creeping Wave',
          'Immersion',
          'HIC (Hydrogen Induced Cracking)',
          'A-Scan, B-Scan, or C-Scan Inspections',
          'Advanced Ultrasonic Testing (Phased Array or PA)',
        ],
      },
      {
        title: 'Services for Ultrasonic Testing (UT) & Phased Array (UT-PA)',
        style: 'chips',
        items: [
          'Advanced Flaw Sizing',
          'AUT (Automated Ultrasonic Testing or UT-PA)',
          'Corrosion Mapping',
          'Creeping Wave',
          'HIC (Hydrogen Induced Cracking) Inspection',
          'HTHA (High Temperature Hydrogen Attack)',
          'Immersion Testing',
          'Phased Array',
          'Shear Wave',
          'Thickness Testing',
          'Weld Inspection',
          'Lamination Testing',
        ],
      },
    ],
  },

  {
    id: 'magnetic-testing',
    title: 'Magnetic Testing',
    summary: 'Magnetic Particle Inspection (MT), field and bench systems.',
    heading: 'Magnetic Testing (MT)',
    paragraphs: [
      'We have a complete line of Magnetic Testing services to meet your requirements. If your need is for a field examination, we will send personnel to your location to provide the right solution, from a portable yoke to a heavy-duty magnetizing and demagnetizing mobile unit. If the need is for large-volume and small-parts examination, our location has stationary bench systems to meet your high-productivity requirements.',
    ],
    sections: [
      {
        title: 'Magnetic Particle Inspection Applications',
        style: 'chips',
        items: [
          'Weld Examination',
          'Fatigue Examination',
          'Stress Corrosion Cracking (SCC)',
          'Turbine Component Examination',
          'Various Structures',
          'Casting and Forging Materials',
          'Engine Components Including Aviation',
        ],
      },
      {
        title: 'Methods, Equipment and Techniques',
        style: 'chips',
        items: [
          'Yokes',
          'Stationary / Wet Bench Systems',
          'Longitudinal Coils',
          'Mobile Mag/Demag High Energy Units',
          'HIC (Hydrogen Induced Cracking) Inspection',
          'Cable Wraps',
          'Wet or Dry Particles',
        ],
      },
      {
        title: 'Magnetic Testing Capabilities and Services',
        style: 'chips',
        items: [
          'Portable Coil (Small and Large)',
          'Direct Induction',
          'Prods',
          'Portable Yoke',
          'Wet Bench',
          'Yokes',
          'Cable Wraps',
        ],
      },
    ],
  },

  {
    id: 'penetrant-testing',
    title: 'Penetrant Testing',
    summary: 'Liquid Penetrant Inspection (PT), visible dye and fluorescent.',
    heading: 'Penetrant Testing (PT)',
    paragraphs: [
      'Liquid penetrant is used for locating surface-breaking defects in non-porous materials. It is used to inspect plastics, ceramic components, and non-ferrous materials at a relatively low cost. We provide visible dye penetrant, or wet fluorescent penetrant for higher sensitivity requirements. We also provide both a stationary penetrant line at our shop for high or large-volume needs, and a mobile technician who can travel to your location to provide accurate portable liquid penetrant inspection.',
    ],
    sections: [
      {
        title: 'Penetrant Testing Applications',
        style: 'chips',
        items: [
          'Weld Examinations',
          'Castings and Forgings',
          'Turbine Components',
          'Engine Components',
          'Small or Large Scale Production Parts',
        ],
      },
      {
        title: 'Methods, Equipment and Techniques',
        style: 'chips',
        items: [
          'Visible Dye (Colour Contrast) Penetrant',
          'Visible Liquid Penetrant',
          'Fluorescent Liquid Penetrant',
        ],
      },
    ],
  },

  {
    id: 'radiography-testing',
    title: 'Radiography Testing',
    summary: 'Radiographic Testing (RT), gamma and X-ray inspection.',
    heading: 'Radiographic Testing (RT)',
    paragraphs: [
      'We use a complete line of Radiographic Testing services for inspecting a wide variety of materials and product forms, employing both gamma and X-ray inspection. Our gamma inspection equipment includes iridium sources, typically used for profile radiography, field and piping welds, investment castings, and even heavy-wall vessel inspection.',
      'We use leading-edge radiographic equipment from our supplying manufacturers to ensure that our inventory includes the most advanced, productive, and reliable equipment available. Our commitment to maintaining high curie strength sources ensures short exposure times, leading to better efficiency. Computed and digital radiography further ensure a safer work environment, greater detail sensitivity, and faster results.',
      'X-ray (80-160 kV) capability is available, particularly within the aviation industry. We provide a multitude of applications, from finding cracks to the detection of water entrapment and foreign object damage, detection, and prevention. Our experienced technicians can support all your needs.',
    ],
    sections: [
      {
        title: 'Radiography Applications',
        style: 'chips',
        items: [
          'Weld Jointments',
          'Pipe Welds',
          'Boiler Tubes',
          'Welder Certification Coupons',
          'Casting Discontinuities',
          'Structures',
          'Aircraft Parts',
          'Foreign Object Detection',
        ],
      },
      {
        title: 'Capabilities for Radiographic Testing',
        style: 'chips',
        items: [
          'Corrosion Under Insulation',
          'DR (Digital Radiography / Filmless)',
          'Gamma Radiography (Iridium)',
          'X-Ray',
        ],
      },
    ],
  },

  {
    id: 'eddy-current-testing',
    title: 'Eddy Current Testing',
    summary: 'Eddy Current Testing (ET), surface and tubular examination.',
    heading: 'Eddy Current Testing (ET)',
    paragraphs: [
      'We use eddy current equipment that includes state-of-the-art analysis systems, which can be provided on site. We can also supply surface examination services for a variety of specific applications across a range of industries. We work with leading-edge eddy current equipment manufacturers to ensure that our inventory includes the most advanced, productive, and reliable equipment available.',
    ],
    sections: [
      {
        title: 'Eddy Current Applications',
        style: 'chips',
        items: [
          'Crack Detection',
          'Non-Conductive Coating Measurement',
          'Thickness Measurements of Thin Materials',
          'Corrosion Thinning',
          'Conductivity Measurements',
          'Verification of Heat Treatment',
          'Tank Inspections',
          'Thickness of Plating or Cladding',
        ],
      },
      {
        title: 'Capabilities, Methods, Equipment and Techniques',
        style: 'chips',
        items: [
          'Conventional Eddy Current',
          'Remote Field Testing',
          'Surface Examination',
          'Tubular Examination',
        ],
      },
    ],
  },

  {
    id: 'visual-testing',
    title: 'Visual Testing',
    summary: 'Visual Inspection (VT), third-party certification and remote access.',
    heading: 'Visual Testing (VT)',
    paragraphs: [
      'We use highly qualified and certified visual inspection personnel who can provide a complete range of visual inspection services for your operations. If you require third-party certification such as API 510 or 570, we have personnel available for large jobs. We can also provide Certified Welding Inspectors with CWB Levels I and II for field assignments or in-plant programs. We also provide a variety of remote visual and rope access solutions, allowing inspection of areas without easy accessibility.',
    ],
    sections: [],
  },

  {
    id: 'aviation-testing',
    title: 'Aviation Testing',
    summary: 'Transport Canada approved AMO for all NDE ratings.',
    heading: 'Aviation Testing (AT)',
    paragraphs: [
      'IDL Inspection is set up as an Aircraft Maintenance Organization (AMO) with Transport Canada Civil Aviation (TCCA). We offer a variety of NDT services to best suit your needs.',
    ],
    sections: [
      {
        title: 'Aviation Testing Services',
        style: 'chips',
        items: [
          'Ultrasonic Testing (UT)',
          'Magnetic Particle Testing (MT)',
          'Liquid Penetrant Testing (LPI)',
          'Radiographic Testing (RT)',
          'Eddy Current Testing (ET)',
          'Training Program Implementation',
          'Quality Control & Quality Assurance',
          'Internal Auditing',
        ],
      },
      {
        title: 'Certifications',
        style: 'checks',
        items: [
          'Transport Canada Approved Aircraft Maintenance Organization, AMO #64-17, for all NDE ratings.',
          'CGSB Level 2 and Level 3 certified personnel.',
          'X-Ray and Gamma Ray Safe Program through the CNSC.',
          'Internal safety program registered through the ACSA.',
        ],
      },
      {
        title: 'Forms & Helpful Links',
        style: 'links',
        items: [
          {
            label: 'Aircraft Registration Search',
            href: 'https://wwwapps.tc.gc.ca/saf-sec-sur/2/ccarcs-riacc/RchSimp.aspx',
          },
          {
            label: 'Canadian Aviation Regulations',
            href: 'https://tc.canada.ca/en/corporate-services/acts-regulations/list-regulations/canadian-aviation-regulations-sor-96-433',
          },
          {
            label: 'Airworthiness Directives Search',
            href: 'https://wwwapps.tc.gc.ca/saf-sec-sur/2/cawis-swimn/',
          },
        ],
      },
    ],
  },
]

// Dev-time guard: the nav dropdown reads SERVICE_INDEX while this file holds
// the panel copy. If the two ever disagree, a menu link would point at an id
// that no panel has, and clicking it would scroll nowhere.
if (import.meta.env.DEV) {
  const panelIds = SERVICES.map((s) => s.id).join(',')
  const menuIds = SERVICE_INDEX.map((s) => s.id).join(',')
  if (panelIds !== menuIds) {
    console.error(
      'services.js and serviceIndex.js are out of sync.',
      { panels: panelIds, menu: menuIds },
    )
  }
}
