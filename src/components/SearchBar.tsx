import React, { useState } from "react";
import "../css/SearchBar.css"; // Adjust the path as necessary

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="searchBarContainer">
      <input
        type="search"
        className="searchInput"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
