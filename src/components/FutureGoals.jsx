import Reveal from './Reveal'
import { futureGoals } from '../data/futureGoals'

export default function FutureGoals() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Future Goals
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            Where this is headed, roughly.
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {futureGoals.map((g, i) => (
            <Reveal
              key={g.horizon}
              delay={i * 0.08}
              className="grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-10 py-8 border-b border-line last:border-b-0"
            >
              <span className="text-accent text-sm tracking-wide font-medium">{g.horizon}</span>
              <div>
                <h4 className="font-display text-[1.3rem] mb-2">{g.goal}</h4>
                <p className="text-soft text-[0.98rem] leading-7 font-light max-w-lg">{g.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
