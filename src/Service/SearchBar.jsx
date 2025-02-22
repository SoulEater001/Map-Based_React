import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className="flex items-center bg-white shadow-md rounded-2xl p-2 w-full max-w-md">
      <Search className="text-gray-400 ml-2" size={20} />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-grow outline-none px-3 text-gray-700"
      />
      {query && (
        <button
          onClick={handleClear}
          className="text-gray-400 hover:text-gray-600 px-2"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;