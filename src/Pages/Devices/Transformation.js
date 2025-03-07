import React, { useState, useEffect } from "react";
import "./Transformation.css";
import { useLanguage } from "../../LanguageContext";

const Transformation = () => {
  const { t } = useLanguage();
  const [hoverState, setHoverState] = useState(0);
  const imagePaths = [
    "/08-Devices/Diagram/Diagram-Proteo01.png",
    "/08-Devices/Diagram/Diagram-Proteo02.png",
    "/08-Devices/Diagram/Diagram-Proteo03.png",
    "/08-Devices/Diagram/Diagram-Proteo04.png",
  ];

  useEffect(() => {
    imagePaths.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleMouseEnter = (state) => {
    setHoverState(state);
  };

  const handleMouseLeave = () => {
    setHoverState(0);
  };

  return (
    <div className="transformation-container">
      <h2>{t('transformTitle')}</h2>
      <p>{t('transformSubtitle')}</p>

      <div className="image-area" onMouseLeave={handleMouseLeave}>
        <div
          className="image-overlay left"
          onMouseEnter={() => handleMouseEnter(1)}
        ></div>
        <div
          className="image-overlay center"
          onMouseEnter={() => handleMouseEnter(2)}
        ></div>
        <div
          className="image-overlay right"
          onMouseEnter={() => handleMouseEnter(3)}
        ></div>

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
