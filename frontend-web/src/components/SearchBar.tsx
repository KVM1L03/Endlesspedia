import React, { useState } from 'react';
import { searchDefinitions } from '../api/definitionsAPI.ts';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
    placeholder?: string;
    inputClassName?: string;
    resultClassName?: string;
    resultItemClassName?: string;
    onResultClick?: (result: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search...',
    inputClassName = '',
    resultClassName = '',
    resultItemClassName = '',
    onResultClick,
}) => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<string[]>([]);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchResults = async () => {
        if (!query.trim()) {
            setError("It can't be empty!");
            setResults([]);
            setShowResults(false);
            return;
        }
        try {
            const searchResults = await searchDefinitions(query);
            setResults(searchResults);
            setShowResults(true);
            setError(null);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setResults([]);
            setShowResults(false);
            setError('Error fetching search results');
        }
    };

    const handleResultClick = (result: string) => {
        setQuery(result);
        setShowResults(false);
        setError(null);
        if (onResultClick) {
            onResultClick(result);
        }
    };

    const handleSearchClick = () => {
        fetchResults();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            fetchResults();
        }
    };

    return (
        <div className="relative w-full max-w-md mx-auto font-robotoMono">
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setError(null);
                    }}
                    onKeyDown={handleKeyDown}
                    className={`w-full p-2 focus:outline-none focus:ring-black focus:border-black ${inputClassName}`}
                    placeholder={placeholder}
                />
                <button
                    onClick={handleSearchClick}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md mx-1 focus:outline-none"
                >
                    <FaSearch />
                </button>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            {showResults && results.length > 0 && (
                <ul className={`absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 ${resultClassName}`}>
                    {results.map((result, index) => (
                        <li
                            key={index}
                            className={`p-2 cursor-pointer hover:bg-gray-200 ${resultItemClassName}`}
                            onClick={() => handleResultClick(result)}
                        >
                            {result}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;