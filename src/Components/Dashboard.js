import React, { useState } from "react";

const Dashboard = ({ categories, onClose, onApplyChanges }) => {
  
  const [selectedWidgets, setSelectedWidgets] = useState(() => {
    const initialSelections = {};
    categories.forEach((category) => {
      category.widgets.forEach((widget) => {
        initialSelections[widget.id] = true; 
      });
    });
    return initialSelections;
  });

  
  const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id);

  
  const handleCategoryChange = (event) => {
    setSelectedCategoryId(parseInt(event.target.value, 10));
  };

  const handleCheckboxChange = (widgetId) => {
    setSelectedWidgets((prevSelected) => ({
      ...prevSelected,
      [widgetId]: !prevSelected[widgetId], 
    }));
  };

  
  const handleApplyChanges = () => {
    onApplyChanges(selectedWidgets); 
    onClose(); 
  };

  
  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryId
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-3/4 max-h-full overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-500">Personalize Dashboard</h2>
          <button onClick={onClose} className="text-blue-500 font-bold text-xl">
            ×
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="category-select" className="block font-bold mb-2">
            Select Category:
          </label>
          <select
            id="category-select"
            value={selectedCategoryId}
            onChange={handleCategoryChange}
            className="p-2 border border-blue-300 rounded"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div>
            <h3 className="font-bold text-lg mb-2">{selectedCategory.name}</h3>
            <ul className="list-none">
              {selectedCategory.widgets.map((widget) => (
                <li key={widget.id} className="mt-2 flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedWidgets[widget.id] || false}
                    onChange={() => handleCheckboxChange(widget.id)}
                    className="mr-2"
                  />
                  {widget.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-end mt-4">
          <button
            onClick={handleApplyChanges}
            className="bg-white text-blue-500 px-4 py-2 rounded"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
