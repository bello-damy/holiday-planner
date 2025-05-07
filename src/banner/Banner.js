import React from 'react';
import "./Banner.css"
import holidayBanner from "./holidayBanner.jpg"

//website banner component
const Banner = () => {
  return (
    <div className='banner-container'>
      <img src={holidayBanner} alt="" className="banner-img"></img>
    </div>
  );
}

export default Banner;