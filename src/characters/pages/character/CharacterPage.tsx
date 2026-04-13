import { useParams } from 'react-router'

export const Character = () => {
  const { characterSlug } = useParams()

  // TODO: Enhance Character Page
  return (
    <>
      <h1 className="text-white text-6xl font-bold">{characterSlug}</h1>
    </>
  )
}
