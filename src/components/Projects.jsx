import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import ImageFrame from './ImageFrame'
import { projects } from '../data/projects'

function TiltPreview({ project }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 150, damping: 18 })

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }
  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative"
    >
      <ImageFrame
      src={project.image}
        label={`${project.name} — preview`}
        ratio="aspect-[16/10]"
        tint={project.index === '01' ? 'green' : 'red'}
        className="border border-line"
      />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Featured Projects
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-2xl mb-4 leading-tight">
            Case studies, not a list of repos.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-soft text-sm mb-20 max-w-lg font-light leading-6">
            Two examples for now. Each one carries more than the code it's built from —
            a decision, a mistake, and something learned the hard way.
          </p>
        </Reveal>

        <div className="flex flex-col gap-32">
          {projects.map((p, i) => (
            <Reveal key={p.index} className={`grid md:grid-cols-2 gap-10 items-center`}>
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <TiltPreview project={p} />
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <span className="font-display italic text-3xl text-accentDim block mb-3">
                  {p.index}
                </span>
                <h4 className="font-display text-[1.8rem] mb-1.5">{p.name}</h4>
                <span className="block text-softer text-[13px] tracking-[0.1em] uppercase mb-6">
                  {p.role}
                </span>
                <p className="text-[#c4c4c4] text-[1.02rem] leading-7 font-light mb-4">
                  <strong className="text-white font-medium">Why it exists: </strong>
                  {p.why}
                </p>
                <p className="text-[#c4c4c4] text-[1.02rem] leading-7 font-light mb-4">
                  <strong className="text-white font-medium">What went wrong: </strong>
                  {p.mistake}
                </p>
                <p className="text-[#c4c4c4] text-[1.02rem] leading-7 font-light mb-6">
                  <strong className="text-white font-medium">What it taught me: </strong>
                  {p.lesson}
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs text-soft border border-line px-3 py-1.5 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5">
                  <a href={p.live} target="_blank"
  rel="noopener noreferrer" className="text-sm text-accent border-b border-accent/40 hover:border-accent transition-colors">
                    Live site →
                  </a>
                  <a href={p.code} target="_blank"
  rel="noopener noreferrer" className="text-sm text-soft border-b border-line hover:text-white hover:border-white/40 transition-colors">
                    Source code →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="flex justify-center mt-24">
          <Link
            to="/all-projects"
            className="inline-flex items-center gap-3 border border-accent text-accent px-9 py-4 text-sm tracking-[0.08em] uppercase hover:bg-accent hover:text-bg transition-colors"
          >
            View All Projects
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
