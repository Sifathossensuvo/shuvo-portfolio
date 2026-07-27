import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ProtectionGuard() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const showModal = (text) => {
    if (open) return
    setMessage(text)
    setOpen(true)
  }

  useEffect(() => {
    const onContextMenu = (e) => {
      e.preventDefault()
      showModal('Right Click is Disabled')
    }

    const onKeyDown = (e) => {
      const key = e.key

      const blocked =
        key === 'F12' ||
        (e.ctrlKey &&
          e.shiftKey &&
          ['I', 'i', 'J', 'j', 'C', 'c'].includes(key)) ||
        (e.ctrlKey && ['U', 'u', 'S', 's'].includes(key))

      if (blocked) {
        e.preventDefault()
        showModal('Developer Tools Detected')
      }
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute h-[700px] w-[700px] rounded-full bg-green-500 blur-[180px]"
          />

          {/* Modal */}
          <motion.div
            initial={{
              scale: 0.6,
              opacity: 0,
              rotateX: -20,
              y: 80,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
            }}
            className="relative mx-5 w-full max-w-xl overflow-hidden rounded-3xl border border-green-500/60 bg-[#050505] p-10 shadow-[0_0_70px_rgba(0,255,120,.35)]"
          >
            {/* Animated Border */}
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-3xl border-2 border-green-500"
            />

            {/* Icon */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="mb-6 text-center text-7xl"
            >
              ⚠
            </motion.div>

            {/* Title */}
            <motion.h1
              animate={{
                textShadow: [
                  '0 0 8px #00ff66',
                  '0 0 30px #00ff66',
                  '0 0 8px #00ff66',
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              className="text-center text-4xl font-black uppercase tracking-[5px] text-green-400"
            >
              ACCESS DENIED
            </motion.h1>

            {/* Divider */}
            <motion.div
              animate={{
                scaleX: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mx-auto mt-6 h-[2px] w-40 bg-green-500"
            />

            {/* Message */}
            <p className="mt-8 text-center text-lg leading-8 text-gray-300">
              {message}
            </p>

            <p className="mt-4 text-center text-green-500">
              Unauthorized inspection attempts have been blocked.
            </p>

            {/* Scan Line */}
            <motion.div
              animate={{
                y: [-120, 320],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="pointer-events-none absolute left-0 right-0 h-[3px] bg-green-400 opacity-70 blur-sm"
            />

            {/* Button */}
<motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: '0 0 25px #00ff66',
  }}
  whileTap={{
    scale: 0.95,
  }}
  onClick={() => setOpen(false)}
  className="relative z-10 mt-10 w-full rounded-xl border border-green-500 bg-green-500/10 py-4 text-lg font-bold uppercase tracking-widest text-green-400 transition-all"
>
  Continue Browsing
</motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}