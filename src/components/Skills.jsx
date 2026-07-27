import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVite,
} from 'react-icons/si'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { skillCategories } from '../data/skills'

const ICONS = {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVite,
}

export default function Skills() {
  return (
    <section id="skills" className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-4">
            Skills &amp; Tools
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[2rem] sm:text-[3.2rem] max-w-xl mb-20 leading-tight">
            Tools I reach for, not just tools I know.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.label} delay={ci * 0.08}>
              <h3 className="text-softer text-xs tracking-[0.14em] uppercase mb-6">{cat.label}</h3>
              <div className="flex flex-col gap-1">
                {cat.items.map((item, i) => {
                  const Icon = ICONS[item.icon]
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="flex items-center gap-3.5 py-3 border-b border-line group"
                    >
                      {Icon && (
                        <Icon className="text-soft group-hover:text-accent transition-colors" size={19} />
                      )}
                      <span className="text-[#d8d8d8] font-light group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
