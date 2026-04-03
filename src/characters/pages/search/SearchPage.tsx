import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="The Ricky and Morty Site"
        subtitle="Search your character by name"
      />

      {/* Search */}
      <div className="relative mt-8 max-w-1/2 m-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 stroke-white" />
        <Input
          className="pl-12 text-white placeholder:text-white/90"
          placeholder="Toxic Morty"
        />
      </div>
    </>
  )
}
