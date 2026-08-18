import { cn } from '@/utils'

/**
 * Thin wrapper over DaisyUI's .btn so variant/size stay props rather than
 * class strings scattered through the app.
 */
const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-outline',
  accent: 'btn-accent',
  ghost: 'btn-ghost',
}

const SIZES = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={cn('btn font-semibold', VARIANTS[variant], SIZES[size], className)}
      {...props}
    />
  )
}
