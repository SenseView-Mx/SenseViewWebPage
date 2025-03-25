// src/LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import translations from "./i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Utiliza localStorage para cargar el idioma guardado o establecer 'es' como predeterminado
  const [language, setLanguage] = useState(localStorage.getItem('appLanguage') || 'es');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('appLanguage', lang); // Guarda el idioma seleccionado en localStorage
  };

  const t = (key) => translations[language]?.[key] || key;

  useEffect(() => {
    const storedLanguage = localStorage.getItem('appLanguage');
    if (storedLanguage) {
      setLanguage(storedLanguage); // Actualiza el estado del idioma al cargar la página
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
