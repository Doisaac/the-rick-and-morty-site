import type { ElementType } from 'react'

interface Props {
  icon: ElementType
  label: string
  value: string
}

export const InfoItem = ({ icon: Icon, label, value }: Props) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
        <Icon className="size-3.5" />
        {label}
      </div>
      <p className="text-card-foreground font-medium">{value}</p>
    </div>
  )
}
