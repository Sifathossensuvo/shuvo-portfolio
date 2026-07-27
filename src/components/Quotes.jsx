import Reveal from './Reveal'
import { quotes } from '../data/quotes'

export default function Quotes() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Notes to Self
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            Thoughts, not quotes.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="grid sm:grid-cols-2 gap-px bg-line border border-line">
          {quotes.map((q, i) => (
            <div key={i} className="bg-bg p-9 min-h-[180px] flex items-center">
              <p className="font-display italic text-[1.2rem] leading-snug text-[#e4e4e4]">{q}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
