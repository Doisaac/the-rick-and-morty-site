import { RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { appRouter } from '@/router/app.router'

const queryClient = new QueryClient()

export const TheRickyAndMortySite = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter}></RouterProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default TheRickyAndMortySite
