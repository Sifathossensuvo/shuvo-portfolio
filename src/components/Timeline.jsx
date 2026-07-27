import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'
import { timeline } from '../data/timeline'

export default function Timeline() {
  const wrapRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start 0.75', 'end 0.4'],
  })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Life Timeline
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-16 leading-tight">
            Every year left something behind.
          </h2>
        </Reveal>

        <div ref={wrapRef} className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-line" />
          <motion.div
            style={{ height }}
            className="absolute left-5 top-0 w-px bg-accent"
            initial={{ boxShadow: '0 0 12px #5cff8a' }}
          />

          {timeline.map((item, i) => (
            <TimelineItem key={item.year} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item }) {
  return (
    <Reveal delay={0} y={30} className="relative pl-16 mb-20 last:mb-0">
      <motion.div
        className="absolute left-3 top-1.5 w-[17px] h-[17px] rounded-full bg-bg border border-softer"
        whileInView={{ borderColor: '#5cff8a', backgroundColor: '#5cff8a', boxShadow: '0 0 16px #5cff8a' }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      />
      <span className="text-accent text-[13px] tracking-[0.14em] uppercase font-semibold">
        {item.year}
      </span>
      <h4 className="font-display text-[1.5rem] my-2.5">{item.title}</h4>
      <p className="text-soft text-[1.02rem] leading-7 font-light max-w-[560px]">{item.text}</p>
      <span
        className={
          'inline-block mt-3.5 text-xs tracking-[0.08em] uppercase px-3 py-1.5 rounded-full border ' +
          (item.fail ? 'text-[#d98a8a] border-deepRed/50' : 'text-softer border-line')
        }
      >
        {item.tag}
      </span>
    </Reveal>
  )
}
