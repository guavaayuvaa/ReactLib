import { useStore } from '../store/store';

const AddItem = () => {
  const addToCart = useStore((state) => state.addToCart);
  return (
    <button
      className="px-4 py-2 bg-green-600 text-white rounded"
      onClick={() => addToCart({ id: Date.now(), name: "Apple" })}
    >
      Add to Cart
    </button>
  );
};

export default AddItem;
