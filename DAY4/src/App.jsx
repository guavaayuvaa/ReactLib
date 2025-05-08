import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import UserProfile from './pages/UserProfile'
import Breadcrumb from './components/BreadCrumb'

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </div>
  )
}
