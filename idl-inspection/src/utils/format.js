/**
 * Formatting helpers. Pure functions only -- no React, no side effects, so
 * they stay trivially testable.
 */

export function formatDate(value, locale = 'en-US') {
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return ''

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function truncate(text, maxLength = 80) {
  if (typeof text !== 'string' || text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}...`
}
