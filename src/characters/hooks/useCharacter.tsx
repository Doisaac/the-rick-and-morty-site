import { useQuery } from '@tanstack/react-query'
import { getCharactersByPage } from '../actions/getCharactersByPageAction'

export const useCharacter = (page: number) => {
  return useQuery({
    queryKey: ['character', { page }],
    queryFn: () => getCharactersByPage(page),
    staleTime: 1000 * 60 * 10,
  })
}
