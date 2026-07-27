import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import ProtectionGuard from './components/ProtectionGuard'

export default function App() {
  return (
    <>
      <ProtectionGuard />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Not linked from any nav — reachable only via the button on the Projects section */}
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </>
  )
}
