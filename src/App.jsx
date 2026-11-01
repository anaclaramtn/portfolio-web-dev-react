import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import Terminal from './components/Terminal.jsx'
import Home from './pages/Home.jsx'
import Readme from './pages/Readme.jsx'
import Projects from './pages/Projects.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Terminal />}>
            <Route index element={<Home />} />
            <Route path="readme" element={<Readme />} />
            <Route path="projects" element={<Projects />} />

            {/* old static html urls keep working */}
            <Route path="index.html" element={<Navigate to="/" replace />} />
            <Route path="readmeDetail.html" element={<Navigate to="/readme" replace />} />
            <Route path="projectsDetail.html" element={<Navigate to="/projects" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
