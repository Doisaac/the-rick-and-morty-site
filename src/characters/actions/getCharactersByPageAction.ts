import { rickyAndMortyApi } from '../api/character.api'
import type { CharacterResponse } from '../types/get-characters-by-page.response'

interface Props {
  page?: number
  name?: string
}

export const getCharactersByPage = async ({ page = 1, name }: Props) => {
  const { data } = await rickyAndMortyApi<CharacterResponse>(`/character`, {
    params: {
      page,
      ...(name && { name: name }),
    },
  })
  return data
}
