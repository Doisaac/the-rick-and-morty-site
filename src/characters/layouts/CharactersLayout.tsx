import { Outlet } from 'react-router'

export const CharactersLayout = () => {
  return (
    <div className="relative min-h-dvh w-full bg-neutral-900">
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px] pointer-events-none"></div>

      {/* Content */}
      <main className="max-w-5xl mx-auto py-20 px-6">
        <Outlet />
      </main>
    </div>
  )
}
