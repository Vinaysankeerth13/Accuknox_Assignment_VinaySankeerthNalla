// import React from "react";
// import data from "../Utils/data";


// const Widget = ({widget}) => {
//     return (
//     <div className="bg-slate-200 shadow-lg rounded-lg m-1 w-widgetWidth h-72">
//            <h3>{widget.categories.id}</h3>
//     </div>
//     )
// }

// export default Widget;

import React from "react";

const Widget = ({ widget }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg m-1 p-3 w-widgetWidth h-72 gap-3">
      <h1 className="font-bold">{widget.name}</h1>
    </div>
  );
};

export default Widget;
