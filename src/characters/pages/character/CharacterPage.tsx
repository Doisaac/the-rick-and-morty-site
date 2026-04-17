import { ArrowLeft, MapPin, Globe, Dna, User } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router'

import { InfoItem } from './ui/InfoItem'
import { StatusBadge } from '../../components/StatusBadge'
import { useCharacterByName } from '@/characters/hooks/useCharacterByName'
import { useEpisodes } from '@/characters/hooks/useEpisodes'
import { QueryLoading } from '@/components/custom/QueryLoading'

export const CharacterPage = () => {
  const { characterId } = useParams()

  const {
    data: character,
    isLoading,
    isError,
  } = useCharacterByName(Number(characterId))

  const episodesId =
    character?.episode.map((episode) => {
      return Number(episode.split('/').pop())
    }) ?? []

  const { data: episodes, isLoading: isEpisodesLoading } = useEpisodes(
    episodesId.slice(0, 10)
  )

  // Display only if Character info is loading
  if (isLoading)
    return (
      <QueryLoading
        className="my-20"
        title="Loading character"
        description="Fetching the selected character and their latest details."
      />
    )

  if (isError || !character) {
    return <Navigate to="/" />
  }

  return (
    <section>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-white/80 hover:text-muted-foreground transition-colors mb-20"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to characters
      </Link>

      <div className="px-8">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-80 shrink-0">
              <img
                src={character.image}
                alt={character.name}
                className="w-2xl h-full object-bottom"
              />
            </div>

            <div className="p-6 md:p-8 flex-1 space-y-6 w-full">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-card-foreground">
                  {character.name}
                </h1>
                <StatusBadge status={character.status} />
              </div>

              {/* Grid Info */}
              <div className="grid grid-cols-2 gap-4">
                <InfoItem
                  icon={Dna}
                  label="Species"
                  value={character.species}
                />
                <InfoItem icon={User} label="Gender" value={character.gender} />
                <InfoItem
                  icon={Globe}
                  label="Origin"
                  value={character.origin.name}
                />
                <InfoItem
                  icon={MapPin}
                  label="Location"
                  value={character.location.name}
                />
              </div>

              {/* Type */}
              {character.type && (
                <div>
                  <span className="text-muted-foreground text-sm">Type: </span>
                  <span className="text-card-foreground">{character.type}</span>
                </div>
              )}

              {/* # of Episodes */}
              <div className="text-sm text-muted-foreground">
                Appears in{' '}
                <span className="text-purple-700 font-semibold">
                  {character.episode.length}
                </span>{' '}
                episodes
              </div>
            </div>
          </div>
        </div>

        {/* Episodes */}
        {(isEpisodesLoading || (episodes && episodes.length > 0)) && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-card mb-4">Episodes</h2>

            {isEpisodesLoading ? (
              <QueryLoading
                className="min-h-32 bg-gradient-to-br from-white to-gray-50"
                spinnerClassName="stroke-card-foreground"
                title="Loading episodes"
                titleClassName="text-card-foreground"
                description="Fetching the first episodes where this character appears."
                descriptionClassName="text-muted-foreground"
              />
            ) : (
              <div className="grid gap-2">
                {episodes?.map((ep) => (
                  <div
                    key={ep.id}
                    className="bg-card rounded-lg px-4 py-3 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-accent-foreground font-mono text-sm mr-3">
                        {ep.episode}
                      </span>
                      <span className="text-card-foreground">{ep.name}</span>
                    </div>

                    <span className="text-muted-foreground text-sm">
                      {ep.air_date}
                    </span>
                  </div>
                ))}

                {character.episode.length > 10 && (
                  <p className="text-muted text-sm text-center py-2">
                    ...and {character.episode.length - 10} more episodes
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
