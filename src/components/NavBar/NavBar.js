import React, { useState, useEffect } from "react";
import Dropdown from "./DropDown";
import NavbarToggle from "./NavBarToggle";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../../LanguageContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const { t } = useLanguage(); // Translate
  const location = useLocation(); // Obtener la ubicación actual
  const navigate = useNavigate(); // Navegación con react-router

  const isActive = (path) => location.pathname === path;

  const solutionItems = [
    { label: t("services"), icon: "/01-NavBar/senseview_isotype.png", path: "/services" },
    { label: t("industrialVariables"), icon: "/01-NavBar/troubleshoot.png", isIndented: true, path: "/services/industrial-variables" },
    { label: t("productionMetrics"), icon: "/01-NavBar/leaderboard.png", isIndented: true, path: "/services/production-metrics" },
    { label: t("howItWorks"), icon: "/01-NavBar/emoji_objects.png", path: "/how-it-works" },
    { label: t("devices"), icon: "/01-NavBar/memory.png", path: "/devices" },
    { label: t("dataMetrics"), icon: "/01-NavBar/dashboard_customize.png", path: "/data-metrics" },
  ];

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSecondaryNavbarVisible, setIsSecondaryNavbarVisible] = useState(false);
  const [navbarGap, setNavbarGap] = useState(0);


  // Detectar clics fuera del dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-solutions") && isSolutionsDropdownOpen) {
        setIsSolutionsDropdownOpen(false);
      }
      if (!event.target.closest(".language-selector") && isLanguageDropdownOpen) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSolutionsDropdownOpen, isLanguageDropdownOpen]);

  // Detectar cambios de tamaño
  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth <= 796;
      setIsMobile(isCurrentlyMobile);

      if (!isCurrentlyMobile) {
        setIsMenuOpen(false);
        setIsSolutionsDropdownOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar menú al cambiar de ruta y desplazarse al inicio
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsDropdownOpen(false);
    window.scrollTo(0, 0); // Mover al inicio de la página
  }, [location]);

  


  useEffect(() => {
    const checkSecondaryNavbar = () => {
      const secondaryNavbar = document.querySelector(".industrial-navbar");
      
      if (secondaryNavbar) {
        const rect = secondaryNavbar.getBoundingClientRect();
        // Verificamos si el navbar secundario está visible en la pantalla
        setIsSecondaryNavbarVisible(rect.top < window.innerHeight && rect.bottom > 0);
      } else {
        setIsSecondaryNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", checkSecondaryNavbar);
    window.addEventListener("resize", checkSecondaryNavbar);
    checkSecondaryNavbar(); // Llamar una vez al inicio

    return () => {
      window.removeEventListener("scroll", checkSecondaryNavbar);
      window.removeEventListener("resize", checkSecondaryNavbar);
    };
  }, []);

  
  useEffect(() => {
    const checkNavbarOverlap = () => {
      const secondaryNavbar = document.querySelector(".industrial-navbar");
      const globalNavbar = document.querySelector(".navbar");
  
      if (secondaryNavbar && globalNavbar) {
        const secondaryRect = secondaryNavbar.getBoundingClientRect();
        const globalRect = globalNavbar.getBoundingClientRect();
  
        // Medimos la distancia entre el navbar global y el navbar secundario
        const gap = secondaryRect.top - globalRect.bottom;
  
        setNavbarGap(gap); // Guardamos la distancia en el estado
        setIsSecondaryNavbarVisible(secondaryRect.top < window.innerHeight && secondaryRect.bottom > 0);
      } else {
        setIsSecondaryNavbarVisible(false);
        setNavbarGap(Infinity); // Si no está visible, asumimos que hay suficiente espacio
      }
    };
  
    window.addEventListener("scroll", checkNavbarOverlap);
    window.addEventListener("resize", checkNavbarOverlap);
    checkNavbarOverlap(); // Ejecutamos la función al inicio
  
    return () => {
      window.removeEventListener("scroll", checkNavbarOverlap);
      window.removeEventListener("resize", checkNavbarOverlap);
    };
  }, []);
  

const dropdownButtonHeight = 180; // Ajusta esto al tamaño real de tu dropdown button

const toggleSolutionsDropdown = () => {
  if (navbarGap < dropdownButtonHeight) {
    setIsSolutionsDropdownOpen(false);
    return;
  }
  setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
};

useEffect(() => {
  if (navbarGap < dropdownButtonHeight) {
    setIsSolutionsDropdownOpen(false);
  }
}, [navbarGap]);



  useEffect(() => {
    if (isSecondaryNavbarVisible) {
      setIsSolutionsDropdownOpen(false);
    }
  }, [isSecondaryNavbarVisible]);
    

  const toggleLanguageDropdown = () =>
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsSolutionsDropdownOpen(false);
  };

  const handleSolutionClick = (path) => {
    setIsSolutionsDropdownOpen(false);
    setIsMenuOpen(false);
    navigate(path); // Navegar usando react-router
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src="/01-NavBar/Original.svg" alt="Sense View Logo" />
        </Link>
      </div>
  
      <div className={`navbar-links ${isMenuOpen || !isMobile ? "open" : ""}`}>
        <ul className="navbar-menu">
          <li>
            <Dropdown
              isOpen={isSolutionsDropdownOpen}
              toggleDropdown={toggleSolutionsDropdown}
              label={t("solutions")}
              items={solutionItems.map((item) => ({
                ...item,
                onClick: () => handleSolutionClick(item.path), // Redirigir y cerrar el menú
              }))}
              isMenuOpen={isMenuOpen}
            />
          </li>
          <li className={isActive("/pricing") ? "active" : ""}>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>
              {t("pricing")}
            </Link>
          </li>
          <li className={isActive("/faq") ? "active" : ""}>
            <Link to="/faq" onClick={() => setIsMenuOpen(false)}>
              {t("faq")}
            </Link>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              {t("contact")}
            </Link>
          </li>
          <li className={isActive("/about") ? "active" : ""}>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              {t("aboutUs")}
            </Link>
          </li>
        </ul>
      </div>
  
      <div className="navbar-actions">
        <LanguageSelector
          isOpen={isLanguageDropdownOpen}
          toggleLanguageDropdown={toggleLanguageDropdown}
          languages={[
            { label: t("spanish"), icon: "/01-NavBar/language_spanish.png", code: "es" },
            { label: t("english"), icon: "/01-NavBar/language_us.png", code: "en" },
          ]}
        />
  
        {!isMobile && (
          <button className="login-button-nav" onClick={() => navigate("/")}>
            {t("login")}
            <img src="/01-NavBar/login.svg" alt="Log in button" />
          </button>
        )}
      </div>
  
      {/* Botones móviles en la parte inferior */}
      {isMobile && isMenuOpen && (
        <div className="mobile-buttons">
          <button className="login-button-mobile" onClick={() => navigate("/")}>
            {t("login")}
            <img src="/01-NavBar/login.svg" alt="Log in button" />
          </button>
          <button className="request-trial-button" onClick={() => navigate("/contact")}>
            {t("ScheduleDemoButton")}
            <img src="00-Buttons, Dropdowns & Questions/event.svg" alt={t("DemoImageAlt")} />
          </button>
        </div>
      )}
  
      <NavbarToggle onClick={toggleMenu} isOpen={isMenuOpen} />
    </nav>
  );
  
}

export default Navbar;
