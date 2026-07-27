import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { gallery } from '../data/gallery'

const spanClass = {
  tall: 'md:row-span-2',
  wide: 'md:col-span-2',
  normal: '',
}

export default function Gallery() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Gallery — Important Memories
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-2xl mb-6 leading-tight">
            Moments, kept.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-soft text-sm mb-16 max-w-lg font-light leading-6">
            Photographs are proof — of late nights, of finished things, of the version of me
            that kept going even when it didn't look like much from the outside.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 auto-rows-[220px] gap-3">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={i * 0.05} className={`${spanClass[g.span]} relative overflow-hidden group`}>
              <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.16, 0.84, 0.44, 1] }}
              >
                {g.src ? (
                  <img src={g.src} alt={g.caption} className="w-full h-full object-cover grayscale-[30%]" />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, #0b0c0b 0%, #050505 55%, #123320 100%)',
                    }}
                  >
                    <span className="text-softer text-xs tracking-[0.1em] uppercase">Photo placeholder</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <span className="text-sm text-white font-light">{g.caption}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
