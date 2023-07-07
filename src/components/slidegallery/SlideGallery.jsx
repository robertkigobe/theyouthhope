import React from  'react';
import { useState } from 'react';
import './SlideGallery.css';
import {SlideData} from "./SlideData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const SlideGallery = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="main-carousel__body">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SlideData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (<img src={slide.image} alt="uccb" className="image" />)}
            
          </div>
        );
      })}
    </section>
  );
};

export default SlideGallery;

