import React from "react";
import "./Footer.css";
import { useLanguage } from "../../LanguageContext";

const Footer = () => {
    const { t } = useLanguage();  // Traslate
    return (
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-logo-links">
              <img src="/02-Footer/Original-8.png" alt="Logo" className="footer-logo" />
              <nav className="footer-links">
                <a href="/faq">{t("faq")}</a>
                <a href="/contact">{t("contact")}</a>
                <a href="/terms">{t("terms")}</a>
                <a href="/privacy">{t("privacy")}</a>
              </nav>
            </div>
            <div className="footer-contact">
              <p>
                <img src="/02-Footer/headset_mic.png" alt="Soporte" />
                soporte@senseview.mx
              </p>
              <p>
                <img src="/02-Footer/mail.png" alt="Email" />
                contacto@senseview.mx
              </p>
              <p>
                <img src="/02-Footer/call.png" alt="Teléfono" />
                +52 331 819 3343
              </p>
            </div>
          </div>
          <div className="footer-container">
            <div className="footer-social">
              {[ 
                { href: "https://www.facebook.com/people/Sense-View/61556885189499/?is_tour_completed=true", src: "/02-Footer/Facebook_Buttons.png", alt: "Facebook" },
                { href: "https://www.linkedin.com/company/senseview/about/", src: "/02-Footer/LinkedIn_Buttons.png", alt: "LinkedIn" },
                { href: "https://www.youtube.com/@senseviewmx", src: "/02-Footer/YouTube_Buttons.png", alt: "YouTube" },
                { href: "https://www.instagram.com/senseviewmx/?igsh=MXZzMmoyc3BoMW9ocA%3D%3D#", src: "/02-Footer/Instagram_Buttons.png", alt: "Instagram" },
                { href: "https://x.com/senseviewmx?s=11&t=yUWHfdCX1kRt_eElh_qhsg", src: "/02-Footer/X_Button.png", alt: "Twitter" },
              ].map(({ href, src, alt }) => (
                <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                  <img src={src} alt={alt} />
                </a>
              ))}
            </div>
            <nav className="footer-links-mobile">
              <a href="/terms">{t("terms")}</a>
              <a href="/privacy">{t("privacy")}</a>
              </nav>
            <div className="footer-bottom">
              <p>{t("reserved_rights")}</p>
            </div>
          </div>
      </footer>
      
    );
};

export default Footer;
