import React from 'react';
import Mainbanner from '../utils/Mainbanner.jpg'

const MainBanner = () => {
  return (
    <div className=''>
      <div className="rounded-md p-5 border-2 border-emerald-500 drop-shadow-2xl">
        <img className='rounded-md mb-2 w-full h-80' src={Mainbanner}></img>
        <h1 className='font-semibold text-2xl mb-1'>Discover your inner peace</h1>
        <p>Join us for a series of wellness retreats designed to help you find tranquility and rejuvination</p>
      </div>
    </div>
  );
}

export default MainBanner;

