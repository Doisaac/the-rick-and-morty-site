import { CharacterCard } from './CharacterCard'
import type { Character } from '../types/character.interface'

interface Props {
  characters: Character[]
}

export const CharacterGrid = ({ characters }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-8">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  )
}
