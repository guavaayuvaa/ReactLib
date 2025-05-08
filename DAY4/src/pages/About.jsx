import Nav from '../components/Nav'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto">
      <Nav />
      <div className="bg-white shadow p-6 rounded">
        <h1 className="text-2xl font-semibold text-gray-700">About Page</h1>
        <p className="mt-2 text-gray-600">This is about us.THis page simply works react routing and events</p>
      </div>
    </div>
  )
}
