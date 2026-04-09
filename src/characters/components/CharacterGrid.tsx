import { CharacterCard } from './CharacterCard'
import { CharacterCardSkeleton } from './CharacterCardSkeleton'
import type { Character } from '../types/character.interface'

interface Props {
  characters: Character[]
  isFetching: boolean
}

export const CharacterGrid = ({ characters, isFetching }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-8">
      {isFetching
        ? Array.from({ length: characters.length || 6 }).map((_, index) => (
            <CharacterCardSkeleton key={index} />
          ))
        : characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
    </section>
  )
}
