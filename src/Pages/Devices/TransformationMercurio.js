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

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) { // Solo en móviles
        const diagram = document.querySelector(".image-display-mercurio");
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

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="transformation-container-mercurio">
      <h2>{t('transformTitle')}</h2>
      <p>{t('transformSubtitle')}</p>

      <div 
        className="image-area-mercurio"
        {...(!isMobile && {
          onMouseLeave: () => setHoverState(0),
        })}
      >
        {!isMobile && (
          <>
            <div className="image-overlay-mercurio left" onMouseEnter={() => setHoverState(1)}></div>
            <div className="image-overlay-mercurio center" onMouseEnter={() => setHoverState(2)}></div>
            <div className="image-overlay-mercurio right" onMouseEnter={() => setHoverState(3)}></div>
          </>
        )}

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
