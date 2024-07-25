import React from 'react';

const RetreatCard = ({ title, description, date, currency, location, price, image }) => {

  // Change of Currency Symbols
  const readableDate = new Date(date * 1000).toLocaleDateString();
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    INR: '₹',
  };

  return (
    <div className="h-[400px] w-auto rounded overflow-hidden shadow-lg mt-4 border-2 border-emerald-500 p-2 drop-shadow-xl">
      <img className="w-full h-48 object-cover rounded-sm" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="text-gray-600 text-sm">Date: {readableDate}</p>
        <p className="text-gray-600 text-sm">Location: {location}</p>
        <p className="text-gray-600 text-sm">Price: {currencySymbols[currency]} {price}</p>
      </div>
    </div>
  );
};

export default RetreatCard;