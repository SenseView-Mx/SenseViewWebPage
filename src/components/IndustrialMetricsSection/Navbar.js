import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { useLanguage } from "../../LanguageContext";
import "./Navbar.css";

const Navbar = ({ title, toLink }) => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["characteristics", "software", "benefits"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Obtener altura dinámica del navbar
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
  
      // Obtener la posición real de la sección
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  
      // Evita que el scroll sea impreciso en diferentes dispositivos
      window.scrollTo({
        top: sectionPosition - navbarHeight - 20, // Se ajusta el margen
        behavior: "smooth",
      });
    }
  };
  
  

  return (
    <nav className="industrial-navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">{title}</h1>
        <div className="navbar-links">
          <button
            onClick={() => scrollToSection("characteristics")}
            className={activeSection === "characteristics" ? "active" : ""}
          >
            {t("characteristics")}
          </button>
          <button
            onClick={() => scrollToSection("software")}
            className={activeSection === "software" ? "active" : ""}
          >
            {t("software")}
          </button>
          <button
            onClick={() => scrollToSection("benefits")}
            className={activeSection === "benefits" ? "active" : ""}
          >
            {t("benefitsNavbar")}
          </button>
        </div>
        <div className="button-demo">
          <Button to={toLink}>
            {t("scheduleDemo")}
            <img src="/00-Buttons, Dropdowns & Questions/event.svg" alt="demo" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
