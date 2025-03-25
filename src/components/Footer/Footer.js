import React from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
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
                {/* Utiliza Link en lugar de a */}
                <Link to="/faq">{t("faq")}</Link>
                <Link to="/contact">{t("contact")}</Link>
                <Link to="/terms">{t("terms")}</Link>
                <Link to="/privacy">{t("privacy")}</Link>
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
                { href: "https://www.facebook.com/people/Sense-View/61556885189499/?is_tour_completed=true", src: "/02-Footer/facebook_icon.png", alt: "Facebook" },
                { href: "https://www.linkedin.com/company/senseview/about/", src: "/02-Footer/linkedin_icon.png", alt: "LinkedIn" },
                { href: "https://www.youtube.com/@senseviewmx", src: "/02-Footer/youtube_icon.png", alt: "YouTube" },
                { href: "https://www.instagram.com/senseviewmx/?igsh=MXZzMmoyc3BoMW9ocA%3D%3D#", src: "/02-Footer/instagram_icon.png", alt: "Instagram" },
                { href: "https://x.com/senseviewmx?s=11&t=yUWHfdCX1kRt_eElh_qhsg", src: "/02-Footer/x_icon.png", alt: "Twitter" },
              ].map(({ href, src, alt }) => (
                <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                  <img src={src} alt={alt} />
                </a>
              ))}
            </div>
            <nav className="footer-links-mobile">
              <Link to="/terms">{t("terms")}</Link>
              <Link to="/privacy">{t("privacy")}</Link>
            </nav>
            <div className="footer-bottom">
              <p>{t("reserved_rights")}</p>
            </div>
          </div>
        </footer>
    );
};

export default Footer;
