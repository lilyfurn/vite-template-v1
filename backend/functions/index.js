const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const { handleContactFormSubmission } = require("./handleContactFormSubmission");
exports.handleContactFormSubmission = handleContactFormSubmission;