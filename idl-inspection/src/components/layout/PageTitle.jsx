import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { COMPANY, NOT_FOUND_TITLE, PAGE_TITLES } from '@/constants'

/**
 * Keeps document.title in step with the current route.
 *
 * The title in index.html is set once when the document loads, and a
 * single-page app never reloads it, so without this every page would keep the
 * title of whichever one the visitor landed on first.
 *
 * Renders nothing; it exists purely for the side effect.
 */
export function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    // A path with no entry is an unmatched route, which renders NotFound.
    // Object.hasOwn rather than a truthiness check, because Home maps to null
    // on purpose and would otherwise be treated as unknown.
    const page = Object.hasOwn(PAGE_TITLES, pathname)
      ? PAGE_TITLES[pathname]
      : NOT_FOUND_TITLE

    document.title = page ? `${COMPANY.name} | ${page}` : COMPANY.name
  }, [pathname])

  return null
}
