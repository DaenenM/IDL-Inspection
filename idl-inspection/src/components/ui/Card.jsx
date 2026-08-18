import { cn } from '@/utils'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-box border border-base-300 bg-base-100 p-6 text-left shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn('mb-2 text-lg font-semibold text-base-content', className)}
      {...props}
    />
  )
}

export function CardBody({ className, ...props }) {
  return <div className={cn('text-sm text-base-content/70', className)} {...props} />
}
