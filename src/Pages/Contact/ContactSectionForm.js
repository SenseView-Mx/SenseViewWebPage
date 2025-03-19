import React, { useState } from "react";
import CalendlyComponent from "../../components/Calendly/CalendlyComponent";
import ContactCard from "../../components/ContactCard/ContactCard";
import { useLanguage } from "../../LanguageContext";
import "./ContactSectionForm.css";

const MEXICO_STATES = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
  "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo",
  "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca",
  "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora",
  "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

const ContactSectionForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    state: "",
    city: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setStatusMessage("El correo es obligatorio ❌");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setStatusMessage("Correo enviado con éxito ✅");
      } else {
        setStatusMessage("Error al enviar el correo ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Error en la solicitud ❌");
    }
  };

  return (
    <div className="contact-section-container">
      <ContactCard
        title={t("alignServicesTitle")}
        email="contacto@senseview.mx"
        phone="+52 331 819 3343"
        buttonText={t("howItWorks")}
        buttonIcon="/00-Buttons_Dropdowns_Questions/arrow_forward_ios_white.png"
        variantButton="primary"
        toLink="/how-it-works"
        buttonAction={() => console.log("Redirigir a más métodos de contacto")}
      />

      <div className="content-right">
        <div className="calendly-section">
          <h1 className="extra-section-title">
            {t("contactExtraSectionTitle")}<span>{t("contactExtraSectionTitle2")}</span>
          </h1>
          <p className="extra-section-description">{t("contactExtraSectionDescription")}</p>
          <CalendlyComponent />
        </div>
        <div className="form-section">
          <h1>{t("contactFormTitle")}</h1>
          <p>{t("contactFormDescription")}</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div>
                <h3>{t("firstName")}</h3>
                <input placeholder={t("firstName")} type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div>
                <h3>{t("lastName")}</h3>
                <input placeholder={t("lastName")} type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <div>
                <h3>{t("email")}</h3>
                <input placeholder="email@domain.net" type="email" name="email" required value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <h3>{t("phone")}</h3>
                <input placeholder="(000) 000 0000" type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group-single-input">
              <div>
                <h3>{t("company")}</h3>
                <input placeholder={"  " + t("company")} type="text" name="company" value={formData.company} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group select-group">
              <div>
                <h3>Estado</h3>
                <select name="state" value={formData.state} onChange={handleChange} required>
                <option value="" disabled>
                  <span className="custom-text-color">{t("selectState")}</span>
                </option>
                {MEXICO_STATES.map((state) => (
                  <option key={state} value={state}>
                    <span className="custom-text-color">{state}</span>
                  </option>
                ))}
                </select>
              </div>
              <div>
                <h3>{t("city")}</h3>
                <input placeholder={t("city")} type="text" name="city" value={formData.city} onChange={handleChange}  />
              </div>
            </div>

            <div>
              <h3>{t("message")}</h3>
              <textarea name="message" rows="4" required value={formData.message} onChange={handleChange} />
            </div>

            <button type="submit" className="submit-button">{t("send")}</button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionForm;
