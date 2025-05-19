import React, { useState } from 'react';
import usePrevious from '../../hooks/usePrevious';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-4">
      <Card className="w-full max-w-sm backdrop-blur-lg bg-white/70 border border-purple-300 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-purple-700">
            ✨ Counter ✨
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-gray-500">Previous Count:</p>
          <p className="text-xl font-medium text-purple-500">
            {prevCount !== undefined ? prevCount : 'N/A'}
          </p>
          <p className="text-gray-600">Current Count:</p>
          <p className="text-4xl font-bold text-purple-700 transition-transform duration-300 animate-pulse">
            {count}
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="mt-6 px-6 py-2 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-colors duration-300"
          >
            Increment 🚀
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Counter;
