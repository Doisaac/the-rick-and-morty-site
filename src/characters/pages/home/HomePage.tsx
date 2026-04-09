import { useSearchParams } from 'react-router'

import { CharacterGrid } from '@/characters/components/CharacterGrid'
import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { CustomPagination } from '@/components/custom/CustomPagination'
import { Spinner } from '@/components/ui/spinner'
import { useCharacter } from '@/characters/hooks/useCharacter'

export const HomePage = () => {
  const [searchParams] = useSearchParams()

  const queryPage = searchParams.get('page') ?? '1'
  const page = isNaN(+queryPage) ? 1 : +queryPage

  const { data: characterResponse, isLoading, isFetching } = useCharacter(page)

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="The Ricky and Morty Site"
        subtitle="A place where you can see your favorite characters"
      />

      {/* Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Spinner className="size-10 stroke-white" />
        </div>
      ) : (
        <>
          <CharacterGrid
            isFetching={isFetching}
            characters={characterResponse?.results || []}
          />

          <CustomPagination totalPages={characterResponse?.info.pages || 0} />
        </>
      )}
    </>
  )
}
