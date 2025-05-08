import { useState } from 'react'
import Nav from '../components/Nav'
import { setCookie, getCookie, setSession, getSession } from '../utils/storage'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
    setCookie('username', formData.name, 1)
    setSession('userEmail', formData.email)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Nav />
      <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">User Form</h2>
        <div>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Enter email"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Submit
        </button>

    
      </form>
    </div>
  )
}
