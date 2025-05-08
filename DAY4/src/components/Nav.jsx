import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded transition ${
      isActive ? 'bg-yellow-600 text-white' : 'text-gray-700 hover:bg-gray-100'
    }`

  return (
    <nav className="bg-white border-b shadow-sm mb-4">
      <div className="flex items-center justify-between px-4 py-3 max-w-5xl mx-auto">
        <h1 className="text-xl font-bold text-teal-700">Welcome</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/users/123" className={linkClasses}>User Profile</NavLink>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/users/123" className={linkClasses}>User Profile</NavLink>
        </div>
      )}
    </nav>
  )
}
