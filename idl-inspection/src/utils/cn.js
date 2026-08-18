/**
 * Join class names, dropping falsy values. Lets you write conditional classes
 * without leaving stray "undefined" in the class attribute:
 *   cn('btn', isActive && 'btn-active')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
