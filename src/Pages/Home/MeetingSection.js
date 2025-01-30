import React from "react";
import Button from "../../components/Buttons/Button";
import "./MeetingSection.css";
import { useLanguage } from "../../LanguageContext"; 
import CalendlyComponent from "../../components/Calendly/CalendlyComponent";

const MeetingSection = () => {
  const { t } = useLanguage(); // traslate

  return (
    <div className="meeting-section-home">
      <div className="meeting-info-home">
        <h2>
          {t("MeetingSectionTitle")} <span className="highlight-text">Sense View.</span>
        </h2>
        <p>{t("MeetingSectionSubtitle")}</p>
        <Button to={"/contact"}>
          {t("MeetingSectionButton")}
          <img
            src="00-Buttons, Dropdowns & Questions/contact_page.svg"
            alt={t("MeetingSectionButtonAlt")}
          />
        </Button>
      </div>

      <div className="meeting-card">
        <CalendlyComponent />
      </div>
    </div>
  );
};

export default MeetingSection;
