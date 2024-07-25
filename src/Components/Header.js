import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center bg-headerbg text-headertext p-3 drop-shadow-lg">
         <h1 className="text-4xl text-center drop-shadow-2xl green-shadow font-myFont">Wellness Retreat</h1>
      </div>
    </header>
  );
};

export default Header;
