import React, { useState, useEffect } from "react";
import "./MercurioSection.css";
import { useLanguage } from "../../LanguageContext";
import TransformationMercurio from "./TransformationMercurio";

const MercurioSection = () => {
    const { t } = useLanguage();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isFinalPosition, setIsFinalPosition] = useState(false);

    useEffect(() => {
        if (isDarkMode && !isFinalPosition) {
            setTimeout(() => {
                setIsFinalPosition(true);
            }, 2000);
        }
    }, [isDarkMode, isFinalPosition]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 500) { // Solo en móviles
                const sections = document.querySelectorAll(".dynamic-section-mercurio");
                const middleOfScreen = window.innerHeight / 2;

                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    const topAboveMiddle = rect.top < middleOfScreen;
                    const bottomBelowMiddle = rect.bottom > middleOfScreen;

                    // Light mode → Dark mode → Light mode
                    if (topAboveMiddle && bottomBelowMiddle) {
                        setIsDarkMode(true);  // Dark mode cuando la sección está en el centro
                    } else {
                        setIsDarkMode(false); // Light mode al inicio y final
                    }
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isMobile = window.innerWidth <= 500;

    return (
        <div className="mercurio-body">
            <div 
                className={`dynamic-section-mercurio ${isDarkMode ? "dark-mode" : "light-mode"}`}
                {...(!isMobile && {
                    onMouseEnter: () => setIsDarkMode(true),
                    onMouseLeave: () => setIsDarkMode(false),
                })}
            >
                <div className="dynamic-container-mercurio">
                    {/* Contenedor del texto */}
                    <div className="dynamic-text-mercurio">
                        <h2 className="dynamic-title-mercurio">{t("mercuryTitle")}</h2>
                        <h3 className="dynamic-title2-mercurio">{t("mercurySubtitle")}</h3>
                        <p className="dynamic-description-mercurio">
                            {t("mercuryDescription")}
                        </p>
                    </div>
    
                    {/* Contenedor de la imagen */}
                    <div className="dynamic-image-container">
                        <img src="/08-Devices/Mercurio/Mercurio_1_2.png" alt="Mercurio" className="dynamic-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MercurioSection;
