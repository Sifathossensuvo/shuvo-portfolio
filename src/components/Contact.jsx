import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Get in Touch
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            Leave something behind, too.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="grid md:grid-cols-2 gap-14">
          <div className="flex flex-col">
            <a
              href="mailto:sifatossensuvo@gmail.com"
              className="py-5 border-b border-line flex justify-between items-center text-lg hover:text-accent transition-colors"
            >
              Email <span className="text-sm text-softer">sifathossensuvo@gmail.com</span>
            </a>
            <a
              href="https://github.com/Sifathossensuvo/"
              target="_blank"
  rel="noopener noreferrer"
              className="py-5 border-b border-line flex justify-between items-center text-lg hover:text-accent transition-colors"
            >n
              GitHub <span className="text-sm text-softer">@Sifathossensuvo</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sifat-hossen-shuvo-a1a53241b/"
              target="_blank"
  rel="noopener noreferrer"
              className="py-5 border-b border-line flex justify-between items-center text-lg hover:text-accent transition-colors"
            >
              LinkedIn <span className="text-sm text-softer">Sifat Hossen Shuvo</span>
            </a>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              aria-label="Your name"
              className="bg-transparent border-b border-line py-3.5 px-0.5 text-white placeholder:text-softer focus:outline-none"
            />
            <textarea
              rows={3}
              placeholder="Leave a message"
              aria-label="Your message"
              className="bg-transparent border-b border-line py-3.5 px-0.5 text-white placeholder:text-softer focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="mt-3 self-start border border-accent text-accent px-8 py-3.5 text-sm tracking-[0.08em] uppercase hover:bg-accent hover:text-bg transition-colors"
            >
              Send
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
