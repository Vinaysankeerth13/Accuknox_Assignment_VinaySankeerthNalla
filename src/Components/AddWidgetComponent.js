import React from "react";

const AddWidgetButton = ({ onAddWidget }) => {
  return (
    <div
      className="bg-gray-200 shadow-lg rounded-lg m-1 p-3 w-widgetWidth h-72 flex items-center justify-center cursor-pointer"
      onClick={onAddWidget}
    >
      <button className="text-gray-500 font-bold text-lg">+ Add Widget</button>
    </div>
  );
};

export default AddWidgetButton;
