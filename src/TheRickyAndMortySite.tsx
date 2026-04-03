import { RouterProvider } from 'react-router'
import { appRouter } from '@/router/app.router'

export const TheRickyAndMortySite = () => {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  )
}

export default TheRickyAndMortySite
