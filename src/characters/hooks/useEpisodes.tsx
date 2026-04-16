import { useQuery } from '@tanstack/react-query'
import { getEpisodesAction } from '@/characters/actions/getEpisodesAction'

export const useEpisodes = (episodesId: number[]) => {
  return useQuery({
    queryKey: ['character', episodesId],
    queryFn: () => getEpisodesAction(episodesId.slice(0, 10)),
    retry: false,
    staleTime: 1000 * 60 * 5,
  })
}
