import React from 'react';
import { useStore, shallow } from '../store/store';

const PerformanceTest = React.memo(() => {
  const cartLength = useStore((state) => state.cart.length, shallow);

  console.log("🟡 PerformanceTest rendered");

  return (
    <div className="p-4 bg-yellow-100 rounded">
      <p>🛒 Cart items: {cartLength}</p>
    </div>
  );
});

export default PerformanceTest;
