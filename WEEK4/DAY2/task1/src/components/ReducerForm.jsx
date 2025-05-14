import { useReducer } from 'react'

const initialState = {
  name: '',
  email: '',
  password: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, [action.field]: action.value }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default function ReducerForm() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(state, null, 2))
    dispatch({ type: 'RESET' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {['name', 'email', 'password'].map((field) => (
        <div key={field}>
          <label className="block capitalize mb-1">{field}</label>
          <input
            type={field === 'password' ? 'password' : 'text'}
            value={state[field]}
            onChange={(e) =>
              dispatch({ type: 'CHANGE', field, value: e.target.value })
            }
            className="w-full border rounded px-3 py-2"
          />
        </div>
      ))}
      <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Submit</button>
    </form>
  )
}
