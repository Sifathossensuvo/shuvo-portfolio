import { useRef, useState, useCallback } from 'react'
import EntryGate from '../components/EntryGate'
import Loader from '../components/Loader'
import ProgressBar from '../components/ProgressBar'
import CustomCursor from '../components/CustomCursor'
import MusicToggle from '../components/MusicToggle'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import OpenSource from '../components/OpenSource'
import Story from '../components/Story'
import Timeline from '../components/Timeline'
import DailyJourney from '../components/DailyJourney'
import Dreams from '../components/Dreams'
import FutureGoals from '../components/FutureGoals'
import BucketList from '../components/BucketList'
import Achievements from '../components/Achievements'
import Gallery from '../components/Gallery'
import Books from '../components/Books'
import Music from '../components/Music'
import Workspace from '../components/Workspace'
import Quotes from '../components/Quotes'
import Letter from '../components/Letter'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import { Final, Footer } from '../components/Final'

export default function Home() {
  // phase: 'gate' -> 'loading' -> 'site'
  const [phase, setPhase] = useState('gate')
  const [musicPlaying, setMusicPlaying] = useState(false)
  const audioRef = useRef(null)

  const getAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/theme.mp3')
      audioRef.current.loop = true
      audioRef.current.volume = 0.4
    }
    return audioRef.current
  }

  const handleFirstClick = useCallback(() => {
    const audio = getAudio()
    audio
      .play()
      .then(() => setMusicPlaying(true))
      .catch(() => {
        // Autoplay blocked, or /public/audio/theme.mp3 hasn't been added yet.
        // The music toggle button lets the visitor try again manually.
        setMusicPlaying(false)
      })
  }, [])

  const handleGateComplete = useCallback(() => {
    setPhase('loading')
  }, [])

  const handleLoaderDone = useCallback(() => {
    setPhase('site')
  }, [])

  const toggleMusic = () => {
    const audio = getAudio()
    if (musicPlaying) {
      audio.pause()
      setMusicPlaying(false)
    } else {
      audio.play().then(() => setMusicPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      {phase === 'gate' && (
        <EntryGate onFirstClick={handleFirstClick} onComplete={handleGateComplete} />
      )}

      {phase !== 'gate' && (
        <>
          {phase === 'loading' && <Loader onDone={handleLoaderDone} />}

          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <ProgressBar />
          <CustomCursor />
          <MusicToggle playing={musicPlaying} onToggle={toggleMusic} />
          <main id="main">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <OpenSource />
            <Story />
            <Timeline />
            <DailyJourney />
            <Dreams />
            <FutureGoals />
            <BucketList />
            <Achievements />
            <Gallery />
            <Books />
            <Music />
            <Workspace />
            <Quotes />
            <Letter />
            <Testimonials />
            <Contact />
            <Final />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
