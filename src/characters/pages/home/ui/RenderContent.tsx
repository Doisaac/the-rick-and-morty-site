import { CharacterGrid } from '@/characters/components/CharacterGrid'
import { CustomPagination } from '@/components/custom/CustomPagination'
import { QueryLoading } from '@/components/custom/QueryLoading'
import type { CharacterResponse } from '@/characters/types/get-characters-by-page.response'

interface RenderContentProps {
  characterResponse?: CharacterResponse
  isLoading: boolean
  isFetching: boolean
  isError: boolean
  fetchStatus: 'idle' | 'fetching' | 'paused'
}

export const RenderContent = ({
  characterResponse,
  isError,
  isFetching,
  isLoading,
  fetchStatus,
}: RenderContentProps) => {
  // First load
  if (isLoading) {
    return (
      <QueryLoading
        className="mx-8 my-20"
        title="Loading characters"
        description="Preparing the portal and fetching the next batch of characters."
      />
    )
  }

  return (
    <>
      {/* Offline */}
      {fetchStatus === 'paused' && (
        <p className="text-yellow-500 text-center py-20">
          No internet connection
        </p>
      )}

      {/* Error */}
      {isError && (
        <p className="text-red-400 text-center py-20 font-semibold">
          Too many requests. Please wait a few seconds and try again.
        </p>
      )}

      <CharacterGrid
        isFetching={isFetching}
        characters={characterResponse?.results || []}
      />

      <CustomPagination totalPages={characterResponse?.info.pages || 0} />
    </>
  )
}
