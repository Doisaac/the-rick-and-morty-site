import { rickyAndMortyApi } from '../api/character.api'
import type { CharacterResponse } from '../types/get-characters-by-page.response'

export const getCharactersByPage = async (page: number) => {
  const { data } = await rickyAndMortyApi<CharacterResponse>(
    `/character?page=${page}`
  )
  return data
}
