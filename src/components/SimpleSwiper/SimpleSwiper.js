import React, { useState } from 'react';
import './SimpleSwiper.css';  // Importamos el archivo CSS

const carrusel1 = "/03-Home/Automatice_Laptop.png";
const carrusel2 = "/03-Home/Automatice_Tablet.png";
const carrusel3 = "/03-Home/Automatice_Celular.png";

const SimpleSwiper = () => {
  const images = [carrusel1, carrusel2, carrusel3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverTimer, setHoverTimer] = useState(null);

  const handleMouseEnter = () => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    clearInterval(hoverTimer);
    setHoverTimer(null);
  };

  return (
    <div className="swiper-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className="swiper-image"/>
    </div>
  );
};

export default SimpleSwiper;
