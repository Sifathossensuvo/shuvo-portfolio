import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EntryGate({ onComplete, onFirstClick }) {
  const [clicks, setClicks] = useState(0)
  const [leaving, setLeaving] = useState(false)

  const handleClick = () => {
    if (leaving) return
    const next = clicks + 1

    if (clicks === 0) {
      onFirstClick?.()
    }

    if (next >= 3) {
      setClicks(3)
      setLeaving(true)
      setTimeout(() => onComplete?.(), 550)
      return
    }
    setClicks(next)
  }

  return (
    <AnimatePresence>
      {!leaving || clicks < 3 ? (
        <motion.div
          className="fixed inset-0 z-[1100] bg-bg flex flex-col items-center justify-center px-8 text-center select-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <motion.button
            onClick={handleClick}
            whileTap={{ scale: 0.94 }}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-accent/50 flex items-center justify-center relative"
            aria-label={`Click to begin, ${clicks} of 3`}
          >
            <motion.span
              key={clicks}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-display italic text-3xl text-accent"
            >
              {clicks === 0 ? 'Click' : `${clicks} / 3`}
            </motion.span>
            <motion.span
              className="absolute inset-0 rounded-full border border-accent"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.button>

          <p className="mt-10 text-soft text-sm max-w-xs leading-relaxed">
            Click three times to begin.
          </p>
          <div className="flex gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  i < clicks ? 'bg-accent' : 'bg-line'
                }`}
              />
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
