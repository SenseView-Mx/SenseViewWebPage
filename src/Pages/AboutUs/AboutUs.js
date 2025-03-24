import React, { useEffect } from "react";
import "./AboutUs.css";
import MissionSection from "./MissionSection";
import { useLanguage } from "../../LanguageContext";

const AboutUs = () => {
    const { t } = useLanguage();
    useEffect(() => {
        document.title = "Sense View | " + t("aboutUs");
      }, []);
      
  return (
    <div>
        <div className="about-us">
        {/* Hero Section */}
        <div className="hero-section-AboutUs">
          <div className="hero-text">
            <h1>
              {t("aboutUsHeroTitle")} <br />
              <span className="highlight">{t("aboutUsHeroHighlight")}</span>
            </h1>
            <p>{t("aboutUsHeroDescription")}</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section-aboutus">
          {t("aboutUsFeatures", { returnObjects: true }).map((feature, index) => (
            <div className="feature-aboutus" key={index}>
              <img src={`13-About_Us/Icons/${feature.alt.toLowerCase()}.svg`} alt={feature.alt} />
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
      <MissionSection />
    </div>
  );
};

export default AboutUs;
