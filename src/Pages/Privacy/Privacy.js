import { useState } from "react";
import React from "react";
import "./Privacy.css";
import { useLanguage } from "../../LanguageContext";



const Privacy = () => {
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
      title: "Cookies",
      content: (
        <p>
          {t("cookies_notice")}
        </p>
      ),
    },
    {
      title: t("personal_info_collection_title"),
      content: (
        <>
          <p>
            {t("personal_info_collection_content")}
          </p>
        </>
      ),
    },
    {
      title: t("personal_info_usage_title"),
      content: (
        <>
          <p>
            {t("personal_info_usage_content")}
          </p>
          <ul>
            {t("personal_info_usage_list").map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t("data_collection_title"),
      content: (
        <>
          <p>{t("data_collection_content")}</p>
          <p>
            <strong>{t("device_generated_data_title")}</strong> {t("device_generated_data_content")}
          </p>
        </>
      ),
    },
    
    {
      title: t("data_usage_title"),
      content: (
        <>
          <p>{t("data_usage_content")}</p>
          <ul>
            {t("data_usage_list").map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
          <p>{t("additional_data_usage_content")}</p>
          <ul>
            {t("additional_data_usage_list").map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t("personal_info_sharing_title"),
      content: (
        <>
          <p>{t("personal_info_sharing_content")}</p>
          <ul>
            {t("personal_info_sharing_list").map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
          <p>{t("personal_info_sharing_notice")}</p>
        </>
      ),
    },
    {
      title: t("personal_info_security_title"),
      content: (
        <>
          <p dangerouslySetInnerHTML={{ __html: t("personal_info_security_content") }} />
        </>
      ),
    },
    
    {
      title: t("personal_info_choice_title"),
      content: (
        <>
          <p dangerouslySetInnerHTML={{ __html: t("personal_info_choice_content") }} />
        </>
      ),
    },
    
    {
      title: t("personal_info_update_title"),
      content: (
        <>
          <p>{t("personal_info_update_content")}</p>
        </>
      ),
    },
    {
      title: t("external_links_title"),
      content: (
        <>
          <p>{t("external_links_content")}</p>
        </>
      ),
    },
    {
      title: t("success_cases_title"),
      content: (
        <>
          <p dangerouslySetInnerHTML={{ __html: t("success_cases_content") }} />
        </>
      ),
    },
    {
      title: t("policy_changes_title"),
      content: (
        <>
          <p dangerouslySetInnerHTML={{ __html: t("policy_changes_content") }} />
        </>
      ),
    },
    
  ];

  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>{t("privacyPolicyTitle")}</h1>
        <p>{t("lastUpdated")}</p>
      </header>

      <div className="privacy-content">
        <p>
          {t("privacyText")}
        </p>
        {sections.map((section, index) => {
          const isExpanded = openSections[index];

          return (
            <section key={index} className="privacy-section">
              <h2 onClick={() => toggleSection(index)} className="privacy-title">
                {section.title}
                <img
                  className="faq-icon"
                  src={
                    isExpanded
                      ? "/00-Buttons_Dropdowns_Questions/remove.svg"
                      : "/00-Buttons_Dropdowns_Questions/add.svg"
                  }
                  alt={isExpanded ? "Colapsar" : "Expandir"}
                />
              </h2>
              {isExpanded && <div className="privacy-text">{section.content}</div>}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Privacy;
