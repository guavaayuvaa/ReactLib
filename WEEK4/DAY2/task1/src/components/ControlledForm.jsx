import { useState } from 'react'

export default function ControlledForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.name) newErrors.name = 'Name is required'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email required'
    if (!form.password || form.password.length < 6) newErrors.password = 'Min 6 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert('Form Submitted')
      setForm({ name: '', email: '', password: '' })
      setErrors({})
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {['name', 'email', 'password'].map((field) => (
        <div key={field}>
          <label className="block capitalize mb-1">{field}</label>
          <input
            type={field === 'password' ? 'password' : 'text'}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="w-full border rounded px-3 py-2"
          />
          {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
        </div>
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  )
}
