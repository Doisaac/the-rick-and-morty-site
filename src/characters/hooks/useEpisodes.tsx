import { useQuery } from '@tanstack/react-query'
import { getEpisodesAction } from '@/characters/actions/getEpisodesAction'

export const useEpisodes = (episodesId: number[]) => {
  return useQuery({
    queryKey: ['episodes', episodesId],
    queryFn: () => getEpisodesAction(episodesId.slice(0, 10)),
    enabled: episodesId.length > 0,
    retry: false,
    staleTime: 1000 * 60 * 5,
  })
}
