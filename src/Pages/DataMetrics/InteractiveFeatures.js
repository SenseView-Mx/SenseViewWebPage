import React, { useState, useEffect } from "react";
import "./InteractiveFeatures.css";
import { useLanguage } from "../../LanguageContext";

const InteractiveFeatures = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState("feature1");
  const [imageSrc, setImageSrc] = useState("/14-Data_Metrics/Carrusel_1_Completa.png");
  const [fadeClass, setFadeClass] = useState("fade-in"); // Inicialmente visible

  const features = [
    { id: "feature1", title: t("feature1Title"), icon: "/09-Dashboard/Icons/dashboard_customize.svg", image: "/14-Data_Metrics/Carrusel_1_Completa.png" },
    { id: "feature2", title: t("feature2Title"), icon: "/09-Dashboard/Icons/ads_click.svg", image: "/14-Data_Metrics/Carrusel_2_Completa.png" },
    { id: "feature3", title: t("feature3Title"), icon: "/09-Dashboard/Icons/tune.svg", image: "/14-Data_Metrics/Carrusel_3_Completa.png" },
    { id: "feature4", title: t("feature4Title"), icon: "/09-Dashboard/Icons/notifications_unread.svg", image: "/14-Data_Metrics/Carrusel_4_Completa.png" },
  ];

  useEffect(() => {
    if (!activeFeature) return;

    setFadeClass("fade-out"); // Disminuir opacidad al 0%

    const timeout1 = setTimeout(() => {
      const selectedFeature = features.find((feature) => feature.id === activeFeature);
      if (selectedFeature) {
        setImageSrc(selectedFeature.image);
        setFadeClass("fade-low"); // Imagen con 25% de opacidad
      }
    }, 300); // Esperar 300ms antes de cambiar la imagen

    const timeout2 = setTimeout(() => {
      setFadeClass("fade-in"); // Volver al 100% de opacidad
    }, 500); // Subir opacidad tras 200ms con imagen nueva

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [activeFeature]);

  return (
    <div className="interactive-features">
      <div className="static-texts">
        <h1>{t("updatedData")}</h1>
        <p>{t("customDashboard")}</p>
      </div>

      <div className="interactive-section">
        <div className="features-list">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-item ${activeFeature === feature.id ? "active" : ""}`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <p>{feature.title}</p>
            </div>
          ))}
        </div>

        <div className="feature-display">
          <div className={`feature-content ${fadeClass}`}>
            <img src={imageSrc} alt="Feature" className="feature-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;
