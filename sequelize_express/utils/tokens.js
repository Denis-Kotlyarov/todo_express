const dotenv = require('dotenv').config({});
const jwt = require('jsonwebtoken');

const generateTokens = (payload) => {
    try {
        const { JWT_SECRET, JWT_REFRESH_SECRET } = process.env;
        return {
            access_token: jwt.sign(payload, JWT_SECRET, {
                expiresIn: '1m'
            }),
            refresh_token: jwt.sign(payload, JWT_REFRESH_SECRET, {
                expiresIn: '30d'
            }),
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { generateTokens };