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
            imageSrc="/05-Services/Photo_Device01.webp"
            title={t("proteoTitle")}
            description={t("proteoDescription")}
            buttonText={t("proteoButton")}
            buttonIcon="/00-Buttons, Dropdowns & Questions/memory.svg"
          />
          <FeatureCard
            imageSrc="/05-Services/Photo_Laptop02.webp"
            title={t("dataTitle")}
            description={t("dataDescription")}
            buttonText={t("dataButton")}
            buttonIcon="/00-Buttons, Dropdowns & Questions/dashboard_customize.svg"
          />
        </div>
      </div>
    );
};

export default SolutionSection;
