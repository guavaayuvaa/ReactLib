export default function DynamicList({ items, useBadKeys = false }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={useBadKeys ? index : item.id} className="border p-2">
            {item.value}
          </li>
        ))}
      </ul>
    );
  }
  