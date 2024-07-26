import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
