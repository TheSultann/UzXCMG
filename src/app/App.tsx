import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from '../pages/AboutPage'
import { CertificatesPage } from '../pages/CertificatesPage'
import { ContactPage } from '../pages/ContactPage'
import { LeadershipDetailPage } from '../pages/LeadershipDetailPage'
import { LeadershipPage } from '../pages/LeadershipPage'
import { MediaPage } from '../pages/MediaPage'
import { NewsPage } from '../pages/NewsPage'
import { VideoPage } from '../pages/VideoPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/leadership" element={<LeadershipPage />} />
      <Route path="/leadership/:id" element={<LeadershipDetailPage />} />
    </Routes>
  )
}

export default App
