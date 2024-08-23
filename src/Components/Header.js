import React from "react";

const Header = ({searchTerm, onSearchChange}) => {
  return (
    <header>
      <div className="flex items-center justify-center bg-white p-2 drop-shadow-lg">
      <input type="text" placeholder="Search anything" value={searchTerm} onChange={onSearchChange} className="p-1 m-1 outline-black-100 font-light"/>
      </div>
    </header>
  );
};

export default Header;
