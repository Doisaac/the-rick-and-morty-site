import { CharacterCardSkeleton } from './CharacterCardSkeleton'

interface Props {
  characterCount: number
}

export const CharacterGridSkeleton = ({ characterCount }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-8">
      {Array.from({ length: characterCount }).map((_, index) => (
        <CharacterCardSkeleton key={index} />
      ))}
    </section>
  )
}
