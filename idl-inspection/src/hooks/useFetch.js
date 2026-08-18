import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Runs an async function and tracks loading/error/data around it.
 *
 * `asyncFn` must be stable -- wrap it in useCallback at the call site, or
 * define it outside the component, otherwise this refetches every render.
 */
export function useFetch(asyncFn, { immediate = true } = {}) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(immediate)

  // Guards against setting state after the component unmounts.
  const activeRef = useRef(true)
  useEffect(() => {
    activeRef.current = true
    return () => {
      activeRef.current = false
    }
  }, [])

  const run = useCallback(
    async (...args) => {
      setLoading(true)
      setError(null)
      try {
        const result = await asyncFn(...args)
        if (activeRef.current) setData(result)
        return result
      } catch (err) {
        if (activeRef.current) setError(err)
        throw err
      } finally {
        if (activeRef.current) setLoading(false)
      }
    },
    [asyncFn],
  )

  useEffect(() => {
    if (immediate) run().catch(() => {})
  }, [immediate, run])

  return { data, error, loading, refetch: run }
}
