import { useCallback, useEffect, useState } from 'react'

/**
 * useState that persists to localStorage. Falls back to in-memory state if
 * storage is unavailable (private mode, quota, SSR).
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Ignore write failures -- state still works for this session.
    }
  }, [key, value])

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key)
    } catch {
      // Nothing to do if storage is unavailable.
    }
    setValue(initialValue)
  }, [key, initialValue])

  return [value, setValue, remove]
}
