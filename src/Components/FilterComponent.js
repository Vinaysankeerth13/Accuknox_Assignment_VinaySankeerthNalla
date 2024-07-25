import React from 'react';

const FilterComponent = ({ yearFilter, typeFilter, currency, searchTerm, handleYearChange, handleTypeChange, handleCurrencyChange, handleSearchChange, uniqueYears, allTypes }) => {
  return (
    <div className="flex flex-wrap justify-between">
      <div>
    {/* Year Filter */}
       <select value={yearFilter} onChange={handleYearChange} className="mt-2 mr-2 p-2 border rounded bg-headerbg">
          <option value="">All Dates</option>
          {uniqueYears.map((date) => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>

    {/* Type Filter  */}
        <select value={typeFilter} onChange={handleTypeChange} className="mt-2 mr-2 p-2 border rounded bg-headerbg">
          <option value="">All Types</option>
          {allTypes.map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
    {/* Currency Filter - Additional Feature */}
        <select value={currency} onChange={handleCurrencyChange} className="mt-2 mr-2 p-2 border rounded bg-headerbg">
          <option value="USD" className="text-black">USD</option>
          <option value="INR" className="text-black">INR</option>
          <option value="EUR" className="text-black">EUR</option>
          <option value="GBP" className="text-black">GBP</option>
        </select>
      </div>
      <div>
    {/* Search */}
        <input
          type="text"
          placeholder="Search retreats by title"
          value={searchTerm}
          onChange={handleSearchChange}
          className="mt-2 p-2 border rounded bg-headerbg"
        />
      </div>
    </div>
  );
};

export default FilterComponent;