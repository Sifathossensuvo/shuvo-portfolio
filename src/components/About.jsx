import { motion } from 'framer-motion'
import Reveal from './Reveal'
import ImageFrame from './ImageFrame'

const stats = [
  { n: '3+', l: 'Years writing code' },
  { n: '10+', l: 'Projects shipped' },
  { n: '∞', l: 'Bugs survived' },
]

export default function About() {
  return (
    <section id="about" className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
        <Reveal>
          <div className="relative max-w-[360px] mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 0.84, 0.44, 1] }}
            >
              <ImageFrame
              src="/photo/about.png"
                label="Portrait — add your photo"
                ratio="aspect-[4/5]"
                className="border border-line"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 bg-bg border border-line px-5 py-4 hidden sm:block">
              <span className="block text-accent font-display italic text-lg">Dhaka,</span>
              <span className="block text-softer text-xs tracking-wide">Bangladesh</span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
              Who I Am
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[1.7rem] sm:text-[2.3rem] leading-tight mb-6">
              A developer from Bangladesh, building one project at a time.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#d8d8d8] text-[1.1rem] leading-8 font-light mb-5">
              I didn't come from a story full of advantages. My journey has been built through
              ordinary days, quiet struggles, and a lot of trying again.
            </p>
            <p className="text-[#d8d8d8] text-[1.1rem] leading-8 font-light mb-8">
              I care about how people feel when they use something I've built — not how many
              technologies I can list under it. This page is both: the work, and the life behind it.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-3 gap-6 border-t border-line pt-8">
            {stats.map((s) => (
              <div key={s.l}>
                <span className="block font-display text-3xl text-accent">{s.n}</span>
                <span className="block text-softer text-xs mt-1.5 tracking-wide">{s.l}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
