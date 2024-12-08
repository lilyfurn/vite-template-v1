const { google } = require("googleapis");
const readline = require("readline");
const fs = require("fs");

// Load client secrets from a local file
const credentials = require("./credentials.json"); // Ensure this file is in the same directory

// Destructure the credentials
const { client_id, client_secret, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// Gmail API scope for sending emails
const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

// Generate an authorization URL
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline", // Ensures we get a refresh token
  scope: SCOPES,
});

console.log("Authorize this app by visiting this URL:", authUrl);

// Create a readline interface to get the authorization code from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the authorization code from the page here: ", (code) => {
  rl.close();

  // Exchange the authorization code for tokens
  oAuth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error("Error retrieving access token", err);
      return;
    }

    console.log("Token received:", token);

    // Save the token to a local file (optional)
    fs.writeFile("token.json", JSON.stringify(token), (err) => {
      if (err) return console.error(err);
      console.log("Token saved to token.json");
    });

    // Log the refresh token explicitly for Firebase Secrets
    console.log("Refresh Token:", token.refresh_token);
  });
});
