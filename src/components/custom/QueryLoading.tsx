import { Spinner } from '@/components/ui/spinner'
import { cn } from '@/lib/utils'

interface QueryLoadingProps {
  title?: string
  description?: string
  className?: string
  spinnerClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export const QueryLoading = ({
  title = 'Loading',
  description = 'Fetching data from the API...',
  className,
  spinnerClassName,
  titleClassName,
  descriptionClassName,
}: QueryLoadingProps) => {
  return (
    <div
      className={cn(
        'flex min-h-40 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center',
        className
      )}
    >
      <Spinner className={cn('size-10 stroke-white', spinnerClassName)} />
      <div className={'space-y-1'}>
        <p
          className={cn(
            'text-sm font-semibold tracking-wide text-white',
            titleClassName
          )}
        >
          {title}
        </p>
        <p className={cn('text-sm text-white/70', descriptionClassName)}>
          {description}
        </p>
      </div>
    </div>
  )
}
