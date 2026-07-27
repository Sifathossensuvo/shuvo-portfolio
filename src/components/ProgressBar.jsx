import { motion, useScroll } from 'framer-motion'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] bg-accent z-[500] origin-left"
      style={{ scaleX: scrollYProgress, width: '100%' }}
    />
  )
}
