import React, { useState } from "react";

const PopupForm = ({ onClose, onSubmit }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(widgetName, widgetText);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="font-bold text-lg mb-4">Add New Widget</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Widget Name</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Widget Text</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-300 text-black px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Widget
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
