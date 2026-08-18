/**
 * App-wide config. Vite only exposes env vars prefixed with VITE_ to client
 * code, so anything read here must be named VITE_* in your .env file.
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api'

export const IS_DEV = import.meta.env.DEV

/**
 * Company details surfaced in the nav, footer, and contact page.
 */
export const COMPANY = {
  name: 'IDL Inspection',
  contactName: 'Donald Lucic',
  phone: '(780) 721-2486',
  email: 'dlucic@telus.net',
  hours: 'Monday to Friday, 9:00am to 4:00pm',
  address: {
    street: '#13 Airport Road NW',
    city: 'Edmonton',
    province: 'AB',
    postalCode: 'T5G 0W6',
  },
}

/** Single-line address for links, map queries, and the footer. */
export const COMPANY_ADDRESS = `${COMPANY.address.street}, ${COMPANY.address.city} ${COMPANY.address.province} ${COMPANY.address.postalCode}`

/** `tel:` needs the digits only -- strip formatting from the display value. */
export const COMPANY_PHONE_HREF = `tel:+1${COMPANY.phone.replace(/\D/g, '')}`

/**
 * Google Maps links. The `output=embed` endpoint renders an interactive map in
 * an iframe without an API key; swap for the official Embed API if you later
 * want styling control or usage reporting.
 */
export const MAP_QUERY = encodeURIComponent(`${COMPANY.name}, ${COMPANY_ADDRESS}`)
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`
export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`
