import React from "react";
import Trail from "../utils/Trail.jpg";

const MainBanner = () => {
  return (
    <div className="hidden md:block">
      <div className="rounded-md p-5 border-2 border-emerald-500 drop-shadow-2xl">
        <img className="rounded-md mb-2 w-full h-80" src={Trail} alt="Trail" />
        <h1 className="font-semibold text-2xl mb-1">
          Discover your inner peace
        </h1>
        <p>
          Join us for a series of wellness retreats designed to help you find
          tranquility and rejuvenation
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
