import { useState } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = { text: input, completed: false }
      setTodos([...todos, newTodo])
      setInput('')
    }
  }

  const toggleTodo = (index) => {
    const updatedTodos = [...todos]
    updatedTodos[index].completed = !updatedTodos[index].completed
    setTodos(updatedTodos)
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={addTodo}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
                className="accent-green-500 w-5 h-5"
              />
              <span
                className={`text-base ${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
