import { useQuery } from '@tanstack/react-query'
import { getCharacterByIdAction } from '../actions/getCharacterByNameAction'

export const useCharacterByName = (characterId: number) => {
  return useQuery({
    queryKey: ['character', characterId],
    queryFn: () => getCharacterByIdAction(characterId),
    retry: false,
    staleTime: 1000 * 60 * 5,
  })
}
