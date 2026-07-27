import Reveal from './Reveal'
import { visitorMessages } from '../data/messages'

export default function Testimonials() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Visitor Messages
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-6 leading-tight">
            Words left behind by people who stopped by.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-soft text-sm mb-16 max-w-lg font-light leading-6">
            A few words left by people who took the time to read this far.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {visitorMessages.map((m, i) => (
            <Reveal key={i} delay={i * 0.08} className="border border-line p-7 bg-bgRaised">
              <p className="text-[#d8d8d8] font-light leading-7 mb-5">"{m.text}"</p>
              <span className="text-softer text-xs tracking-wide uppercase">— {m.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
