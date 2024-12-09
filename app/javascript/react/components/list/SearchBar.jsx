// src/components/SearchBar/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch, recipesCount }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }
    }

    return (
        <div className="flex flex-col justify-start items-center gap-4 my-5 sticky top-0 bg-white z-10 w-full h-28 min-h-fit">
            <div className="flex flex-wrap justify-center gap-2">
                <input
                    className="w-full sm:w-72 md:w-96 p-2 border-2 border-gray-300 text-gray-800 rounded-md text-base outline-none bg-white"
                    type="text"
                    placeholder="Search by ingredients... (e.g: chicken, rice)"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md text-base cursor-pointer transition-transform duration-300 hover:bg-blue-700"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <h1 className="text-2xl mb-2 text-gray-800">{recipesCount} recipes</h1>
        </div>
    );
};

export default SearchBar;
