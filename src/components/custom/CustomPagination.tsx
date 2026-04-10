import { useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSearchParams } from 'react-router'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCharacter } from '@/characters/hooks/useCharacter'

interface Props {
  totalPages: number
}

const VISIBLE_PAGES = 3

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

  const getVisiblePages = () => {
    if (totalPages <= VISIBLE_PAGES) {
      return Array.from({ length: totalPages }, (_, index) => index + 1)
    }

    const middleOffset = Math.floor(VISIBLE_PAGES / 2)
    let startPage = Math.max(1, page - middleOffset)
    let endPage = startPage + VISIBLE_PAGES - 1

    if (endPage > totalPages) {
      endPage = totalPages
      startPage = totalPages - VISIBLE_PAGES + 1
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    )
  }

  const visiblePages = getVisiblePages()
  const showLeadingDots = visiblePages[0] > 2
  const showTrailingDots = visiblePages.at(-1)! < totalPages - 1

  return (
    <section className="flex items-center justify-center gap-2 px-4 py-20 flex-wrap">
      <Button
        disabled={page === 1}
        size="sm"
        className="bg-purple-700 hover:bg-purple-700/80"
        onClick={() => {
          handlePageChange(page - 1)
        }}
      >
        <ChevronLeft />
        Prev
      </Button>

      {visiblePages[0] > 1 && (
        <Button
          size={'icon-sm'}
          variant={page === 1 ? 'default' : 'outline'}
          className={cn(
            {
              'bg-purple-700 text-primary-foreground': page === 1,
            },
            'hover:bg-purple-700/80 hover:text-primary-foreground'
          )}
          onClick={() => handlePageChange(1)}
        >
          1
        </Button>
      )}

      {showLeadingDots && (
        <span className="px-1 text-md font-semibold text-white">...</span>
      )}

      {visiblePages.map((visiblePage) => (
        <Button
          key={visiblePage}
          size={'icon'}
          variant={page === visiblePage ? 'default' : 'outline'}
          className={cn(
            {
              'bg-purple-700 text-primary-foreground': page === visiblePage,
            },
            'hover:bg-purple-700/80 hover:text-primary-foreground'
          )}
          onClick={() => handlePageChange(visiblePage)}
        >
          {visiblePage}
        </Button>
      ))}

      {showTrailingDots && (
        <span className="px-1 text-md  font-semibold text-white">...</span>
      )}

      {visiblePages.at(-1)! < totalPages && (
        <Button
          size={'icon-sm'}
          variant={page === totalPages ? 'default' : 'outline'}
          className={cn(
            {
              'bg-purple-700 text-primary-foreground': page === totalPages,
            },
            'hover:bg-purple-700/80 hover:text-primary-foreground'
          )}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Button>
      )}

      <Button
        disabled={page === totalPages}
        size="sm"
        className="bg-purple-700 hover:bg-purple-700/80"
        onClick={() => {
          handlePageChange(page + 1)
        }}
      >
        Next
        <ChevronRight />
      </Button>
    </section>
  )
}
