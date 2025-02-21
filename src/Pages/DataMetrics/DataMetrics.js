import React from "react";
import Button from "../../components/Buttons/Button";
import { useLanguage } from "../../LanguageContext";
import InteractiveFeatures from "./InteractiveFeatures";
import "./DataMetrics.css";
import BenefitsSection from "./BenefitsSection";
import SolutionsSection from "./SolutionsSection";
import { useNavigate } from "react-router-dom";

const DataMetrics = () => {
  const { t } = useLanguage();
  const navigate = useNavigate(); // Navegación con react-router

  return (
    <div className="dm-body">
      <div className="data-metrics-container">
        <div className="data-metrics-content">
          <p className="data-metrics-section-label">{t("dataAndMetrics")}</p>
          <h1 className="data-metrics-title">{t("fromDataToInformation")}</h1>
          <p className="data-metrics-description">{t("discoverBenefits")}</p>
          <Button to={"/contact"}>
            {t("scheduleDemoButton")}
            <img src="/00-Buttons, Dropdowns & Questions/event.svg" alt="Demo" />
          </Button>
        </div>
      </div>

      <div className="section2">
        {/* Sección de texto central */}
        <div className="data-metrics-header">
          <h1 className="header-title">
            {t("panoramicViewFirst")} <span className="highlight">{t("panoramicViewSecond")}</span> {t("panoramicViewThird")}
          </h1>
          <p className="header-description">
            {t("senseViewDashboard")}
          </p>
          <button className="login-button" onClick={() => navigate("/login")}>
            {t("login")}
            <img src="/01-NavBar/login.svg" alt="Log in button" />
          </button>
        </div>

        {/* Sección de contenido visual e información */}
        <div className="content-section">
          <div className="image-container">
            <img src="/14-Data Metrics/Datos_Tablet-Celular.png" alt="Mockup del tablero"  />
          </div>

          <div className="text-section">
            <p className="info-text">
              <strong>¿{t("howItWorks")}?</strong> {t("howItWorksAns")}
            </p>
            <p className="info-text">
              <strong>{t("howToAccess")}</strong> 
              {t("howToAccessAns")}</p>
          </div>
        </div>
      </div>

      <div className="section3">
        {/* Text and image section */}
        <div className="text-and-mockup">
          <div className="text-content">
            <h1 className="section3-title">
              {t("forgetLogs")}
            </h1>
            <p className="section3-description">
              {t("monitorProduction")}
            </p>
          </div>
          <div className="mockup-container">
            <img src="/14-Data Metrics/Datos_Laptop.png" alt="Dashboard mockup" className="mockup-image" />
          </div>
        </div>
      </div>
        <InteractiveFeatures />
        <BenefitsSection />
        <SolutionsSection />

    </div>
  );
};

export default DataMetrics;