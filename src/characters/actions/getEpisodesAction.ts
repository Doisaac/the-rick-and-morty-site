import { rickyAndMortyApi } from '../api/character.api'
import type { Episode } from '../types/episode.interface'

export const getEpisodesAction = async (ids: number[]) => {
  if (!ids.length) return []

  const { data } = await rickyAndMortyApi<Episode>(`/episode/${ids.join(',')}`)

  return Array.isArray(data) ? data : [data]
}
