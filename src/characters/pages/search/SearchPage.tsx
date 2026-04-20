import { Search } from 'lucide-react'
import { type SubmitEvent } from 'react'
import { useSearchParams } from 'react-router'

import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { Input } from '@/components/ui/input'
import { CharacterGrid } from '@/characters/components/CharacterGrid'
import { useSearchCharacter } from '@/characters/hooks/useSearchCharacter'

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const nameParam = searchParams.get('name') ?? undefined
  const { data: character, isFetching } = useSearchCharacter(nameParam)

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = (formData.get('name') as string).trim()

    setSearchParams((searchParams) => {
      const newSearchParams = new URLSearchParams(searchParams)

      if (name) {
        newSearchParams.set('name', name)
      } else {
        newSearchParams.delete('name')
      }

      return newSearchParams
    })
  }

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="The Ricky and Morty Site"
        subtitle="Search your character by name"
      />

      {/* Search */}
      <form onSubmit={handleSubmit} className="relative mt-8 max-w-1/2 m-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 stroke-white" />
        <Input
          name="name"
          className="pl-12 text-white placeholder:text-white/90"
          placeholder="Toxic Morty"
        />
      </form>

      <CharacterGrid
        isFetching={isFetching}
        characters={character?.results || []}
      />
    </>
  )
}
