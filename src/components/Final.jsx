import Reveal from './Reveal'

export function Final() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 py-32">
      <Reveal>
        <h2 className="font-display text-[2rem] sm:text-[3.4rem] max-w-3xl leading-snug mb-10">
          I came here to see a developer's portfolio.
          <br />
          I left feeling like I'd read <em className="italic text-accent">part of someone's life.</em>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <span className="text-softer text-sm tracking-wide">
          This is not the end of the story. It's simply the chapter you just read.
        </span>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="text-center py-16 px-8 text-softer text-xs tracking-wide">
      Sifat Hossen Suvo — built to last, not to impress.
    </footer>
  )
}
