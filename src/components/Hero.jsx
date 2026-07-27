import { Suspense, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero3D from './Hero3D'

export default function Hero() {
  const ref = useRef(null)
  const scrollRef = useRef(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      scrollRef.current = v
    })
  }, [scrollYProgress])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-90">
        <Suspense fallback={null}>
          <Hero3D scrollRef={scrollRef} />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/30 to-bg pointer-events-none" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: [0.16, 0.84, 0.44, 1] }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-[13px] tracking-[0.2em] uppercase font-semibold">
            Developer · Builder · Legend
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 2.6, ease: [0.16, 0.84, 0.44, 1] }}
          className="font-display text-[2.6rem] sm:text-[4.5rem] lg:text-[6.4rem] leading-[1.02]"
        >
          Sifat Hossen Shuvo
          <br />
          <em className="text-accent font-normal italic">is still becoming.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 2.9, ease: [0.16, 0.84, 0.44, 1] }}
          className="mt-7 max-w-lg mx-auto text-soft text-[1.05rem] leading-7"
        >
          Full-stack developer from Bangladesh. This is my portfolio and my story, in one place —
          the work, and the life that built it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.1, ease: [0.16, 0.84, 0.44, 1] }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="border border-accent text-accent px-7 py-3 text-sm tracking-[0.06em] uppercase hover:bg-accent hover:text-bg transition-colors"
          >
            See the work
          </a>
          <a
            href="#story"
            className="text-soft px-7 py-3 text-sm tracking-[0.06em] uppercase hover:text-white transition-colors"
          >
            Read the story
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        <span className="text-[11px] tracking-[0.16em] uppercase text-softer">Scroll</span>
        <motion.div
          className="w-px h-11 bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
