import { rickyAndMortyApi } from '../api/character.api'
import type { Character } from '../types/character.interface'

export const getCharacterByIdAction = async (id: number) => {
  const { data } = await rickyAndMortyApi<Character>(`/character/${id}`)
  return data
}
