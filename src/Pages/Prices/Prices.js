import React from "react";
import "./Prices.css";
import Button from "../../components/Buttons/Button";
import FAQSection from "../../components/FAQSection/FAQSection.js";
import { useLanguage } from "../../LanguageContext";

const Prices = () => {
  const { t } = useLanguage();
  return (
    <div className="body-prices">
      <div className="prices-container">
        <h1 className="prices-title">
          <span className="highlight">{t("pricesTitleHighlight")}</span> {t("pricesTitleRest")}
        </h1>
        <p className="prices-subtitle">{t("pricesSubtitle")}</p>
        <div className="prices-cards">
          <div className="price-card">
            <h2 className="plan-title">{t("individualPlanTitle")}</h2>
            <p className="price">
              $100*<sup>{t("currency")}</sup>
            </p>
            <p className="price-details">{t("pricePerVariable")}</p>
            <ul className="features">
              {/* <li>{t("forOneUser")}</li> */}
              <li>{t("feature1")}</li>
              <li>{t("feature2")}</li>
              <li>{t("feature3")}</li>
            </ul>
            <Button to={"/contact"}>
              {t("ScheduleDemoButton")}
              <img
                src="00-Buttons, Dropdowns & Questions/event.svg"
                alt={t("DemoImageAlt")}
              />
            </Button>
          </div>
          <div className="price-card">
            <h2 className="plan-title">{t("professionalPlanTitle")}</h2>
            <p className="price">
              $80*<sup>{t("currency")}</sup>
            </p>
            <p className="price-details">{t("pricePerVariable")}</p>
            <ul className="features">
              {/* <li>{t("forThreeUsers")}</li> */}
              <li>{t("feature4")}</li>
              <li>{t("feature5")}</li>
              <li>{t("feature6")}</li>
            </ul>
            <Button to={"/contact"}>
              {t("ScheduleDemoButton")}
              <img
                src="00-Buttons, Dropdowns & Questions/event.svg"
                alt={t("DemoImageAlt")}
              />
            </Button>
          </div>
          <div className="price-card">
            <h2 className="plan-title">{t("enterprisePlanTitle")}</h2>
            <p className="price">
              {t("enterprisePrice")}
            </p>
            <p className="price-details">{t("pricePerVariableEnterprice")}</p>
            <ul className="features">
              {/* <li>{t("forOneUser")}</li> */}
              <li>{t("feature7")}</li>
              <li>{t("feature8")}</li>
              <li>{t("feature9")}</li>
            </ul>
            <Button to={"/contact"}>
              {t("ScheduleDemoButton")}
              <img
                src="00-Buttons, Dropdowns & Questions/event.svg"
                alt={t("DemoImageAlt")}
              />
            </Button>
          </div>
        </div>
        <p className="disclaimer">{t("pricesDisclaimer")}</p>
      </div>
      <div className="fq-section">
        <FAQSection />
      </div>
    </div>
  );
};

export default Prices;