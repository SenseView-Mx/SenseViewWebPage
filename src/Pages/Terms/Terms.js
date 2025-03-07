import { useState } from "react";
import React from "react";
import "./Terms.css";
import { useLanguage } from "../../LanguageContext";


const Terms = () => {
  const { t } = useLanguage();  
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  const sections = [
    {
      title: t("welcome_title"),
      content: (
        <>
          <p>{t("welcome_content")}</p>
          <p>{t("welcome_terms")}</p>
          <p>{t("welcome_terms2")}</p>

        </>
      ),
    },
    {
      title: t("definitions_title"),
      content: (
        <>
          {t("definitions_content").map((item, index) => (
            <p key={index}>
              <strong>{item.term}:</strong> {item.definition}
            </p>
          ))}
        </>
      ),
    },
    {
      title: t("services_title"),
      content: (
        <p>{t("services_content")}</p>
      ),
    },
    {
      title: t("platform_registration_title"),
      content: (
        <>
          <h3>{t("platform_registration_section")}</h3>
          <p>{t("platform_registration_content")}</p>
          <ul>
            {t("platform_registration_steps").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t("platform_registration_acceptance")}</p>
    
          <h3>{t("platform_access_section")}</h3>
          <p>{t("platform_access_content")}</p>
          <p>{t("platform_access_reset")}</p>
          <ul>
            {t("platform_access_reset_steps").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
    
          <h3>{t("platform_responsibility_section")}</h3>
          <p>{t("platform_responsibility_content")}</p>
          <p>{t("platform_restrictions")}</p>
        </>
      ),
    },
    
    {
      title: t("equipment_use_title"),
      content: (
        <>
          <h3>{t("equipment_ownership_section")}</h3>
          {t("equipment_ownership_content").map((item, index) => (
            <p key={index}>{item}</p>
          ))}
    
          <h3>{t("equipment_usage_conditions_section")}</h3>
          {t("equipment_usage_conditions_content").map((item, index) => (
            <p key={index}>{item}</p>
          ))}
    
          <h3>{t("equipment_return_section")}</h3>
          <p>{t("equipment_return_content")}</p>
        </>
      ),
    },
    
    {
      title: t("contractual_relationship_title"),
      content: (
        <>
          <p>{t("contractual_relationship_content")}</p>
          <p>{t("contractual_relationship_includes")}</p>
          <ul>
            {t("contractual_relationship_list").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t("contractual_relationship_final")}</p>
        </>
      ),
    },
    
    {
      title: t("cloud_services_title"),
      content: (
        <>
          <h3>{t("cloud_storage_options_section")}</h3>
          <p>{t("cloud_storage_options_intro")}</p>
          <ol>
            {t("cloud_storage_options_list").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
    
          <h3>{t("cloud_data_responsibility_section")}</h3>
          <p>{t("cloud_data_responsibility_content")}</p>
        </>
      ),
    },
    
    {
      title: t("fees_payments_title"),
      content: (
        <>
          <h3>{t("cost_structure_section")}</h3>
          <ul>
            {t("cost_structure_list").map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
    
          <h3>{t("non_payment_section")}</h3>
          <p>{t("non_payment_content")}</p>
        </>
      ),
    },
    {
      title: t("confidentiality_title"),
      content: (
        <>
          <h3>{t("data_protection_section")}</h3>
          <p>{t("data_protection_content")}</p>
    
          <h3>{t("confidential_information_section")}</h3>
          <p>{t("confidential_information_content")}</p>
        </>
      ),
    },
    {
      title: t("electronic_acceptance_title"),
      content: (
        <p>{t("electronic_acceptance_content")}</p>
      ),
    },
    {
      title: t("intellectual_property_title"),
      content: (
        <p>{t("intellectual_property_content")}</p>
      ),
    },
    {
      title: t("modifications_title"),
      content: (
        <p>{t("modifications_content")}</p>
      ),
    },
    
    {
      title: t("liability_limitation_title"),
      content: (
        <>
          <p>{t("liability_limitation_intro")}</p>
          <ul>
            {t("liability_limitation_list").map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t("jurisdiction_title"),
      content: (
        <>
          <p>{t("jurisdiction_content")}</p>
          <p>{t("jurisdiction_commitment")}</p>
        </>
      ),
    },
    
  ];

  return (
    <div className="terms-container">
     <header className="terms-header">
      <h1>{t("terms_conditions_header")}</h1>
      <p>{t("last_updated")}</p>
    </header>


      <div className="terms-content">
        {sections.map((section, index) => {
          const isExpanded = openSections[index];

          return (
            <section key={index} className="terms-section">
              <h2 onClick={() => toggleSection(index)} className="terms-title">
                {section.title}
                <img
                  className="faq-icon"
                  src={
                    isExpanded
                      ? "/00-Buttons, Dropdowns & Questions/remove.svg"
                      : "/00-Buttons, Dropdowns & Questions/add.svg"
                  }
                  alt={isExpanded ? "Colapsar" : "Expandir"}
                />
              </h2>
              {isExpanded && <div className="terms-text">{section.content}</div>}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Terms;