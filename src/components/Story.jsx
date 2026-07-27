import Reveal from './Reveal'
import { story } from '../data/story'

export default function Story() {
  return (
    <section id="story" className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            My Story
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            The chapters that got me here.
          </h2>
        </Reveal>

        <div>
          {story.map((chapter, i) => (
            <Reveal key={chapter.title} delay={0.05} className="max-w-[680px] mx-auto mb-32 last:mb-0">
              <span className="block font-display italic text-accent mb-3.5">{chapter.num}</span>
              <h3 className="font-display text-[1.6rem] sm:text-[2.3rem] mb-6 leading-snug">
                {chapter.title}
              </h3>
              {chapter.paragraphs.map((p, idx) => (
                <p key={idx} className="text-[#c8c8c8] text-[1.1rem] leading-8 font-light mb-5 last:mb-0">
                  {p}
                </p>
              ))}
              {chapter.pull && (
                <p className="font-display italic text-[1.3rem] sm:text-[1.7rem] leading-snug my-9 pl-6 border-l-2 border-accent">
                  {chapter.pull}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
