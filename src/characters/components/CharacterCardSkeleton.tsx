import { Card, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const CharacterCardSkeleton = () => {
  return (
    <Card className="relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
      <div className="relative h-64 z-20">
        {/* Image */}
        <Skeleton className="absolute -top-[34px] w-full h-[310px] bg-gray-200 rounded-none" />

        {/* Character Status */}
        <Skeleton className="absolute top-0 left-6 flex gap-1 items-center rounded-xl px-1.5 py-0.5 w-20 h-6 bg-gray-300" />
      </div>

      {/* Title and location */}
      <CardHeader className="py-2 bg-gray-50/50 backdrop-blur-sm relative top-3">
        <Skeleton className="w-3/4 h-6 bg-gray-300"></Skeleton>
        <Skeleton className="w-1/2 h-6 bg-gray-300"></Skeleton>
      </CardHeader>
    </Card>
  )
}
