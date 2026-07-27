import Reveal from './Reveal'
import ImageFrame from './ImageFrame'
import { achievements } from '../data/achievements'

export default function Achievements() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Achievements &amp; Certificates
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            Markers along the way.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08} className="border border-line bg-bgRaised">
              <ImageFrame src={a.image} label="Certificate" ratio="aspect-[4/3]" tint="plain" />
              <div className="p-6">
                <h4 className="font-display text-[1.15rem] mb-1.5">{a.title}</h4>
                <span className="block text-softer text-xs tracking-wide">
                  {a.issuer} · {a.date}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
