function Counter({ label, count, setCount }) {
  return (
    <div className="m-4 p-4 border rounded shadow w-64">
      <h3 className="text-lg font-medium mb-2">{label}: {count}</h3>
      <div className="space-x-2">
        <button className="bg-purple-500 text-white px-4 py-1 rounded" onClick={() => setCount(count + 1)}>+</button>
        <button className="bg-teal-500 text-white px-4 py-1 rounded" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default Counter;
