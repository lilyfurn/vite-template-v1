const { onRequest } = require("firebase-functions/v2/https");
const { google } = require("googleapis");
const admin = require("firebase-admin");

const { defineSecret } = require("firebase-functions/params");
const GOOGLE_OAUTH_CREDENTIALS = defineSecret("GOOGLE_OAUTH_CREDENTIALS");
const GOOGLE_OAUTH_TOKEN = defineSecret("GOOGLE_OAUTH_TOKEN");
const CORS_ORIGIN = defineSecret("CORS_ORIGIN");
const CORS_ORIGIN_DEV = defineSecret("CORS_ORIGIN_DEV");

if (!admin.apps.length) {
  admin.initializeApp();
}

exports.handleContactFormSubmission = onRequest(
  {
    secrets: [
      GOOGLE_OAUTH_CREDENTIALS.name,
      GOOGLE_OAUTH_TOKEN.name,
      CORS_ORIGIN.name,
      CORS_ORIGIN_DEV.name,
    ],
  },
  async (req, res) => {
    // Determine the correct CORS origin based on the environment
    const isDev = process.env.FUNCTIONS_EMULATOR === "true"; // Emulator indicates dev mode
    const corsOrigin = isDev ? CORS_ORIGIN_DEV.value() : CORS_ORIGIN.value();

    // Set the CORS headers
    res.set("Access-Control-Allow-Origin", corsOrigin);
    res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Credentials", "true");

    if (req.method === "OPTIONS") {
      return res.status(204).send("");
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.error("Missing required fields: name, email, or message.");
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    try {
      const credentialsJSON = GOOGLE_OAUTH_CREDENTIALS.value();
      const tokenJSON = GOOGLE_OAUTH_TOKEN.value();

      // Parse credentials and token
      const credentials = JSON.parse(credentialsJSON);
      const token = JSON.parse(tokenJSON);

      const { client_secret, client_id, redirect_uris } = credentials.installed;
      const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
      );

      oAuth2Client.setCredentials(token);
      const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

      const adminEmail = "andrew@lilyfurn.com"; // Replace with your admin email
      const emailBody = `
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #4A90E2;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        </body>
        </html>
      `;

      const fromEmail = "andrew@lilyfurn.com"; // Replace with your sender email

      const rawMessage = Buffer.from(
        `From: "Contact Form Laibel Labs" <${fromEmail}>\n` +
          `To: ${adminEmail}\n` +
          `Subject: New Contact Form Submission\n` +
          `MIME-Version: 1.0\n` +
          `Content-Type: text/html; charset=UTF-8\n\n` +
          `${emailBody}`
      )
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");

      console.log("Sending contact form email...");

      await gmail.users.messages.send({
        userId: "me",
        resource: { raw: rawMessage },
      });

      console.log("Contact form email sent successfully.");

      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send email.",
      });
    }
  }
);
