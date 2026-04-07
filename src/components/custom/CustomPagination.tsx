import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Props {
  totalPages: number
}

export const CustomPagination = ({ totalPages }: Props) => {
  const page = 3 as number

  return (
    <section className="flex items-center justify-center space-x-2 py-20 px-8">
      <Button
        disabled={page === 1}
        className="bg-purple-700 hover:bg-purple-700/80"
      >
        <ChevronLeft />
        Previous
      </Button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          size={'icon'}
          variant={page === index + 1 ? 'default' : 'outline'}
          className={cn(
            {
              'bg-purple-700': page === index + 1,
            },
            'hover:bg-purple-700/80 hover:text-primary-foreground'
          )}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        disabled={page === totalPages}
        className="bg-purple-700 hover:bg-purple-700/80"
      >
        <ChevronRight />
        Next
      </Button>
    </section>
  )
}
