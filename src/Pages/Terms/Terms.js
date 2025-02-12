import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-container">
      <header className="terms-header">
        <h1>Términos y condiciones</h1>
        <p>
          Estos Términos y Condiciones establecen las reglas que rigen el uso de
          nuestro sitio web y servicios. Al acceder o utilizar nuestro sitio,
          acepta cumplir con estos términos.
        </p>
      </header>

      <div className="terms-content">
        <section>
          <h2>Bienvenido a Sense View</h2>
          <p>
            En Sense View estamos comprometidos con impulsar la transformación y
            optimización de tus procesos industriales. Al acceder, interactuar o
            navegar en nuestra Plataforma, usted acepta estos Términos y
            Condiciones.
          </p>
        </section>

        <section>
          <h2>Definiciones</h2>
          <ul>
            <li>
              <strong>Credenciales:</strong> Datos únicos (usuario y
              contraseña) para acceder a la plataforma.
            </li>
            <li>
              <strong>Sense View:</strong> Empresa responsable de los servicios.
            </li>
            <li>
              <strong>Plataforma:</strong> Sitio web y aplicaciones móviles de
              Sense View.
            </li>
            <li>
              <strong>Equipo:</strong> Dispositivos con sensores para analizar
              datos en tiempo real.
            </li>
          </ul>
        </section>

        <section>
          <h2>Servicios</h2>
          <p>
            Sense View proporciona hardware y software avanzados para medir y
            analizar información clave en tiempo real.
          </p>
        </section>

        <section>
          <h2>Registro y Uso de la Plataforma</h2>
          <p>
            Para acceder a los servicios, el usuario debe registrarse con datos
            verídicos y seguros.
          </p>
        </section>

        <section>
          <h2>Propiedad Intelectual</h2>
          <p>
            Sense View es titular exclusivo de patentes, marcas y derechos de
            propiedad intelectual. Está prohibido el uso no autorizado.
          </p>
        </section>

        <section>
          <h2>Modificaciones</h2>
          <p>
            Sense View puede modificar estos Términos y Condiciones en cualquier
            momento y notificará a los usuarios a través de la plataforma.
          </p>
        </section>

        <section>
          <h2>Jurisdicción</h2>
          <p>
            Estos términos se rigen por las leyes de los Estados Unidos
            Mexicanos y cualquier disputa será resuelta en los tribunales del
            Estado de Jalisco.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
