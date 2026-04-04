import { Skull, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'

export const CharacterCard = () => {
  return (
    <Card className="relative group overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
      <div className="relative h-64 z-20">
        <img
          src={'https://rickandmortyapi.com/api/character/avatar/360.jpeg'}
          alt={'character'}
          className="absolute -top-[34px] w-full h-[310px] object-cover group-hover:scale-110 transition-all duration-500"
        />

        <div className="absolute top-0 left-6 flex gap-1 items-center text-white">
          <Skull />
          Dead
          {/* <Heart />
            <BadgeQuestionMark /> */}
        </div>
      </div>

      <CardHeader className="py-2 bg-gray-50/50 backdrop-blur-sm relative top-3 group-hover:-top-[30px] transition-all duration-500 z-20">
        <h3 className="text-xl font-bold leading-tight">Tophat Jones</h3>
        <p className="text-sm text-gray-500">
          First seen in "A Rickle in Time"
        </p>
      </CardHeader>

      {/* Know more */}
      <div
        className="
          absolute inset-0 pb-3
          flex items-end justify-center
        
          opacity-0
          translate-y-4

          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all duration-400
        "
      >
        <Button onClick={() => alert('hey')}>
          <PlusIcon />
          Info
        </Button>
      </div>
    </Card>
  )
}
