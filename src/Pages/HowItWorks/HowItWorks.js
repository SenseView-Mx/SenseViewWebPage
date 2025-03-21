import React, { useState } from "react";
import Button from "../../components/Buttons/Button";
import { useLanguage } from "../../LanguageContext";

import "./HowItWorks.css";

const HowItWorks = () => {
  const { t } = useLanguage();

  const stepImages = [
      "/04-How_It_Works/Valoracion.jpg", // Imagen para el paso 1
      "/04-How_It_Works/Seleccion.jpg",  // Imagen para el paso 2
      "/04-How_It_Works/Proteo_Desarmador.jpg", // Imagen para el paso 3
      "/04-How_It_Works/Operador_Botellas.png",     // Imagen para el paso 4
      "/04-How_It_Works/Operador_Ope.png",   // Imagen para el paso 5
    ];

  const [hoveredStep, setHoveredStep] = useState(null);
  const [completedStep, setCompletedStep] = useState(0);

  const handleMouseEnter = (id) => {
    setHoveredStep(id);
    setCompletedStep(id); // Marca como completado hasta el paso actual
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
    setCompletedStep((prev) => (hoveredStep < prev ? hoveredStep : prev)); // Si retrocede, ajusta el progreso
  };

 
  return (
    <div className="hw-body">
      <div className="how-it-works-container">
        <div className="how-it-works-content">
          <p className="hw-section-label">{t("sectionLabelHW")}</p>
          <h1 className="how-it-works-title">{t("titleHW")}</h1>
          <p className="how-it-works-description">{t("descriptionHW")}</p>
          <Button to={"/contact"}>
            {t("scheduleDemoButton")}
            <img src="/00-Buttons_Dropdowns_Questions/event.svg" alt="Demo" />
          </Button>
        </div>
      </div>

      <div className="steps-container">
        <div className="timeline"></div>
        {t("steps").map((step, index) => (
          <div
            className="step-item"
            key={index}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`timeline-circle 
                ${hoveredStep === index + 1 ? "hovered" : ""}
                ${hoveredStep === index + 2 || completedStep >= index + 2 ? "connected" : ""}
                ${completedStep >= index + 1 ? "completed" : ""}`}
            >
              <span>{index + 1 < 10 ? `0${index + 1}.` : index + 1}</span>
            </div>
            <div className="step-content">
              <img src={stepImages[index]} alt={step.title} />
              <div className="step-content-text">
                <h2>{step.title}</h2>
                <h4>{step.subtitle}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hw-call-to-action">
        <div className="hw-cta-text">
          <h3>{t("ctaTitleHW")}</h3>
          <p>{t("ctaDescriptionHW")}</p>
          <Button to={"/contact"}>
            {t("ctaButton")}
            <img src="/00-Buttons_Dropdowns_Questions/contact_page.png" alt={t("ctaImageAlt")} />
          </Button>
        </div>
        <div className="hw-cta-image">
          <img src="/04-How_It_Works/Fabrica_Inteligente.png" alt={t("ctaImageAlt")} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;