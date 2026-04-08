import { Skull, PlusIcon, Heart, CircleQuestionMark } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Character, Status } from '../types/character.interface'

type StatusConfig = {
  icon: React.ComponentType<{ className?: string }>
  styles: string
}

const STATUS_CONFIG: Record<Status, StatusConfig> = {
  Alive: {
    icon: Heart,
    styles: 'bg-green-500/70',
  },
  Dead: {
    icon: Skull,
    styles: 'bg-red-500/70',
  },
  unknown: {
    icon: CircleQuestionMark,
    styles: 'bg-gray-500/70',
  },
}

interface Props {
  character: Character
}

export const CharacterCard = ({ character }: Props) => {
  const { icon: Icon, styles } = STATUS_CONFIG[character.status]

  return (
    <Card className="relative group overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
      <div className="relative h-64 z-20">
        <img
          src={character.image}
          alt={'character'}
          className="absolute -top-[34px] w-full h-[310px] object-cover group-hover:scale-110 transition-all duration-500"
        />

        {/* Character Status */}
        <div
          className={cn(
            'absolute top-0 left-6 flex gap-1 items-center text-white backdrop-blur-sm rounded-xl px-1.5 py-0.5 group:',
            styles
          )}
        >
          <Icon className="size-5" />
          {character.status}
        </div>
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
        <Button className="bg-purple-700" onClick={() => alert('hey')}>
          <PlusIcon />
          Info
        </Button>
      </div>
    </Card>
  )
}
