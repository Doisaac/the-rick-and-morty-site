interface Props {
  title: string
  subtitle: string
}

export const CustomJumbotron = ({ title, subtitle }: Props) => {
  return (
    <section className="flex items-center justify-center flex-col gap-3 text-white text-center">
      <h1 className="font-black text-6xl">{title}</h1>
      <p className="font-semibold text-white/70 text-lg">{subtitle}</p>
    </section>
  )
}
