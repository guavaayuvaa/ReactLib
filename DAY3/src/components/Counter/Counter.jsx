import React, { useState } from 'react';
import usePrevious from '../../hooks/usePrevious';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Previous Count: {prevCount !== undefined ? prevCount : 'N/A'}</p>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
