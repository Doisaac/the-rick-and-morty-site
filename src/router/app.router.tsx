import { createBrowserRouter, Navigate } from 'react-router'

import { CharacterDetailLayout } from '@/characters/layouts/CharactersDetailLayout'
import { CharacterPage } from '@/characters/pages/character/CharacterPage'
import { CharactersLayout } from '@/characters/layouts/CharactersLayout'
import { HomePage } from '@/characters/pages/home/HomePage'
import { SearchPage } from '@/characters/pages/search/SearchPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <CharactersLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: '/character',
    element: <CharacterDetailLayout />,
    children: [
      {
        path: ':characterId',
        element: <CharacterPage />,
      },
    ],
  },
])
