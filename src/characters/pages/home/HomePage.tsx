import { useSearchParams } from 'react-router'

import { CharacterGrid } from '@/characters/components/CharacterGrid'
import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { CustomPagination } from '@/components/custom/CustomPagination'
import { useCharacter } from '@/characters/hooks/useCharacter'

export const HomePage = () => {
  const [searchParams] = useSearchParams()

  const queryPage = searchParams.get('page') ?? '1'
  const page = isNaN(+queryPage) ? 1 : +queryPage

  const { data: characterResponse } = useCharacter(page)

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="The Ricky and Morty Site"
        subtitle="A place where you can see your favorite characters"
      />

      {/* Grid */}
      <CharacterGrid characters={characterResponse?.results || []} />

      <CustomPagination totalPages={characterResponse?.info.pages || 0} />
    </>
  )
}
