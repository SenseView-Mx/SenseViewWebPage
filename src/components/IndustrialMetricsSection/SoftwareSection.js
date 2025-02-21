import React from "react";
import Button from "../Buttons/Button";
import { useLanguage } from "../../LanguageContext";
import "./SoftwareSection.css";

const SoftwareSection = ({ variant = "default" }) => {
  const { t } = useLanguage();

  // Definir las imágenes según la variante
  const imageVariants = {
    default: {
      laptop: "/06-Service01/Software/Variables_Laptop.png",
      tablet: "/06-Service01/Software/Variables_Tablet-Celular.png",
    },
    alternative: {
      laptop: "/07-Service02/SoftwareLayout/Metricas_Laptop.png",
      tablet: "/07-Service02/SoftwareLayout/Metricas_Tablet-Celular.png",
    },
  };

  // Definir los textos según la variante
  const textVariants = {
    default: t("softwareContentDescription1"),
    alternative: t("softwareContentDescription1Metrics"), // Nueva clave para la variante
  };

  // Seleccionar imágenes y texto según la variante
  const images = imageVariants[variant] || imageVariants.default;
  const softwareContentDescription1 = textVariants[variant] || textVariants.default;

  return (
    <section id="software" className="software-section">
      <div className="software-header">
        <h4>{t("softwareHeaderTitle")}</h4>
        <h2>{t("softwareHeaderSubtitle")}</h2>
        <p>{t("softwareHeaderDescription")}</p>
      </div>

      <div className="software-content">
        <div className="software-description">
          <h3>{t("softwareContentTitle1")}</h3>
          <p>{softwareContentDescription1}</p> {/* Texto dinámico */}
          <h3>{t("softwareContentTitle2")}</h3>
          <p>{t("softwareContentDescription2")}</p>
        </div>
        <div className="software-images">
          <img
            src={images.laptop}
            alt="Pantalla con gráficas en laptop"
            className="software-laptop"
          />
        </div>
      </div>

      <div className="software-footer">
        <div className="software-footer-images">
          <img
            src={images.tablet}
            alt="Pantalla con gráficas en tablet y móvil"
            className="software-tablet"
          />
        </div>
        <div className="software-footer-description">
          <h3>{t("softwareFooterTitle1")}</h3>
          <p>{t("softwareFooterDescription1")}</p>
          <h3>{t("softwareFooterTitle2")}</h3>
          <p>{t("softwareFooterDescription2")}</p>
          <Button
            to={"/data-metrics"}
            variant="secondary"
            style={{
              border: "none",
            }}
          >
            {t("softwareFooterButton")}{" "}
            <img src="/00-Buttons, Dropdowns & Questions/arrow_forward_ios.svg" alt="arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
