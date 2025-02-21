import React, { useState, useEffect } from "react";
import "./InteractiveFeatures.css";
import { useLanguage } from "../../LanguageContext";

const InteractiveFeatures = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState("feature1");
  const [fadeClass, setFadeClass] = useState("fade-out");

  const features = [
    { id: "feature1", title: t("feature1Title"), icon: "/09-Dashboard/Icons/dashboard_customize.svg", image: "/14-Data Metrics/Carrusel_Base.png" },
    { id: "feature2", title: t("feature2Title"), icon: "/09-Dashboard/Icons/ads_click.svg", image: "/14-Data Metrics/Carrusel_1_Completa.png" },
    { id: "feature3", title: t("feature3Title"), icon: "/09-Dashboard/Icons/tune.svg", image: "/14-Data Metrics/Carrusel_2_Completa.png" },
    { id: "feature4", title: t("feature4Title"), icon: "/09-Dashboard/Icons/notifications_unread.svg", image: "/14-Data Metrics/Carrusel_3_Completa.png" },
    { id: "feature5", title: t("feature5Title"), icon: "/09-Dashboard/Icons/verified_user.svg", image: "/14-Data Metrics/Carrusel_4_Completa.png" },
  ];

  useEffect(() => {
    setFadeClass("fade-out"); // Aplica la clase de fade-out antes de cambiar la imagen
    const timeout = setTimeout(() => {
      setFadeClass("fade-in"); // Activa el fade-in después del cambio
    }, 200); // Pequeño retraso para que el fade-out se complete antes del cambio

    return () => clearTimeout(timeout);
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
          {features.map(
            (feature) =>
              activeFeature === feature.id && (
                <div key={feature.id} className={`feature-content ${fadeClass}`}>
                  <img src={feature.image} alt={feature.title} className="feature-image" />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;
