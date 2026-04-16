import { CircleQuestionMark, Heart, Skull } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { Status } from '@/characters/types/character.interface'

type StatusConfig = {
  icon: React.ComponentType<{ className?: string }>
  styles: string
}

const STATUS_CONFIG: Record<Status, StatusConfig> = {
  Alive: {
    icon: Heart,
    styles: 'bg-status-alive/70',
  },
  Dead: {
    icon: Skull,
    styles: 'bg-status-dead/70',
  },
  unknown: {
    icon: CircleQuestionMark,
    styles: 'bg-status-unknown/70',
  },
}

interface StatusBadgeProps {
  status: Status
  className?: string
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const { icon: Icon, styles } = STATUS_CONFIG[status]

  return (
    <div
      className={cn(
        'flex gap-1 items-center text-white backdrop-blur-sm rounded-xl px-1.5 py-0.5 text-sm',
        styles,
        className
      )}
    >
      <Icon className="size-5" />
      {status}
    </div>
  )
}
