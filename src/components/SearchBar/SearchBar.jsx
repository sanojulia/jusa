import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Новое состояние

  const suggestionData = [
    'Nike shoes',
    'Adidas tracksuits',
    'Levi\'s jeans',
    'Puma sneakers',
    'Converse high tops',
    'Tommy Hilfiger jackets',
    'Calvin Klein underwear',
  ];

  const handleInputChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = suggestionData.filter((item) =>
        item.toLowerCase().includes(value)
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.searchBarContainer} ${isExpanded ? styles.expanded : ''}`}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for items..."
        className={styles.searchInput}
      />

      <button className={styles.searchButton} onClick={toggleExpand}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>

      {showSuggestions && suggestions.length > 0 && (
        <div className={styles.searchResults}>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={styles.searchResultItem}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;