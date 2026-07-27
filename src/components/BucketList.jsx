import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { bucketList } from '../data/bucketList'

export default function BucketList() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Bucket List
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            Life, outside the editor too.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-12">
          {bucketList.map((b, i) => (
            <Reveal key={b.item} delay={i * 0.05} className="flex items-center gap-4 py-4 border-b border-line">
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                  b.done ? 'border-accent bg-accent' : 'border-softer'
                }`}
              >
                {b.done && (
                  <motion.svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                  >
                    <path d="M1 4L3.5 6.5L9 1" stroke="#050505" strokeWidth="1.5" fill="none" />
                  </motion.svg>
                )}
              </span>
              <span className={`font-light ${b.done ? 'text-soft line-through' : 'text-[#d8d8d8]'}`}>
                {b.item}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
