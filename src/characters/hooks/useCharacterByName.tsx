import { useQuery } from '@tanstack/react-query'
import { getCharacterByIdAction } from '../actions/getCharacterByIdAction'

export const useCharacterByName = (characterId: number) => {
  return useQuery({
    queryKey: ['characterByName', characterId],
    queryFn: () => getCharacterByIdAction(characterId),
    retry: false,
    staleTime: 1000 * 60 * 5,
  })
}
