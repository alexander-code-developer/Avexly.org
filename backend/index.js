const express = require('express');
const cors = require('cors');
const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

const app = express();

// --- LOG DE INICIALIZACIÓN ---
console.log('⚡ [INIT] Inicializando aplicación de Express...');

// Middlewares
app.use(cors());
app.use(express.json());

// --- VERIFICACIÓN DE VARIABLES DE ENTORNO EN STARTUP ---
console.log('🔍 [ENV CHECK] Validando variables de entorno:');
console.log('  -> BREVO_API_KEY:', process.env.BREVO_API_KEY ? '✅ Presente' : '❌ MISSING / UNDEFINED');
console.log('  -> EMAIL_RECIBIDOR:', process.env.EMAIL_RECIBIDOR ? `✅ (${process.env.EMAIL_RECIBIDOR})` : '❌ MISSING / UNDEFINED');

// Configuración cliente Brevo
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;
const transactionalEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

const translations = {
    en: {
        adminSubject: "🔔 NEW PROJECT INQUIRY: {name}",
        adminTitle: "New Inquiry Received",
        clientSubject: "We've received your message - Avexly",
        clientHi: "Hello {name},",
        clientBody: "Thank you for reaching out to <strong>Avexly</strong>. Your message has been successfully transmitted to our development team.",
        clientNextStep: "We prioritize quality over speed, yet we aim to respond within 24 hours to discuss how we can bring your vision to life.",
        clientSlogan: "Crafting digital excellence through clean code.",
        clientFooter: "Global Operations • High-Impact Software Solutions",
        successResponse: "Avexly: Emails dispatched successfully"
    },
    es: {
        adminSubject: "🔔 NUEVA SOLICITUD: {name}",
        adminTitle: "Nueva Solicitud de Proyecto",
        clientSubject: "Hemos recibido tu mensaje - Avexly",
        clientHi: "Hola {name},",
        clientBody: "Gracias por contactar con <strong>Avexly</strong>. Hemos recibido tu mensaje correctamente y nuestro equipo técnico ya lo está revisando.",
        clientNextStep: "Priorizamos la calidad en cada respuesta. Un consultor se pondrá en contacto contigo en las próximas 24 horas.",
        clientSlogan: "Innovación y eficiencia en cada línea de código.",
        clientFooter: "Operaciones Globales • Desarrollo de Software de Alto Impacto",
        successResponse: "Avexly: Correos enviados con éxito"
    }
};

// --- RUTA HEALTH CHECK (Diagnóstico rápido en navegador) ---
app.get('/', (req, res) => {
    console.log('📡 [GET /] Petición Health Check recibida');
    res.status(200).json({ status: "online", system: "Avexly Backend Operational" });
});

// --- RUTA PRINCIPAL DE CONTACTO ---
app.post('/api/contact', async (req, res) => {
    console.log('📩 [POST /api/contact] Petición entrante detectada');
    console.log('📦 [PAYLOAD RECIBIDO]:', JSON.stringify(req.body, null, 2));

    const { name, email, message, lang = 'en' } = req.body; 
    const t = translations[lang] || translations.en;

    // Validación de campos obligatorios
    if (!name || !email || !message) {
        console.warn('⚠️ [VALIDATION ERROR] Campos incompletos:', { name: !!name, email: !!email, message: !!message });
        return res.status(400).json({ error: lang === 'es' ? "Faltan campos" : "Missing fields" });
    }

    try {
        // 1. NOTIFICACIÓN INTERNA
        console.log(`📤 [BREVO 1/2] Enviando correo de notificación interna a: ${process.env.EMAIL_RECIBIDOR}...`);
        const adminEmailResult = await transactionalEmailApi.sendTransacEmail({
            subject: t.adminSubject.replace("{name}", name),
            sender: { name: "Avexly Intelligence", email: process.env.EMAIL_RECIBIDOR },
            to: [{ email: process.env.EMAIL_RECIBIDOR }],
            replyTo: { email: email, name: name },
            htmlContent: `
                <div style="background-color: #020617; padding: 40px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #f8fafc; border-radius: 12px;">
                    <div style="border-bottom: 2px solid #1e293b; padding-bottom: 20px; margin-bottom: 20px;">
                        <span style="background: #3b82f6; color: white; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase;">Incoming Lead</span>
                        <h1 style="color: #ffffff; font-size: 28px; margin: 10px 0;">${t.adminTitle}</h1>
                    </div>
                    <p style="color: #94a3b8; font-size: 16px;"><strong>Details:</strong></p>
                    <ul style="list-style: none; padding: 0; color: #e2e8f0;">
                        <li style="margin-bottom: 10px;">👤 <strong>Name:</strong> ${name}</li>
                        <li style="margin-bottom: 10px;">📧 <strong>Email:</strong> ${email}</li>
                    </ul>
                    <div style="background-color: #0f172a; padding: 25px; border-radius: 12px; border: 1px solid #1e293b; color: #cbd5e1; line-height: 1.6;">
                        <p style="margin-top: 0; color: #3b82f6; font-weight: bold;">Message:</p>
                        ${message}
                    </div>
                    <p style="font-size: 12px; color: #475569; margin-top: 30px; text-align: center;">Avexly Internal Notification System</p>
                </div>`
        });
        console.log('✅ [BREVO 1/2 OK] Email Interno enviado:', adminEmailResult?.messageId || 'Respuesta recibida');

        // 2. CONFIRMACIÓN AL CLIENTE
        console.log(`📤 [BREVO 2/2] Enviando correo de confirmación al cliente: ${email}...`);
        const clientEmailResult = await transactionalEmailApi.sendTransacEmail({
            subject: t.clientSubject,
            sender: { name: "Alexander | Avexly", email: process.env.EMAIL_RECIBIDOR },
            to: [{ email: email, name: name }],
            htmlContent: `
                <div style="max-width: 600px; margin: auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
                    <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px; text-align: center; border-radius: 16px 16px 0 0;">
                        <h1 style="color: white; margin: 0; letter-spacing: 4px; font-weight: 900; font-size: 32px;">AVEXLY</h1>
                    </div>
                    <div style="padding: 40px; background: #ffffff; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
                        <h2 style="color: #0f172a; margin-top: 0;">${t.clientHi.replace("{name}", name)}</h2>
                        <p style="font-size: 16px; color: #475569;">${t.clientBody}</p>
                        <p style="font-size: 16px; color: #475569;">${t.clientNextStep}</p>
                        
                        <div style="margin: 40px 0; padding: 25px; border-radius: 12px; background: linear-gradient(to right, #f8fafc, #eff6ff); border: 1px solid #dbeafe; text-align: center;">
                            <p style="font-style: italic; margin: 0; color: #2563eb; font-weight: 500;">"${t.clientSlogan}"</p>
                        </div>

                        <p style="margin-bottom: 0;">Best regards,</p>
                        <p style="margin-top: 5px; font-weight: bold; color: #0f172a;">The Avexly Team</p>
                    </div>
                    <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-radius: 0 0 16px 16px; border: 1px solid #e2e8f0; border-top: none;">
                        <div style="margin-bottom: 15px;">
                            <a href="https://avexly.org" style="color: #3b82f6; text-decoration: none; font-weight: 600; font-size: 14px;">Website</a>
                            <span style="color: #cbd5e1; margin: 0 10px;">•</span>
                            <a href="https://github.com/alexander-code-developer" style="color: #3b82f6; text-decoration: none; font-weight: 600; font-size: 14px;">GitHub</a>
                        </div>
                        <p style="font-size: 12px; color: #94a3b8; margin: 0;">&copy; 2026 Avexly • ${t.clientFooter}</p>
                    </div>
                </div>`
        });
        console.log('✅ [BREVO 2/2 OK] Email Cliente enviado:', clientEmailResult?.messageId || 'Respuesta recibida');

        console.log('🎉 [SUCCESS] Proceso completado con éxito');
        res.status(200).json({ success: true, message: t.successResponse });

    } catch (error) {
        console.error("🔥 [BREVO ERROR FATAL]:", error);
        if (error.response) {
            console.error("📋 Details del error HTTP de Brevo:", {
                status: error.response.status,
                body: error.response.body
            });
        }
        res.status(500).json({ error: "Avexly System Failure", details: error.message });
    }
});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 AVEXLY GLOBAL SYSTEM READY | Port ${PORT}`);
  });
}

module.exports = app;