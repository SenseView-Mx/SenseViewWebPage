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

    return (
        <div className="mercurio-body">
            <div 
                className={`dynamic-section-mercurio ${isDarkMode ? "dark-mode" : "light-mode"}`}
                onMouseEnter={() => setIsDarkMode(true)}
                onMouseLeave={() => setIsDarkMode(false)}
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
                        <img src="/08-Devices/Mercurio/Mercurio_1-2.png" alt="Mercurio" className="dynamic-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MercurioSection;
