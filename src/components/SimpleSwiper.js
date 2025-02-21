import React, { useState } from 'react';

// TESTING
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
    <div
      style={{
        width: 'fit-content',  // Aumentamos el ancho del contenedor
        height: '500px', // Aumentamos la altura del contenedor
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0', // Fondo en caso de que la imagen no ocupe todo
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Hace que la imagen ocupe todo sin distorsionarse
          objectPosition: 'center',
          transition: 'opacity 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default SimpleSwiper;
