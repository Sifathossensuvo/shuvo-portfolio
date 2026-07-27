import Reveal from './Reveal'
import { openSource } from '../data/openSource'

export default function OpenSource() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Open Source
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            Building in the open, sometimes.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col">
          {openSource.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="group flex items-center justify-between gap-6 py-7 border-b border-line hover:border-accent/40 transition-colors"
            >
              <div>
                <h4 className="font-display text-[1.3rem] mb-1.5 group-hover:text-accent transition-colors">
                  {item.name}
                </h4>
                <p className="text-soft text-sm font-light max-w-md">{item.description}</p>
              </div>
              <span className="shrink-0 text-xs text-softer border border-line px-3 py-1.5 rounded-full uppercase tracking-wide">
                {item.tag}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
