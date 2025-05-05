import React from 'react';
import Button from './Button';

export default function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div className="flex gap-2 items-center">
      <Button label="-" onClick={onDecrement} />
      <span>{count}</span>
      <Button label="+" onClick={onIncrement} />
    </div>
  );
}
