import React, { useState, useEffect } from "react";
import "./Devices.css";
import { useLanguage } from "../../LanguageContext";
import Button from "../../components/Buttons/Button";
import Transformation from "./Transformation";
import ProteoSection from "./ProteoSection";
import SolutionSection from "./SolutionSection";

const Devices = () => {
    const { t } = useLanguage();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeButton, setActiveButton] = useState("COM");
    const [isFinalPosition, setIsFinalPosition] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            setTimeout(() => {
                setIsFinalPosition(true);
            }, 2000); // Cambia la capa del video/imagen después de 2 segundos
        } else {
            setIsFinalPosition(false);
        }
    }, [isDarkMode]);

    const buttonLabels = {
        COM: { main: "COM", detail: t("Communication") },
        SEN: { main: "SEN", detail: t("AcquisitionProcessing") },
        POW: { main: "POW", detail: t("PowerSupply") },
    };

    const descriptions = {
        COM: {
            title: t('wifiLteLora'),
            description: t("comModuleDescription"),
        },
        SEN: {
            title: t('analogDigitalSensors'),
            description: t("senModuleDescription"),
        },
        POW: {
            title: t('batteryBarrel'),
            description: t("powModuleDescription"),
        },
    };

    const elements = {
        COM: isDarkMode ? (
            <video
                key="COM-video"
                className={`dynamic-media ${isFinalPosition ? "final-position" : ""}`}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/08-Devices/videos/Video-Proteo 3COM V1_Gradient.mp4" type="video/mp4" />
            </video>
        ) : (
            <img
                key="COM-image"
                src="/08-Devices/Proteo Interaction/Static-Proteo COM & POW.png"
                alt={t('wifiLteLora')}
                className="dynamic-media"
            />
        ),
        SEN: isDarkMode ? (
            <img
                key="SEN-image"
                src="/08-Devices/videos/Interaction-Proteo SEN_Gradient.png"
                alt={t('analogDigitalSensors')}
                className={`dynamic-media ${isFinalPosition ? "final-position" : ""}`}
            />
        ) : (
            <img
                key="SEN-image"
                src="/08-Devices/Proteo Interaction/Static-Proteo SEN.png"
                alt={t('analogDigitalSensors')}
                className="dynamic-media"
            />
        ),
        POW: isDarkMode ? (
            <video
                key="POW-video"
                className={`dynamic-media ${isFinalPosition ? "final-position" : ""}`}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/08-Devices/videos/Video-Proteo 2POW V1_Gradient.mp4" type="video/mp4" />
            </video>
        ) : (
            <img
                key="POW-image"
                src="/08-Devices/Proteo Interaction/Static-Proteo COM & POW.png"
                alt={t('batteryBarrel')}
                className="dynamic-media"
            />
        ),
    };

    return (
        <div className="dv-body">
            <div className="device-container">
                <video className="background-video" autoPlay loop muted playsInline>
                    <source src="/08-Devices/Headline Video/Video-Proteo Assembly.mp4" type="video/mp4" />
                </video>
                <div className="gradient-overlay"></div>
                <div className="device-content">
                    <p className="device-section-label">{t('deviceSectionLabel')}</p>
                    <h1 className="device-title">{t('deviceTitle')}</h1>
                    <p className="device-description">{t('deviceDescription')}</p>
                    <Button to={"/contact"}>{t('scheduleDemoButton')}<img src="/00-Buttons, Dropdowns & Questions/event.svg" alt="Demo"/></Button>
                </div>
            </div>

            <div 
                className={`dynamic-section ${isDarkMode ? "dark-mode" : "light-mode"}`}
                onMouseEnter={() => setIsDarkMode(true)}
                onMouseLeave={() => setIsDarkMode(false)}
            >
                <div className="dynamic-content">
                    <h2 className="dynamic-title">{t('dynamicTitle')}</h2>
                    <h3 className="dynamic-title2">{t('dynamicSubtitle')}</h3>
                    <p className="dynamic-description">{t('dynamicDescription')}</p>

                    <div className="dynamic-media-container">
                        <div className="button-overlay">
                            {Object.keys(buttonLabels).map((key) => (
                                <button
                                    key={key}
                                    className={`device-button ${activeButton === key ? "active" : "inactive"}`}
                                    onClick={() => setActiveButton(key)}
                                >
                                    <span className={`button-main ${activeButton === key ? "active-main" : ""}`}>
                                        {buttonLabels[key].main}
                                    </span>
                                    {activeButton === key && (
                                        <span className="button-detail">
                                            - {t(buttonLabels[key].detail)}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {elements[activeButton]}

                        <div className="text-overlay">
                            <h3 className="dynamic-title-end">{t(descriptions[activeButton].title)}</h3>
                            <p className="dynamic-description-end">{t(descriptions[activeButton].description)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Transformation />
            <ProteoSection />
            <SolutionSection />
        </div>
    );
};

export default Devices;
