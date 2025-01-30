import React, { useState } from "react";
import "./InteractiveFeatures.css";
import { useLanguage } from "../../LanguageContext";

const InteractiveFeatures = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState("feature1");

  const features = [
    {
      id: "feature1",
      title: t("feature1Title"),
      icon: "/09-Dashboard/Icons/dashboard_customize.svg", 
      image: "/path-to-image1.png", // Ruta de la imagen
    },
    {
      id: "feature2",
      title: t("feature2Title"),
      icon: "/09-Dashboard/Icons/ads_click.svg",
      image: "/path-to-image2.png",
    },
    {
      id: "feature3",
      title: t("feature3Title"),
      icon: "/09-Dashboard/Icons/tune.svg", 
      image: "/path-to-image3.png",
    },
    {
      id: "feature4",
      title: t("feature4Title"),
      icon: "/09-Dashboard/Icons/notifications_unread.svg", 
      image: "/path-to-image4.png",
    },
    {
      id: "feature5",
      title: t("feature5Title"),
      icon: "/09-Dashboard/Icons/verified_user.svg", 
      image: "/path-to-image5.png",
    },
  ];

  return (
    <div className="interactive-features">
      <div className="static-texts">
        <h1>{t("updatedData")}</h1>
        <p>{t("customDashboard")}</p>
      </div>

      <div className="interactive-section">
        {/* Textos interactivos */}
        <div className="features-list">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-item ${
                activeFeature === feature.id ? "active" : ""
              }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <p>{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Imagen dinámica */}
        <div className="feature-display">
          {features.map(
            (feature) =>
              activeFeature === feature.id && (
                <div key={feature.id} className="feature-content">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-image"
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;
