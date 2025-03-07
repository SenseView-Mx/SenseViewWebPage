import React, { useState, useEffect } from "react";
import "./TransformationMercurio.css";
import { useLanguage } from "../../LanguageContext";

const TransformationMercurio = () => {
  const { t } = useLanguage();
  const [hoverState, setHoverState] = useState(0);

  // Lista de imágenes a precargar
  const imagePaths = [
    "/08-Devices/Mercurio/Diagrama_Mercurio_01.png",
    "/08-Devices/Mercurio/Diagrama_Mercurio_02.png",
    "/08-Devices/Mercurio/Diagrama_Mercurio_03.png",
    "/08-Devices/Mercurio/Diagrama_Mercurio_04.png",
  ];

  // Precargar imágenes cuando el componente se monta
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
    <div className="transformation-container-mercurio">
      <h2>{t('transformTitle')}</h2>
      <p>{t('transformSubtitle')}</p>

      <div className="image-area-mercurio" onMouseLeave={handleMouseLeave}>
        <div
          className="image-overlay-mercurio left"
          onMouseEnter={() => handleMouseEnter(1)}
        ></div>
        <div
          className="image-overlay-mercurio center"
          onMouseEnter={() => handleMouseEnter(2)}
        ></div>
        <div
          className="image-overlay-mercurio right"
          onMouseEnter={() => handleMouseEnter(3)}
        ></div>

        <div className="image-display-mercurio">
          <img src={imagePaths[hoverState]} alt={t(`state-${hoverState}`)} />
        </div>
      </div>

      <div className="steps-container-transformation-mercurio">
        <div className="step-transformation-mercurio">
          <span className="step-number-transformation-mercurio">01.</span>
          <h3>{t('collectionTitle')}</h3>
          <p>{t("mercuryCollectionDescription")}</p>
        </div>
        <div className="step-transformation-mercurio">
          <span className="step-number-transformation-mercurio">02.</span>
          <h3>{t('processingTitle')}</h3>
          <p>{t("mercuryProcessingDescription")}</p>
        </div>
        <div className="step-transformation-mercurio">
          <span className="step-number-transformation-mercurio">03.</span>
          <h3>{t('storageAndViewingTitle')}</h3>
          <p>{t('storageAndViewingDescription')}</p>
        </div>
      </div>
    </div>
  );
};

export default TransformationMercurio;
