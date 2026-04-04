import { Outlet } from 'react-router'

export const CharactersLayout = () => {
  return (
    <div className="min-h-dvh w-full">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[url(/background.webp)] bg-cover bg-bottom bg-no-repeat"></div>

      {/* Gradient */}
      <div className="fixed z-10 pointer-events-none top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 from-0% to-transparent to-50%"></div>

      {/* Content */}
      <main className="relative z-20 max-w-5xl mx-auto py-20 px-6">
        <Outlet />
      </main>
    </div>
  )
}
