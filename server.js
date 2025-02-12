const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const { firstName, lastName, email, message, phone, company, state, city } = req.body;

  const msg = {
    to: "contacto@senseview.mx",
    from: "contacto@senseview.mx",
    subject: "Nuevo contacto desde el formulario",
    text: `Nombre: ${firstName} ${lastName}\nCorreo: ${email}\nMensaje: ${message}`,
    html: `<p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
           <p><strong>Telefono:</strong> ${phone}</p>
           <p><strong>Empresa:</strong> ${company}</p>
           <p><strong>Estado:</strong> ${state}</p>
           <p><strong>Ciudad:</strong> ${city}</p>
           <p><strong>Correo:</strong> ${email}</p>

           <p><strong>Mensaje:</strong> ${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true, message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ success: false, error: "Error al enviar el correo" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
