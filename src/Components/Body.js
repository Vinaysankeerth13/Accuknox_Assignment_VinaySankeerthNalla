import React, { useState } from 'react';
import data from "../Utils/data";
import Widget from './Widget';
import Header from './Header';
import AddWidgetButton from './AddWidgetComponent';
import PopupForm from './PopUpForm';
import PersonalizeModal from './Dashboard';

const Body = () => {
  const [categories, setCategories] = useState(data.categories); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [showPopup, setShowPopup] = useState(false); 
  const [showPersonalizeModal, setShowPersonalizeModal] = useState(false); 
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddWidgetClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setShowPopup(true);
  };

  const addWidgetToCategory = (widgetName, widgetText) => {
    const newWidget = {
      id: new Date().getTime(),
      name: widgetName,
      type: "progress",
      data: {
        text: widgetText,
        progress: Math.floor(Math.random() * 100)
      }
    };

    const updatedCategories = categories.map(category => {
      if (category.id === selectedCategoryId) {
        return {
          ...category,
          widgets: [...category.widgets, newWidget]
        };
      }
      return category;
    });
    setCategories(updatedCategories);
    setShowPopup(false);
  };

  const removeWidgetFromCategory = (categoryId, widgetId) => {
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter(widget => widget.id !== widgetId)
        };
      }
      return category;
    });

    setCategories(updatedCategories);
  };

  const handlePersonalizeClick = () => {
    setShowPersonalizeModal(true);
  };

  const handleApplyChanges = (selectedWidgets) => {
    const updatedCategories = categories.map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) => selectedWidgets[widget.id]),
    }));
    setCategories(updatedCategories);
  };

  const filteredCategories = categories
    .map(category => {
      const filteredWidgets = category.widgets.filter(widget =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filteredWidgets.length > 0) {
        return {
          ...category,
          widgets: filteredWidgets
        };
      }
      return null;
    })
    .filter(category => category !== null);

  return (
    <div className="bg-white">
      <Header
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onPersonalizeClick={handlePersonalizeClick}
      />
      {filteredCategories.map((category) => (
        <div key={category.id} className="category p-2">
          <div className='flex justify-between'>
            <h2 className="font-bold text-xl mb-4">{category.name}</h2>
            <button 
              className="text-blue-500 px-2 py-1 rounded mb-2"
              onClick={() => handleAddWidgetClick(category.id)}
            >
              + Add Widget
            </button>
          </div>
          <div className="widgets flex flex-wrap">
            {category.widgets.map((widget) => (
              <div key={widget.id} className="widget w-1/3">
                <Widget
                  widget={widget}
                  onDelete={(widgetId) => removeWidgetFromCategory(category.id, widgetId)}
                />
              </div>
            ))}
            <div className="widget w-1/3">
              <AddWidgetButton onAddWidget={() => handleAddWidgetClick(category.id)} />
            </div>
          </div>
        </div>
      ))}

      {showPopup && (
        <PopupForm
          onClose={() => setShowPopup(false)}
          onSubmit={addWidgetToCategory}
        />
      )}

      {showPersonalizeModal && (
        <PersonalizeModal
          categories={categories}
          onClose={() => setShowPersonalizeModal(false)}
          onApplyChanges={handleApplyChanges}
        />
      )}
    </div>
  );
};

export default Body;

