export interface Character {
  id: number
  name: string
  status: Status
  species: Species
  type: string
  gender: Gender
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: Date
}

export type Species = 'Alien' | 'Human'

export type Status = 'Alive' | 'Dead' | 'unknown'

export type Gender = 'Female' | 'Male' | 'unknown'

export interface Location {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}
