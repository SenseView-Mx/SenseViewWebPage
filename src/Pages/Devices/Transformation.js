import React, { useState, useEffect } from "react";
import "./Transformation.css";
import { useLanguage } from "../../LanguageContext";

const Transformation = () => {
  const { t } = useLanguage();
  const [hoverState, setHoverState] = useState(0);
  const imagePaths = [
    "/08-Devices/Diagram/Diagram_Proteo01.png",
    "/08-Devices/Diagram/Diagram_Proteo02.png",
    "/08-Devices/Diagram/Diagram_Proteo03.png",
    "/08-Devices/Diagram/Diagram_Proteo04.png",
  ];

  useEffect(() => {
    imagePaths.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 500) { // Solo en móviles
        const diagram = document.querySelector(".image-display");
        if (!diagram) return;

        const rect = diagram.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        const quarter = screenHeight / 4;

        // Determinar en qué parte de la pantalla está el diagrama
        if (rect.top > 3 * quarter) {
          setHoverState(0); // Primera imagen
        } else if (rect.top > 2 * quarter) {
          setHoverState(1); // Segunda imagen
        } else if (rect.top > quarter) {
          setHoverState(2); // Tercera imagen
        } else {
          setHoverState(3); // Cuarta imagen
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = window.innerWidth <= 500;

  return (
    <div className="transformation-container">
      <h2>{t('transformTitle')}</h2>
      <p>{t('transformSubtitle')}</p>

      <div 
        className="image-area"
        {...(!isMobile && {
          onMouseLeave: () => setHoverState(0),
        })}
      >
        {!isMobile && (
          <>
            <div className="image-overlay left" onMouseEnter={() => setHoverState(1)}></div>
            <div className="image-overlay center" onMouseEnter={() => setHoverState(2)}></div>
            <div className="image-overlay right" onMouseEnter={() => setHoverState(3)}></div>
          </>
        )}

        <div className="image-display">
          <img src={imagePaths[hoverState]} alt={t(`state-${hoverState}`)} />
        </div>
      </div>

      <div className="steps-container-transformation">
        <div className="step-transformation">
          <span className="step-number-transformation">01.</span>
          <h3>{t('collectionTitle')}</h3>
          <p>{t('collectionDescription')}</p>
        </div>
        <div className="step-transformation">
          <span className="step-number-transformation">02.</span>
          <h3>{t('processingTitle')}</h3>
          <p>{t('processingDescription')}</p>
        </div>
        <div className="step-transformation">
          <span className="step-number-transformation">03.</span>
          <h3>{t('storageAndViewingTitle')}</h3>
          <p>{t('storageAndViewingDescription')}</p>
        </div>
      </div>
    </div>
  );
};

export default Transformation;
