import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { dreams } from '../data/dreams'

export default function Dreams() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Dream Tracker
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-2xl mb-16 leading-tight">
            Not checkboxes. Ongoing conversations with myself.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-px bg-line border border-line">
          {dreams.map((d) => (
            <div key={d.title} className="bg-bg p-8 sm:p-11 grid md:grid-cols-[1.2fr_1fr] gap-10">
              <div>
                <h4 className="font-display text-[1.5rem] mb-3.5">{d.title}</h4>
                <p className="text-soft text-[1rem] leading-7 font-light">{d.text}</p>
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <div className="flex items-center gap-3.5">
                  <div className="flex-1 h-[3px] bg-line relative">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 0.84, 0.44, 1] }}
                    />
                  </div>
                  <span className="text-[13px] text-accent font-semibold min-w-[36px] text-right">
                    {d.progress}%
                  </span>
                </div>
                <span className="text-[13px] text-softer italic font-display">{d.why}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
