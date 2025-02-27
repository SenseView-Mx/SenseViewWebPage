import React from 'react';
import './SolutionsSection.css'; 
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { useLanguage } from "../../LanguageContext";

const SolutionsSection = () => {

    const { t } = useLanguage();

    return (
        <div className="solutionsDataMetrics-section">
        <p className="section-label">{t("solutionsLabel")}</p>
        <h1>{t("solutionsTitle")}</h1>
        <div className="solutionsDataMetrics-grid">
          <FeatureCard
            imageSrc="/14-Data Metrics/Digitalize_Robots.png"
            title={t("solutionsDataMetricsTitle")}
            description={t("solutionsDataMetricsDescription")}
            buttonText={t("services")}
            buttonIcon="/00-Buttons, Dropdowns & Questions/senseview_isotype.svg"
            toLink={"/services"}
          />
          <FeatureCard
            imageSrc="/05-Services/Photo_Device01.webp"
            title={t("proteoTitle")}
            description={t("proteoDescription")}
            buttonText={t("proteoButton")}
            buttonIcon="/00-Buttons, Dropdowns & Questions/memory.svg"
            toLink={"/devices"}
          />
        </div>
      </div>
    );
};

export default SolutionsSection;
