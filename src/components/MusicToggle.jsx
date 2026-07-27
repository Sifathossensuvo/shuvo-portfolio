import { motion } from 'framer-motion'

export default function MusicToggle({ playing, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-6 right-6 z-[400] w-11 h-11 rounded-full border border-line bg-bg/80 backdrop-blur flex items-center justify-center hover:border-accent transition-colors"
      aria-label={playing ? 'Mute background music' : 'Play background music'}
      title={playing ? 'Mute music' : 'Play music'}
    >
      <div className="flex items-end gap-[3px] h-3.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full"
            style={{ background: playing ? '#5cff8a' : '#666666' }}
            animate={
              playing
                ? { height: ['30%', '100%', '50%', '90%', '30%'] }
                : { height: '30%' }
            }
            transition={
              playing
                ? { duration: 1 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.3 }
            }
          />
        ))}
      </div>
    </motion.button>
  )
}
