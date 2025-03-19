import React from "react";
import Button from "../../components/Buttons/Button";
import { useLanguage } from "../../LanguageContext"; 
import "./GiantCardSection.css"

const GiantCardSection = () => {
  const { t } = useLanguage(); // traslate
  
  return (
    <div className="giant-card">
      {/* Primer bloque */}
      <div className="card-section">
        <img
          src="03-Home/Soluciones_Personalizadas.webp"
          alt={t("GiantCardAlt1")}
          className="section-image"
        />
        <div className="section-content">
          <h3>{t("GiantCardTitle1")}</h3>
          <p>{t("GiantCardDescription1")}</p>
          <div className="section-buttons">
            <Button to={"/services"}>
              {t("GiantCardButton1")}
              <img
                src="00-Buttons_Dropdowns_Questions/senseview_isotype.svg"
                alt={t("GiantCardButton1Alt")}
              />
            </Button>
            <Button variant="secondary" to={"/how-it-works"}>{t("GiantCardButton2")}
            <img
                src="00-Buttons_Dropdowns_Questions/arrow_forward_ios.svg"
                alt={t("GiantCardButton1Alt")}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Segundo bloque: Plug & Play */}
      <div className="card-section reverse">
        <img
          src="03-Home/Proteo_Botellas.jpg"
          alt={t("GiantCardAlt2")}
          className="section-image"
        />
        <div className="section-content">
          <h3>{t("GiantCardTitle2")}</h3>
          <p>{t("GiantCardDescription2")}</p>
          <div className="section-buttons">
            <Button to={"/devices"}>
              {t("GiantCardButton3")}
              <img
                src="00-Buttons_Dropdowns_Questions/memory.svg"
                alt={t("GiantCardButton3Alt")}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Tercer bloque */}
      <div className="card-section">
        <img
          src="03-Home/Operador_Ope.png"
          alt={t("GiantCardAlt3")}
          className="section-image"
        />
        <div className="section-content">
          <h3>{t("GiantCardTitle3")}</h3>
          <p>{t("GiantCardDescription3")}</p>
          <div className="section-buttons">
            <Button to={"/data-metrics"}>
              {t("GiantCardButton4")}
              <img
                src="00-Buttons_Dropdowns_Questions/dashboard_customize.svg"
                alt={t("GiantCardButton4Alt")}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiantCardSection;
