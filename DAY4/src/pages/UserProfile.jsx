import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'

export default function UserProfile() {
  const { id } = useParams()

  return (
    <div className="max-w-5xl mx-auto">
      <Nav />
      <div className="bg-white shadow p-6 rounded">
        <h1 className="text-2xl font-semibold text-gray-700">User Profile</h1>
        <p className="mt-2 text-gray-600">User ID: <span className="font-mono text-blue-600">{id}</span></p>
      </div>
    </div>
  )
}
