/**
 * Lightweight id/title list for the services, used by the nav dropdown.
 *
 * Kept separate from services.js on purpose: the Header is in the main bundle,
 * so importing the full service copy there would ship every paragraph and list
 * on every page. This file is the small slice the menu actually needs.
 *
 * services.js derives its panels from this list, so the two cannot drift.
 */
export const SERVICE_INDEX = [
  { id: 'materials-engineering', title: 'Materials Engineering' },
  { id: 'ultrasonic-testing',    title: 'Ultrasonic Testing'    },
  { id: 'magnetic-testing',      title: 'Magnetic Testing'      },
  { id: 'penetrant-testing',     title: 'Penetrant Testing'     },
  { id: 'radiography-testing',   title: 'Radiography Testing'   },
  { id: 'eddy-current-testing',  title: 'Eddy Current Testing'  },
  { id: 'visual-testing',        title: 'Visual Testing'        },
  { id: 'aviation-testing',      title: 'Aviation Testing'      },
]
