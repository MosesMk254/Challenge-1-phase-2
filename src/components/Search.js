import React, { useState } from "react";

const SearchOption = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchOption;
