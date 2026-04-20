const express = require('express');
const cors = require('cors');
const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// --- CONFIGURACIÓN DE BREVO ---
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;
const transactionalEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

// --- DICCIONARIO DE TRADUCCIONES ---
const translations = {
    es: {
        adminSubject: "🔥 NUEVO LEAD: {name} está interesado",
        adminTitle: "🚀 Nueva Solicitud de Proyecto",
        clientSubject: "Confirmación de Recepción - Avexly",
        clientHi: "¡Hola, {name}!",
        clientBody: "Gracias por contactar con <strong>Avexly</strong>. Hemos recibido tu mensaje correctamente y nuestro equipo ya está analizando tu solicitud.",
        clientNextStep: "Nos tomamos muy en serio cada colaboración. Un consultor se pondrá en contacto contigo en las próximas 24 horas.",
        clientSlogan: "Innovación y eficiencia en cada línea de código.",
        clientFooter: "México • Desarrollo de Software de Alto Impacto",
        successResponse: "Avexly: Correos enviados con éxito"
    },
    en: {
        adminSubject: "🔥 NEW LEAD: {name} is interested",
        adminTitle: "🚀 New Project Request",
        clientSubject: "Receipt Confirmation - Avexly",
        clientHi: "Hello, {name}!",
        clientBody: "Thank you for reaching out to <strong>Avexly</strong>. We have successfully received your message and our team is already analyzing your request.",
        clientNextStep: "We take every collaboration seriously. A consultant will contact you within the next 24 hours to discuss your project.",
        clientSlogan: "Innovation and efficiency in every line of code.",
        clientFooter: "Mexico • High-Impact Software Development",
        successResponse: "Avexly: Emails sent successfully"
    }
};

app.post('/api/contact', async (req, res) => {
    const { name, email, message, lang = 'es' } = req.body; // El front envía 'es' o 'en'
    const t = translations[lang] || translations.es; // Idioma por defecto: español

    if (!name || !email || !message) {
        return res.status(400).json({ error: lang === 'es' ? "Faltan campos" : "Missing fields" });
    }

    try {
        // 1. NOTIFICACIÓN INTERNA
        await transactionalEmailApi.sendTransacEmail({
            subject: t.adminSubject.replace("{name}", name),
            sender: { name: "Avexly System", email: process.env.EMAIL_RECIBIDOR },
            to: [{ email: process.env.EMAIL_RECIBIDOR }],
            replyTo: { email: email, name: name },
            htmlContent: `
                <div style="background-color: #020617; padding: 40px; font-family: sans-serif; color: #f8fafc; border-radius: 20px;">
                    <h1 style="color: #3b82f6; font-size: 24px; border-bottom: 1px solid #1e293b;">${t.adminTitle}</h1>
                    <p>Cliente: ${name}</p>
                    <p>Email: ${email}</p>
                    <div style="background-color: #0f172a; padding: 20px; border-radius: 12px; border: 1px solid #1e293b;">
                        <p>${message}</p>
                    </div>
                </div>`
        });

        // 2. CONFIRMACIÓN AL CLIENTE (Dinamizada con el diccionario)
        await transactionalEmailApi.sendTransacEmail({
            subject: t.clientSubject,
            sender: { name: "Avexly", email: process.env.EMAIL_RECIBIDOR },
            to: [{ email: email, name: name }],
            htmlContent: `
                <div style="max-width: 600px; margin: auto; font-family: sans-serif; color: #334155; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
                    <div style="background: linear-gradient(to right, #2563eb, #10b981); padding: 30px; text-align: center;">
                        <h1 style="color: white; margin: 0;">AVEXLY</h1>
                    </div>
                    <div style="padding: 40px;">
                        <h2>${t.clientHi.replace("{name}", name)}</h2>
                        <p>${t.clientBody}</p>
                        <p>${t.clientNextStep}</p>
                        <div style="margin: 30px 0; padding: 20px; border-left: 4px solid #10b981; background-color: #f8fafc;">
                            <p style="font-style: italic; margin: 0;">"${t.clientSlogan}"</p>
                        </div>
                    </div>
                    <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 11px; color: #94a3b8;">
                        &copy; 2026 Avexly • ${t.clientFooter}
                    </div>
                </div>`
        });

        res.status(200).json({ success: true, message: t.successResponse });

    } catch (error) {
        res.status(500).json({ error: "Avexly System Failure" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 AVEXLY GLOBAL SYSTEM READY | Port ${PORT}`);
});