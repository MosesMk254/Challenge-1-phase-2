import React, { useState } from "react";
import "../App.css";

const SearchOption = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div>
      <input
        className="Search-input"
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchOption;
