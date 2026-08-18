import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router'

/**
 * Scrolls to the top on navigation.
 *
 * The browser restores scroll position for a single-page app the way it would
 * for a document, so without this a click from the bottom of one page lands
 * part-way down the next.
 *
 * Two cases are deliberately left alone:
 *
 *   - A URL carrying a hash. Those are the nav dropdown's deep links into the
 *     Services and NDT Training accordions, which do their own scrolling;
 *     jumping to the top here would immediately undo that.
 *
 *   - Back and forward navigation ('POP'). Returning to a previous page should
 *     restore where the reader was, which is the behaviour they expect from
 *     the browser buttons.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (hash) return
    if (navigationType === 'POP') return

    // 'instant' rather than 'smooth': the new page has already replaced the
    // old one, so animating the scroll just shows a blur of unrelated content.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash, navigationType])

  return null
}
