import React from 'react'
import ControlledForm from './components/ControlledForm'
import TodoList from './components/TodoList'
import ReducerForm from './components/ReducerForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-sm mb-2">
            React Form 
          </h1>
        </header>

        {/* Controlled Form Section */}
        <section className="bg-white p-6 rounded-2xl shadow-xl transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            🔒 Controlled Form with Validation
          </h2>
          <ControlledForm />
        </section>

        {/* Todo List Section */}
        <section className="bg-white p-6 rounded-2xl shadow-xl transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            📝 Dynamic Todo List
          </h2>
          <TodoList />
        </section>

        {/* useReducer Form Section */}
        <section className="bg-white p-6 rounded-2xl shadow-xl transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            ⚙️ Form using useReducer
          </h2>
          <ReducerForm />
        </section>
      </div>
    </div>
  )
}

export default App
