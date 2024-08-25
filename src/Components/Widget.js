import React from "react";

const Widget = ({ widget, onDelete }) => {
  return (
    <div className="bg-gray-200 shadow-lg rounded-lg m-1 p-3 w-widgetWidth h-72 relative">
      <button
        className="absolute top-2 right-2 text-blue-500 font-bold"
        onClick={() => onDelete(widget.id)}
      >
        X
      </button>
      <h1 className="font-bold p-1">{widget.name}</h1>
      <p className="font-light p-1">{widget.data.text}</p>
    </div>
  );
};

export default Widget;

