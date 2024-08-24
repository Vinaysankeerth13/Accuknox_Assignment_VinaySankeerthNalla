import React, { useState } from 'react';
import data from "../Utils/data";
import Widget from './Widget';
import Header from './Header'; 

const Dashboard = () => {
  const [categories, setCategories] = useState(data.categories);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addWidgetToCategory = (categoryId) => {
    const newWidget = {
      id: new Date().getTime(), 
      name: `New Widget ${categoryId}`, 
      type: "progress", 
      data: {
        text: `New Widget Text ${categoryId}`, 
        progress: Math.floor(Math.random() * 100) 
      }
    };

    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [...category.widgets, newWidget]
        };
      }
      return category;
    });

    setCategories(updatedCategories);
  };

  return (
    <div className="bg-slate-200">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} /> 
      {categories.map((category) => (
        <div key={category.id} className="category p-2">
          <div className='flex justify-between'>
          <h2 className="font-bold text-xl mb-4">{category.name}</h2>
          <button 
            className="bg-blue-500 text-white px-2 py-1 rounded mb-2"
            onClick={() => addWidgetToCategory(category.id)}
          >
            + Add Widget
          </button>
          </div>
          <div className="widgets flex flex-wrap">
            {category.widgets
              .filter((widget) =>
                widget.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((widget) => (
                <div key={widget.id} className="widget w-1/3">
                  <Widget widget={widget} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
