import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[1000] bg-bg flex flex-col items-center justify-center gap-5"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <span className="text-xs tracking-[0.14em] uppercase text-soft font-medium">
            loading a life
          </span>
          <div className="w-56 h-px bg-line relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-accent"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: [0.16, 0.84, 0.44, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
