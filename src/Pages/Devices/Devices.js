import React, { useState, useEffect } from "react";
import "./Devices.css";
import { useLanguage } from "../../LanguageContext";
import Button from "../../components/Buttons/Button";
import Transformation from "./Transformation";
import ProteoSection from "./ProteoSection";
import SolutionSection from "./SolutionSection";
import MercurioSection from "./MercurioSection";
import TransformationMercurio from "./TransformationMercurio";

const Devices = () => {
    const { t } = useLanguage();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeButton, setActiveButton] = useState("COM");
    const [isFinalPosition, setIsFinalPosition] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
            document.title = "Sense View | " + t("devices");
          }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isDarkMode && !isFinalPosition) {
            setTimeout(() => {
                setIsFinalPosition(true);
            }, 2000);
        }
    }, [isDarkMode, isFinalPosition]); 
    
    useEffect(() => {
        const handleScroll = () => {
            if (isMobile) { // Solo para móviles
                const sections = document.querySelectorAll(".dynamic-section");
                const middleOfScreen = window.innerHeight / 2;
                
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    const topBelowMiddle = rect.top > middleOfScreen;
                    const bottomAboveMiddle = rect.bottom < middleOfScreen;
                    
                    // Nueva lógica: Light mode → Dark mode → Light mode
                    if (topBelowMiddle || bottomAboveMiddle) {
                        setIsDarkMode(false); // Light mode en estas condiciones
                    } else {
                        setIsDarkMode(true); // Dark mode cuando esté en el centro
                    }
                });
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

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
                <source src="/08-Devices/videos/Video_Proteo_3COM_V1_Gradient1.mp4" type="video/mp4" />
            </video>
        ) : (
            <img
                key="COM-image"
                src="/08-Devices/Proteo_Interaction/Static_Proteo_COM_&_POW.png"
                alt={t('wifiLteLora')}
                className="dynamic-media"
            />
        ),
        SEN: isDarkMode ? (
            <img
                key="SEN-image"
                src="/08-Devices/videos/Interaction_Proteo_SEN_Gradient.png"
                alt={t('analogDigitalSensors')}
                className={`dynamic-media ${isFinalPosition ? "final-position" : ""}`}
            />
        ) : (
            <img
                key="SEN-image"
                src="/08-Devices/Proteo_Interaction/Static_Proteo_SEN.png"
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
                <source src="/08-Devices/videos/Video_Proteo_2POW_V1_Gradient.mp4" type="video/mp4" />
            </video>
        ) : (
            <img
                key="POW-image"
                src="/08-Devices/Proteo_Interaction/Static_Proteo_COM_&_POW.png"
                alt={t('batteryBarrel')}
                className="dynamic-media"
            />
        ),
    };

    return (
        <div className="dv-body">
            <div className="device-container">
                <video className="background-video" autoPlay loop muted playsInline>
                    <source src="/08-Devices/Headline_Video/Video_Proteo_Assembly1.mp4" type="video/mp4" />
                </video>
                <div className="gradient-overlay"></div>
                <div className="device-content">
                    <p className="device-section-label">{t('deviceSectionLabel')}</p>
                    <h1 className="device-title">{t('deviceTitle')}</h1>
                    <p className="device-description">{t('deviceDescription')}</p>
                    <Button to={"/contact"}>{t('scheduleDemoButton')}<img src="/00-Buttons_Dropdowns_Questions/event.svg" alt="Demo"/></Button>
                </div>
            </div>

            <div 
                className={`dynamic-section ${isDarkMode ? "dark-mode" : "light-mode"}`}
                {...(!isMobile && {
                    onMouseEnter: () => setIsDarkMode(true),
                    onMouseLeave: () => setIsDarkMode(false),
                })}
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
                                            - {buttonLabels[key].detail}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="media-wrapper">
                            {elements[activeButton]}
                        </div>

                        <div className="text-overlay">
                            <h3 className="dynamic-title-end">{descriptions[activeButton].title}</h3>
                            <p className="dynamic-description-end">{descriptions[activeButton].description}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Transformation />
            {/* <ProteoSection /> */}
            <MercurioSection />
            <TransformationMercurio />
            <SolutionSection />
        </div>
    );
};

export default Devices;