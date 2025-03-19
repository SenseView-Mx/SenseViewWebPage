import React from "react";
import "./Contact.css";
import ContactSectionForm from "./ContactSectionForm";
import { useLanguage } from "../../LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="contact-page-container">
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">{t("contactTitle")}</h1>
          <p className="contact-description">{t("contactDescription")}</p>
          <div className="contact-info">
            <p>
              <img
                src="12-Contact_Us/Icons/mail.svg"
                alt="Email icon"
                className="contact-icon"
              />
              <a href="mailto:contacto@senseview.mx" className="contact-link">
                contacto@senseview.mx
              </a>
            </p>
            <p>
              <img
                src="12-Contact_Us/Icons/call.svg"
                alt="Call icon"
                className="contact-icon"
              />
              <a href="tel:+523318193343" className="contact-link">
                +52 331 819 3343
              </a>
            </p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/people/Sense-View/61556885189499/?is_tour_completed=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="12-Contact_Us/Icons/Facebook_Buttons.svg"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/senseview/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="12-Contact_Us/Icons/LinkedIn_Buttons.svg"
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.youtube.com/@senseviewmx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="12-Contact_Us/Icons/Youtube_Buttons.svg"
                  alt="YouTube"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/senseviewmx/?igsh=MXZzMmoyc3BoMW9ocA%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="12-Contact_Us/Icons/Instagram_Buttons.svg"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://x.com/senseviewmx?s=11&t=yUWHfdCX1kRt_eElh_qhsg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="12-Contact_Us/Icons/X_Button.svg"
                  alt="Twitter"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactSectionForm />
    </div>
  );
};

export default Contact;
