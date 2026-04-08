import { useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSearchParams } from 'react-router'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCharacter } from '@/characters/hooks/useCharacter'

interface Props {
  totalPages: number
}

export const CustomPagination = ({ totalPages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const queryPage = searchParams.get('page') ?? '1'
  const page = isNaN(+queryPage) ? 1 : +queryPage

  const { isFetching } = useCharacter(page)

  const handlePageChange = (page: number) => {
    setSearchParams((searchParams) => {
      const params = new URLSearchParams(searchParams)
      params.set('page', page.toString())
      return params
    })
  }

  // Scroll to top
  useEffect(() => {
    if (!isFetching) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [page, isFetching])

  return (
    <section className="flex items-center justify-center space-x-2 py-20 px-8 flex-wrap">
      <Button
        disabled={page === 1}
        className="bg-purple-700 hover:bg-purple-700/80"
        onClick={() => {
          handlePageChange(page - 1)
        }}
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
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        disabled={page === totalPages}
        className="bg-purple-700 hover:bg-purple-700/80"
        onClick={() => {
          handlePageChange(page + 1)
        }}
      >
        <ChevronRight />
        Next
      </Button>
    </section>
  )
}
