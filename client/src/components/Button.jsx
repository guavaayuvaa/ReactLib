export default function Button({ label, onClick }) {
    return <button onClick={onClick} className="p-2 bg-blue-500 text-white rounded">{label}</button>;
  }
  