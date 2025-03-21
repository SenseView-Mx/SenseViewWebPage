import React from "react";
import Button from "../../components/Buttons/Button";
import "./MissionSection.css";
import { useLanguage } from "../../LanguageContext";


const MissionSection = () => {
  const { t } = useLanguage();
  return (
    <div className="mission-section">
      <div className="dual-image-card">
        {/* Primera sección */}
        <div className="section">
          <div className="image-container">
            <img src="/13-About_Us/Nuestra_Misión.png" alt={t("missionImageAlt")} />
          </div>
          <div className="text-container">
            <h2>{t("missionTitle")}</h2>
            <div className="mission-text">
              <span style={{ fontWeight: "bold" }}>{t("missionDescription1")}</span>
              <span>{t("missionDescription2")}</span>
              <br></br>
              <br></br>
              <span>{t("missionDescription3")}</span>
              <span style={{ fontWeight: "bold" }}>{t("missionDescription4")}</span>
              <span>{t("missionDescription5")}</span>

            </div>
          </div>
        </div>

        {/* Segunda sección */}
        <div className="section reverse">
          <div className="text-container">
            <h2>{t("commitmentTitle")}</h2>
            <div className="mission-text">
              <span>{t("commitmentDescription1")}</span>
              <span style={{ fontWeight: "bold"}}>{t("commitmentDescription2")}</span>
              <span>{t("commitmentDescription3")}</span>
              <br></br>
              <br></br>
              <span>{t("commitmentDescription4")}</span>
            </div>
          </div>
          <div className="image-container">
            <img src="/13-About_Us/Nuestro_Compromiso.png" alt={t("commitmentImageAlt")} />
          </div>
        </div>
      </div>

      {/* Tercera sección */}
    <div className="call-to-action">
      {/* Texto en la izquierda */}
      <div className="cta-text">
        <h3>{t("ctaText")}</h3>
        <Button to={"/contact"}>
          {t("ctaButton")}
          <img src="/00-Buttons_Dropdowns_Questions/contact_page.png" alt="Contact Icon" />
        </Button>
      </div>
        
        {/* Imagen en la derecha con gradiente */}
        <div className="cta-image">
          <div className="cta-image-overlay"></div>
          <img src="/13-About_Us/Image_Production04.jpg" alt={t("ctaImageAlt")} />
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
