import Reveal from './Reveal'
import { music } from '../data/music'

export default function Music() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Favorite Music
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            The soundtrack behind the code.
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {music.map((m, i) => (
            <Reveal
              key={m.track}
              delay={i * 0.06}
              className="flex items-center justify-between gap-6 py-6 border-b border-line last:border-b-0"
            >
              <div className="flex items-center gap-5">
                <span className="font-display italic text-2xl text-accentDim w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-display text-[1.1rem]">{m.track}</h4>
                  <span className="text-softer text-xs tracking-wide">{m.artist}</span>
                </div>
              </div>
              <p className="text-soft text-sm font-light max-w-[220px] text-right hidden sm:block">
                {m.note}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
