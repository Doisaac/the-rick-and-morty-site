import { rickyAndMortyApi } from '../api/character.api'

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: Date
}

export const getEpisodesAction = async (ids: number[]) => {
  if (!ids.length) return []

  const { data } = await rickyAndMortyApi<Episode>(`/episode/${ids.join(',')}`)

  return Array.isArray(data) ? data : [data]
}
