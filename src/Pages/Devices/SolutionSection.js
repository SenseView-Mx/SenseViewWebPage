import React from 'react';
import './SolutionSection.css'; 
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { useLanguage } from "../../LanguageContext";

const SolutionSection = () => {

    const { t } = useLanguage();

    return (
        <div className="solutionsSection-section">
        <p className="section-label">{t("solutionsLabel")}</p>
        <h1>{t("solutionsTitle")}</h1>
        <div className="solutionsSection-grid">
        <FeatureCard
            imageSrc="/14-Data Metrics/Digitalize_Robots.png"
            title={t("solutionsDataMetricsTitle")}
            description={t("solutionsDataMetricsDescription")}
            buttonText={t("services")}
            buttonIcon="/00-Buttons, Dropdowns & Questions/senseview_isotype.svg"
            toLink={"/services"}
          />
          <FeatureCard
            imageSrc="/05-Services/Gerente_Var.png"
            title={t("dataTitle")}
            description={t("dataDescription")}
            buttonText={t("dataButton")}
            buttonIcon="/00-Buttons, Dropdowns & Questions/dashboard_customize.svg"
            toLink={"/data-metrics"}
          />
        </div>
      </div>
    );
};

export default SolutionSection;
