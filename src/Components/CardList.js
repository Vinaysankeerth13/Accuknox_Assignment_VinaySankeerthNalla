import React, { useRef, useState, useEffect } from 'react';
import RetreatCard from './RetreatCard';
import { data } from '../utils/data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardList = () => {
  const[filteredData, setFilteredData] = useState(data);
  const[yearFilter, setYearFilter] = useState('');
  const[typeFilter, setTypeFilter] = useState('');
  
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

  useEffect(() => {
    let filtered = data;
    if(yearFilter) {
      const filteredData = data.filter(item => {
        const itemYear = new Date(item.date*1000).getFullYear();
        return itemYear.toString() === yearFilter;
      });
      setFilteredData(filteredData);
    }
    else 
    {
      setFilteredData(data);
    }

    if(typeFilter > 0) {
      filtered = filtered.filter(item => {
        typeFilter.every(tag => item.tag.includes(tag))
      })
    }
  }, [yearFilter, typeFilter]);

  const handleYearChange = (e) => {
    setYearFilter(e.target.value);
  }

  const handleTypeChange = (tag) => {
    setTypeFilter(prev => {
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev,tag]
    })
  }

  const uniqueYears = [...new Set(data.map(item => 
    new Date(item.date * 1000).getFullYear()))].sort((a,b) => b-a);

  const allTypes = [...new Set(data.flatMap(item => item.tag))];

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
    <div className=''>
      <div>
      <select 
          value={yearFilter} 
          onChange={handleYearChange}
          className="m-2 p-2 border rounded bg-headerbg"
        >
          <option value="">All Dates</option>
          {uniqueYears.map(date => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>
        <select 
          value={typeFilter} 
          onChange={handleTypeChange}
          className="m-2 p-2 border rounded bg-headerbg"
        >
          <option value="">All Types</option>
          {allTypes.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {filteredData.map((item) => (
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