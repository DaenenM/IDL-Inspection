/**
 * Opens and scrolls to the <details> panel a hash link points at.
 *
 * The accordion also reacts to hash changes, but that only covers a *change*.
 * Clicking the link for the panel you are already on leaves the hash untouched,
 * so React Router re-renders nothing and the panel would stay shut. Handling
 * the click directly covers that case.
 *
 * Used by both the nav dropdowns and the footer link columns.
 */
export function openHashTarget(event) {
  const href = event.currentTarget.getAttribute('href') || ''
  const id = href.split('#')[1]
  if (!id) return

  const panel = document.getElementById(decodeURIComponent(id))
  if (!panel) return

  panel.open = true
  // Wait a frame so the expanded height is measured before scrolling.
  requestAnimationFrame(() => {
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}
