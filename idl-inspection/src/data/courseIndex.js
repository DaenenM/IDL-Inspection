/**
 * Lightweight id/title list for the training courses, used by the nav dropdown.
 *
 * Kept separate from training.js for the same reason as serviceIndex.js: the
 * Header is in the main bundle, so importing the full course copy there would
 * ship every course outline on every page.
 *
 * training.js derives its panels from this list, so the two cannot drift.
 */
export const COURSE_INDEX = [
  { id: 'magnetic-testing',        title: 'Magnetic Testing'        },
  { id: 'penetrant-testing',       title: 'Penetrant Testing'       },
  { id: 'ultrasonic-testing',      title: 'Ultrasonic Testing'      },
  { id: 'phased-array',            title: 'Phased Array'            },
  { id: 'radiographic-testing',    title: 'Radiographic Testing'    },
  { id: 'eddy-current-testing',    title: 'Eddy Current Testing'    },
  { id: 'cedo',                    title: 'CEDO'                    },
  { id: 'radiation-safety-officer', title: 'Radiation Safety Officer' },
  { id: 'materials-and-processes', title: 'Materials & Processes'   },
  { id: 'math-for-ndt',            title: 'Math for NDT'            },
]
