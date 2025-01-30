import React from "react";
import { useLanguage } from "../../LanguageContext";
import "./CalendlyComponent.css";

const CalendlyComponent = () => {
  const { language } = useLanguage();
  const calendlyLink =
    language === "es"
      ? "https://calendly.com/admin-senseview/reunion-virtual"
      : "https://calendly.com/dev-senseview/virtual-meeting";

  return (
    <div className="calendly-container">
      <iframe
        src={calendlyLink}
        width="100%"
        height="700"
        frameBorder="0"
        title="Calendly Scheduling"
        allow="autoplay; fullscreen"
      />
    </div>
  );
};

export default CalendlyComponent;
