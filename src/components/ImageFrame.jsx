import { motion } from 'framer-motion'

/**
 * Renders `src` if provided. Otherwise renders a designed placeholder
 * (gradient + corner brackets + label) so layouts look intentional
 * before real photos/screenshots are dropped in.
 */
export default function ImageFrame({ src, alt = '', label = 'Image placeholder', className = '', ratio = 'aspect-[4/5]', tint = 'green' }) {
  const gradients = {
    green: 'linear-gradient(160deg, #0b0c0b 0%, #050505 45%, #12331f 100%)',
    red: 'linear-gradient(160deg, #0b0c0b 0%, #050505 45%, #2a1414 100%)',
    plain: 'linear-gradient(160deg, #0d0d0d 0%, #050505 100%)',
  }

  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center relative"
          style={{ background: gradients[tint] }}
        >
          <span className="text-softer text-[11px] tracking-[0.12em] uppercase">{label}</span>
          {/* corner brackets — signals "frame reserved for real content" */}
          <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-line" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-line" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-line" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-line" />
        </div>
      )}
    </div>
  )
}
