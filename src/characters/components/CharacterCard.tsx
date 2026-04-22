import { PlusIcon } from 'lucide-react'
import { useNavigate } from 'react-router'

import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { StatusBadge } from './StatusBadge'
import type { Character } from '../types/character.interface'

interface Props {
  character: Character
}

export const CharacterCard = ({ character }: Props) => {
  const navigate = useNavigate()

  const handleClick = (characterId: number) => {
    navigate(`/character/${characterId}`)
  }

  return (
    <Card className="relative group overflow-hidden hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg hover:shadow-purple-700">
      <div className="relative h-64 z-20">
        <img
          src={character.image}
          alt={'character'}
          className="absolute -top-[34px] w-full h-[310px] object-cover group-hover:scale-110 transition-all duration-500"
        />

        {/* Character Status */}
        <StatusBadge
          className="absolute top-0 left-6"
          status={character.status}
        />
      </div>

      <CardHeader className="py-2 bg-gray-50/50 backdrop-blur-sm relative top-3 group-hover:-top-[30px] transition-all duration-500 z-20">
        <h3 className="text-xl font-bold leading-tight">{character.name}</h3>
        <p className="text-sm text-gray-500">
          First seen in{' '}
          <span className="font-semibold text-purple-700/60">
            "{character.location.name}"
          </span>
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
        <Button
          className="bg-purple-700"
          onClick={() => handleClick(character.id)}
        >
          <PlusIcon />
          Info
        </Button>
      </div>
    </Card>
  )
}
