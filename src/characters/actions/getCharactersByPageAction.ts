import { isAxiosError } from 'axios'
import { rickyAndMortyApi } from '../api/character.api'
import type { CharacterResponse } from '../types/get-characters-by-page.response'

interface Props {
  page?: number
  name?: string
}

export const getCharactersByPage = async ({ page = 1, name }: Props) => {
  try {
    const { data } = await rickyAndMortyApi<CharacterResponse>(`/character`, {
      params: {
        page,
        ...(name && { name: name }),
      },
    })

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return {
        results: [],
        info: { count: 0, pages: 0, next: '', prev: null },
      } satisfies CharacterResponse
    }

    throw error
  }
}
