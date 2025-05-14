import { useState } from 'react';
import MultiStepForm from './components/MultiStepForm';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold">Multi Step Form</h1>
      <MultiStepForm />

      <h1 className="text-2xl font-bold mt-10">Lifted State Counters</h1>
      <div className="flex space-x-4">
        <Counter label="Counter A" count={count} setCount={setCount} />
        <Counter label="Counter B" count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;
