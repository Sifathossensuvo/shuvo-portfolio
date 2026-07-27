import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ImageFrame from '../components/ImageFrame'
import CustomCursor from '../components/CustomCursor'
import { allProjects } from '../data/allProjects'

export default function AllProjects() {
  return (
    <div className="min-h-screen px-8 py-24">
      <CustomCursor />
      <div className="max-w-[1040px] mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-soft hover:text-accent transition-colors text-sm mb-16"
        >
          ← Back to the story
        </Link>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4"
        >
          All Projects
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="font-display text-[2.2rem] sm:text-[3rem] max-w-2xl mb-16 leading-tight"
        >
          Everything I've built, in one place.
        </motion.h1>

        <div className="grid sm:grid-cols-2 gap-8">
          {allProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: [0.16, 0.84, 0.44, 1] }}
              className="border border-line bg-bgRaised"
            >
              <ImageFrame
              src={p.image}
                label={`${p.name} — preview`}
                ratio="aspect-[16/10]"
                tint={i % 2 === 0 ? 'green' : 'red'}
              />
              <div className="p-7">
                <h3 className="font-display text-[1.4rem] mb-2.5">{p.name}</h3>
                <p className="text-soft text-[0.98rem] leading-7 font-light mb-5">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 mb-6">
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
                  <a href={p.code} className="text-sm text-soft border-b border-line hover:text-white hover:border-white/40 transition-colors">
                    Source code →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
