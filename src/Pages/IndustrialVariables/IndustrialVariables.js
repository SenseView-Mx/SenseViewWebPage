import React, { useState, useEffect } from "react";
import Layout from "../../components/IndustrialMetricsSection/Layout";
import MonitoringSection from "../../components/MonitoringSection/MonitoringSection";
import IndustrialMetricsIntro from "../../components/IndustrialMetricsIntro/IndustrialMetricsIntro";
import { useLanguage } from "../../LanguageContext";
import "./IndustrialVariables.css";

const IndustrialVariables = () => {
  const { t } = useLanguage();

  useEffect(() => {
                  document.title = "Sense View | " + t("industrialVariables");
                }, []);

  const breadcrumbLinks = [
    { label: t("solutions"), active: false },
    { label: t("services"), to: "/services", active: true },
  ];

  const monitoringItems = [
    {
      icon: "/06-Service01/Icons/thermostat.png",
      title: t("temperatureAndHumidity"),
      description: t("temperatureAndHumidityDesc"),
    },
    {
      icon: "/06-Service01/Icons/water_pump.png",
      title: t("flow"),
      description: t("flowDesc"),
    },
    {
      icon: "/06-Service01/Icons/propane.png",
      title: t("level"),
      description: t("levelDesc"),
    },
    {
      icon: "/06-Service01/Icons/compress.png",
      title: t("pressure"),
      description: t("pressureDesc"),
    },
    {
      icon: "/06-Service01/Icons/location_on.png",
      title: t("gps"),
      description: t("gpsDesc"),
    },
    {
      icon: "/06-Service01/Icons/bolt.png",
      title: t("energyConsumption"),
      description: t("energyConsumptionDesc"),
    },
  ];

  return (
    <div>
      <IndustrialMetricsIntro
        breadcrumbLinks={breadcrumbLinks}
        title={t("industrialVariables")} 
        description={t("industrialVariablesDescription")}
        buttonText={t("scheduleDemoButton")}
        buttonIcon="/00-Buttons_Dropdowns_Questions/event.svg"
        toLink={"/contact"}
        backgroundPosition={"top"}
        backgroundImage="/06-Service01/Headline_Image/Variables_Industriales.png" // Imagen específica
      />
      <div className="description-section">
        <div className="description-left">
          <h2 className="description-title">
            <span className="highlight">{t("dataToPowerHighlight")}</span> <br />
            {t("dataToPowerSubtitle")}
          </h2>
          <p className="description-text">{t("dataToPowerDescription")}</p>
        </div>
        <div className="description-right">
          <div className="feature-description">
            <div className="feature-icon-description">
              <img src="/06-Service01/Icons/zoom_in.svg" alt={t("wasteDetectionAlt")} />
            </div>
            <p className="feature-text-description">{t("wasteDetection")}</p>
          </div>
          <div className="feature-description">
            <div className="feature-icon-description">
              <img src="/06-Service01/Icons/valve.svg" alt={t("materialsControlAlt")} />
            </div>
            <p className="feature-text-description">{t("materialsControl")}</p>
          </div>
          <div className="feature-description">
            <div className="feature-icon-description">
              <img src="/06-Service01/Icons/water_drop.svg" alt={t("leakDetectionAlt")} />
            </div>
            <p className="feature-text-description">{t("leakDetection")}</p>
          </div>
        </div>
      </div>
      <MonitoringSection title={t("monitoringTitle")} items={monitoringItems} />
      <Layout title={t("navbarTitle")} />
    </div>
  );
};

export default IndustrialVariables;
