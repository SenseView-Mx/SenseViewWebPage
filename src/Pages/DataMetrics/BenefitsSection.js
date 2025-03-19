import React from "react";
import Button from "../../components/Buttons/Button"; 
import "./BenefitsSection.css";
import { useLanguage } from "../../LanguageContext";

const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <div className="section5-section">
      <div className="section5-content">
        {/* Mockup de imágenes en la izquierda */}
        <div className="section5-image">
          <img
            src="/14-Data_Metrics/Datos_Celular_Celular.png"
            alt={t("powerfulTool")}
            className="mockup-image-benefits"
          />
        </div>

        {/* Contenido textual en la derecha */}
        <div className="section5-text">
          <p className="section5-label">{t("benefitsTitle")}</p>
          <h1 className="section5-title">{t("powerfulTool")}</h1>
          <p className="section5-description">{t("benefitsDescription")}</p>
          <div className="section5-buttons">
            <Button to={"/contact"}>
              {t("scheduleDemoButton")}
              <img
                src="/00-Buttons_Dropdowns_Questions/event.svg"
                alt="Demo"
              />
            </Button>
            <Button variant="secondary" to={"/pricing"}>
              {t("pricingButton")}
              <img
                src="00-Buttons_Dropdowns_Questions/arrow_forward_ios.svg"
                alt={t("pricingButtonAlt")}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
