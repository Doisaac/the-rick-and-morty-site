import { createBrowserRouter } from 'react-router'

import { Character } from '@/characters/pages/character/CharacterPage'
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
        path: 'character/1',
        element: <Character />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },
])
