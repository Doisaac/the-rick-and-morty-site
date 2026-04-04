import { CharacterCard } from './CharacterCard'

export const CharacterGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-8">
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </section>
  )
}
