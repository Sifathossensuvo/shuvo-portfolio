import Reveal from './Reveal'
import { dailyJourney } from '../data/dailyJourney'

export default function DailyJourney() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Daily Journey
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            What an ordinary day actually looks like.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
          {dailyJourney.map((d, i) => (
            <Reveal key={d.time} delay={i * 0.06} className="bg-bg p-7">
              <span className="text-accent text-xs tracking-[0.14em] uppercase font-semibold">
                {d.time}
              </span>
              <h4 className="font-display text-[1.2rem] my-3">{d.title}</h4>
              <p className="text-soft text-sm leading-6 font-light">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
