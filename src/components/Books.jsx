import Reveal from './Reveal'
import ImageFrame from './ImageFrame'
import { books } from '../data/books'

export default function Books() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Favorite Books
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            Pages that changed how I think.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-8">
          {books.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <ImageFrame src={b.image} label="Book cover" ratio="aspect-[3/4]" tint="green" className="border border-line mb-5" />
              <h4 className="font-display text-[1.15rem] mb-1">{b.title}</h4>
              <span className="block text-softer text-xs tracking-wide mb-3">{b.author}</span>
              <p className="text-soft text-sm font-light leading-6">{b.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
