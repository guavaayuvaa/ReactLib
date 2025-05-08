import { useLocation, Link } from 'react-router-dom'

export default function BreadCrumb() {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)

  return (
    <div className="text-sm text-gray-500 px-4 max-w-5xl mx-auto mb-4">
      <Link to="/" className="hover:underline text-blue-600">Home</Link>
      {segments.map((seg, idx) => {
        const path = '/' + segments.slice(0, idx + 1).join('/')
        return (
          <span key={idx}>
            {' / '}
            <Link to={path} className="hover:underline text-blue-600">{seg}</Link>
          </span>
        )
      })}
    </div>
  )
}

