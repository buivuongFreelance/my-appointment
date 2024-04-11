"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../config"));
const nodemailer_brevo_transport_1 = __importDefault(require("nodemailer-brevo-transport"));
exports.Transporter = nodemailer_1.default.createTransport(new nodemailer_brevo_transport_1.default({ apiKey: config_1.default.emailApiKey }));
// export const Transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: config.gmail_app_Email,
//         pass: config.emailPass
//     }
// });
