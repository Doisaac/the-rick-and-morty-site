import type { Character } from './character.interface'

export interface CharacterResponse {
  info: Info
  results: Character[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: null
}
