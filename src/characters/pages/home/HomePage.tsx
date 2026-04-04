import { CharacterGrid } from '@/characters/components/CharacterGrid'
import { CustomJumbotron } from '@/components/custom/CustomJumbotron'

export const HomePage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="The Ricky and Morty Site"
        subtitle="A place where you can see your favorite characters"
      />

      {/* Grid */}
      <CharacterGrid />
    </>
  )
}
