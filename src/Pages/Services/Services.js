import React from "react";
import Button from "../../components/Buttons/Button";
import "./Services.css";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { useLanguage } from "../../LanguageContext";

function Services() {
  const { t } = useLanguage();

  return (
    <div>
      <div className="services-page">
        <div className="services-hero">
          <div className="services-content">
            <p className="section-label">{t("services")}</p>
            <h1>{t("heroTitle")}</h1>
            <p>{t("heroDescription")}</p>
            <Button to={"/contact"}>
              {t("scheduleDemoButton")}
              <img src="/00-Buttons_Dropdowns_Questions/event.svg" alt="Demo" />
            </Button>
          </div>
          <div className="services-cards-container">
            {/* Card 1 */}
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <img src="/05-Services/Icons/troubleshoot.svg" alt="Icon" />
                </div>
                <h3 className="card-title">{t("variablesCardtitle")}</h3>
                <Button variant="secondary" to={"/services/industrial-variables"}>
                  {t("variablesCardbuttonText")}
                  <img
                    src="00-Buttons_Dropdowns_Questions/arrow_forward_ios.svg"
                    alt="Arrow"
                  />
                </Button>
              </div>
              <div className="card-body">
                <img
                  src="/05-Services/Variables_Industriales.png"
                  alt="Variables Industriales"
                  className="card-image"
                />
                <div className="card-content">
                  <p>{t("variablesCarddescription")}</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <img src="/05-Services/Icons/leaderboard.svg" alt="Icon" />
                </div>
                <h3 className="card-title">{t("metricsCardtitle")}</h3>
                <Button variant="secondary" to={"/services/production-metrics"}>
                  {t("metricsCardbuttonText")}
                  <img
                    src="00-Buttons_Dropdowns_Questions/arrow_forward_ios.svg"
                    alt="Arrow"
                  />
                </Button>
              </div>
              <div className="card-body">
                <img
                  src="/05-Services/Operador_Ope.png"
                  alt="Métricas"
                  className="card-image"
                />
                <div className="card-content">
                  <p>{t("metricsCarddescription")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="solutionsServices-section">
        <p className="section-label">{t("solutionsLabel")}</p>
        <h1>{t("solutionsTitle")}</h1>
        <div className="solutionsServices-grid">
          <FeatureCard
            imageSrc="/05-Services/Photo_Encendido.jpg"
            title={t("proteoTitle")}
            description={t("proteoDescription")}
            buttonText={t("proteoButton")}
            buttonIcon="/00-Buttons_Dropdowns_Questions/memory.svg"
            toLink={"/devices"}
          />
          <FeatureCard
            imageSrc="/05-Services/Gerente_Var.png"
            title={t("dataTitle")}
            description={t("dataDescription")}
            buttonText={t("dataButton")}
            buttonIcon="/00-Buttons_Dropdowns_Questions/dashboard_customize.svg"
            toLink={"/data-metrics"}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
