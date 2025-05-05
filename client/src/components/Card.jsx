export default function Card({ title, children }) {
    return (
      <div className="border p-4 rounded shadow">
        <h3 className="text-xl font-bold">{title}</h3>
        <div>{children}</div>
      </div>
    );
  }
  