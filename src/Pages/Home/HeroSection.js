import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons/Button";
import { useLanguage } from "../../LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage(); // Traducción

  const texts = [
    t("AnimationSectionText1"),
    t("AnimationSectionText2"),
    t("AnimationSectionText3"),
    t("AnimationSectionText4"),
    t("AnimationSectionText5"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Cambio aquí
  const [showText, setShowText] = useState(true); // Ahora se muestra desde el inicio

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
        setShowText(true);
      }, 300); // Reducido de 500ms a 200ms
    }, 3000); // 3000ms

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="static-text">{t("AnimationSectionTitle")}</h1>
        <div className={`dynamic-container ${showText ? "text-visible" : "text-hidden"}`}>
          <span className="changing-text">
            {showText ? texts[currentIndex] : ""}
            <span className="moving-line"></span>
          </span>
        </div>
        <p>
          {t("AnimationSectionDescription1")}
          <br />
          {t("AnimationSectionDescription2")}
        </p>
        <Button to={"/contact"}>
          {t("ScheduleDemoButton")}
          <img src="00-Buttons_Dropdowns_Questions/event.svg" alt={t("DemoImageAlt")} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
