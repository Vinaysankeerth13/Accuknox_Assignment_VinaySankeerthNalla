import React from "react";
import MainBanner from "./MainBanner";
import CardList from "./CardList";

const Body = () => {
  return (
    <div className="mt-1 mb-2 m-5 p-5 drop-shadow-2xl file ">
      <MainBanner />
      <CardList />
    </div>
  );
};

export default Body;
