import { useEffect, useState } from 'react'

/**
 * Returns a copy of `value` that only updates after `delay` ms of quiet.
 * Useful for search inputs so you fire one request instead of one per keypress.
 */
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}
