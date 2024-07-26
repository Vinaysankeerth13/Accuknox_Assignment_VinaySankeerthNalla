import React from "react";

const SliderControls = ({ previous, next }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <button
        className="button p-2 m-2 bg-headerbg rounded-md"
        onClick={previous}
      >
        Previous
      </button>
      <button className="button p-2 m-2 bg-headerbg rounded-md" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default SliderControls;
