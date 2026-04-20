import { useQuery } from '@tanstack/react-query'
import { getCharactersByPage } from '../actions/getCharactersByPageAction'

export const useSearchCharacter = (name?: string) => {
  return useQuery({
    queryKey: ['character-search', name],
    queryFn: () => getCharactersByPage({ name }),
    enabled: !!name,
    staleTime: 1000 * 60 * 10,
  })
}
