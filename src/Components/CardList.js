import React, { useRef } from 'react';
import RetreatCard from './RetreatCard';
import { data } from '../utils/data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardList = () => {
  
  const sliderRef = useRef(null);
  
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='gap-12'>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <RetreatCard
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            location={item.location}
            price={item.price}
            image={item.image}
          />
        ))}
      </Slider>
      <div style={{textAlign: "center"}}>
        <button className="button p-2 m-2 bg-headerbg rounded-md" onClick={previous}>
          Previous
        </button>
        <button className="button p-2 m-2 bg-headerbg rounded-md" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardList;