import React, { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedTerm) {
      console.log('API call with:', debouncedTerm);
      // Replace with actual API call
    }
  }, [debouncedTerm]);

  return (
    <div>
      <input
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Debounced value: {debouncedTerm}</p>
    </div>
  );
}

export default SearchInput;
