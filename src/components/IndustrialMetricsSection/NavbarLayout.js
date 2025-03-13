import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { useLanguage } from "../../LanguageContext";
import "./NavbarLayout.css";

const NavbarLayout = ({ title, toLink }) => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const [isStacked, setIsStacked] = useState(false);
  const [isInsideComponent, setIsInsideComponent] = useState(true);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbar = document.querySelector(".navbar"); // Navbar principal
      const secondaryNavbar = document.querySelector(".industrial-navbar"); // Navbar secundario
  
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const secondaryNavbarHeight = secondaryNavbar ? secondaryNavbar.offsetHeight : 0;
  
      // Asegurar que la posición se calcula de manera más estable
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  
      // Ajustar un margen adicional para compensar posibles errores en distintos dispositivos
      const offset = navbarHeight + secondaryNavbarHeight - 0; 
  
      window.scrollTo({
        top: sectionPosition - offset, 
        behavior: "smooth",
      });
  
      // 🔹 Pequeña pausa y corrección para asegurar precisión
      setTimeout(() => {
        const adjustedPosition = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: adjustedPosition - offset,
          behavior: "smooth",
        });
      }, 100); // Espera 100ms para corregir la posición final
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const primaryNavbar = document.querySelector(".navbar"); 
      const secondaryNavbar = document.querySelector(".industrial-navbar");
      const section = document.querySelector(".layout-container"); // Sección donde está el navbar secundario

      if (primaryNavbar && secondaryNavbar && section) {
        const primaryBottom = primaryNavbar.getBoundingClientRect().bottom;
        const secondaryTop = secondaryNavbar.getBoundingClientRect().top;
        const sectionRect = section.getBoundingClientRect();

        // Detectar si el usuario está dentro de la sección del Layout
        if (sectionRect.top <= 0 && sectionRect.bottom >= secondaryNavbar.offsetHeight) {
          setIsInsideComponent(true);
        } else {
          setIsInsideComponent(false);
        }

        // Si el navbar secundario toca el navbar principal, se apila debajo
        if (secondaryTop <= primaryBottom && isInsideComponent) {
          setIsStacked(true);
        } else {
          setIsStacked(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInsideComponent]);

  return (
    <nav className={`industrial-navbar ${isStacked ? "stacked" : ""} ${!isInsideComponent ? "hidden" : ""}`}>
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
        <div className="button-demo-container">
          <div className="button-demo">
            <Button to={toLink}>
              {t("scheduleDemo")}
              <img src="/00-Buttons, Dropdowns & Questions/event.svg" alt="demo" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLayout;
