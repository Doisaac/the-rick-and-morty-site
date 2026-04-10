import { useSearchParams } from 'react-router'

import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { RenderContent } from './ui/RenderContent'
import { useCharacter } from '@/characters/hooks/useCharacter'

export const HomePage = () => {
  const [searchParams] = useSearchParams()

  const queryPage = searchParams.get('page') ?? '1'
  const page = isNaN(+queryPage) ? 1 : +queryPage

  const {
    data: characterResponse,
    isLoading,
    isFetching,
    isError,
    fetchStatus,
  } = useCharacter(page)

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="The Ricky and Morty Site"
        subtitle="A place where you can see your favorite characters"
      />

      {/* Grid */}
      <RenderContent
        fetchStatus={fetchStatus}
        isFetching={isFetching}
        isError={isError}
        isLoading={isLoading}
        characterResponse={characterResponse}
      />
    </>
  )
}
