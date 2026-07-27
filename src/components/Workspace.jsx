import Reveal from './Reveal'
import ImageFrame from './ImageFrame'

export default function Workspace() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <ImageFrame src={'/photo/coder.png'} label="Workspace photo" ratio="aspect-[4/3]" tint="green" className="border border-line" />
        </Reveal>
        <div>
          <Reveal>
            <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
              My Workspace
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[1.8rem] sm:text-[2.4rem] leading-tight mb-6">
              Where all of this actually happens.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#d8d8d8] text-[1.05rem] leading-8 font-light">
              Nothing fancy — a desk, a screen, and whatever cup of tea survived the longest.
              Most of the timeline above was written from right here.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
