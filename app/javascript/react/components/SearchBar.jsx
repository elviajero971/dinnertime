// src/components/SearchBar/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="flex justify-center items-center my-5 sticky top-0 bg-white z-10 w-full h-28">
            <input
                className="w-72 p-2 border-2 border-gray-300 text-gray-800 rounded-md text-base outline-none bg-white"
                type="text"
                placeholder="Search by ingredient..."
                value={query}
                onChange={handleInputChange}
            />
            <button
                className="ml-2 px-4 py-2 bg-black text-white rounded-md text-base cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>


    );
};

export default SearchBar;
