const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV;
const FRONTEND_URL = process.env.FRONTEND_URL;

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PASS = process.env.EMAIL_PASS;

const CLOUDINARY_URL = process.env.CLOUDINARY_URL;

module.exports = {
    PORT,
    MONGO_URI,
    JWT_SECRET,
    NODE_ENV,
    FRONTEND_URL,
    EMAIL_PASS,
    EMAIL_USER,
    EMAIL_HOST,
    CLOUDINARY_URL,
}