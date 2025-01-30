import React from 'react';
import './ProteoSection.css';
import { useLanguage } from "../../LanguageContext";  

const ProteoSection = () => {
    const { t } = useLanguage();  

    return (
        <div className="proteo-section">
            <div className="proteo-content">
                <h2>{t('flexibleMounting')}</h2>
                <p>{t('flexibleMountingDescription')}</p>
                <h2>{t('compatibleWithVariousSensors')}</h2>
                <p>{t('sensorsDescription')}</p>
            </div>
            <div className="proteo-image-container">
                <img src="/08-Devices/Proteo Transparente v4.webp" alt={t('compatibleWithVariousSensors')} />
            </div>
        </div>
    );
};

export default ProteoSection;
