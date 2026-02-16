import React, { useRef, useEffect } from "react";

function SearchBar({ searchTerm, setSearchTerm, category, setCategory }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Accessories">Accessories</option>
        <option value="Tablet">Tablet</option>
      </select>
    </div>
  );
}

export default SearchBar;
