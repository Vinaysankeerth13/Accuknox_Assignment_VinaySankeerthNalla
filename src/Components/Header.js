import React from "react";

const Header = ({ searchTerm, onSearchChange, onPersonalizeClick }) => {
  return (
    <header className="flex bg-white p-1.5 drop-shadow-lg justify-between">
        <h3 className="m-1 p-1 text-blue-500">Home</h3>
        <input
          type="text"
          placeholder="Search anything"
          value={searchTerm}
          onChange={onSearchChange}
          className="p-1 m-1 outline-black-100 font-light bg-gray-100 rounded-md w-72"
        />
        <button
    className="bg-white text-blue-500 px-4 py-2 rounded"
    onClick={onPersonalizeClick}
  >
    Personalize Dashboard
  </button>
      
  </header>
  );
};

export default Header;
