// CardList.js
import React, { useRef, useState, useEffect } from "react";
import RetreatCard from "./RetreatCard";
import FilterComponent from "./FilterComponent";
import SliderControls from "../Utils/sliderControl";
import { data } from "../utils/data";
import { convertCurrency } from "../Utils/convertCurrency";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardList = () => {
  
  const [filteredData, setFilteredData] = useState(data);
  const [yearFilter, setYearFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [searchTerm, setSearchTerm] = useState("");

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
    if (yearFilter) {
      filtered = filtered.filter((item) => {
        const itemYear = new Date(item.date * 1000).getFullYear();
        return itemYear.toString() === yearFilter;
      });
    }

    if (typeFilter && typeFilter !== "") {
      filtered = filtered.filter((item) => item.tag.includes(typeFilter));
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [yearFilter, typeFilter, searchTerm]);

  const handleYearChange = (e) => setYearFilter(e.target.value);
  const handleTypeChange = (e) => setTypeFilter(e.target.value);
  const handleCurrencyChange = (e) => setCurrency(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const uniqueYears = [...new Set(data.map((item) => new Date(item.date * 1000).getFullYear()))].sort((a, b) => b - a);
  const allTypes = [...new Set(data.flatMap((item) => item.tag))];

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <FilterComponent
        yearFilter={yearFilter}
        typeFilter={typeFilter}
        currency={currency}
        searchTerm={searchTerm}
        handleYearChange={handleYearChange}
        handleTypeChange={handleTypeChange}
        handleCurrencyChange={handleCurrencyChange}
        handleSearchChange={handleSearchChange}
        uniqueYears={uniqueYears}
        allTypes={allTypes}
      />
      <Slider ref={sliderRef} {...settings}>
        {filteredData.map((item) => (
          <RetreatCard
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            location={item.location}
            price={convertCurrency(item.price, "USD", currency)}
            currency={currency}
            image={item.image}
          />
        ))}
      </Slider>
      <SliderControls previous={previous} next={next} />
    </div>
  );
};

export default CardList;