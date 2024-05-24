const dotenv = require('dotenv').config({});
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const auth = async (req, res, next) => {
    try {
        const passedToken = req.headers['authorization'].split(' ')[1];
        const user = jwt.verify(passedToken, JWT_SECRET);

        if (user) {
            req.authUser = user;
            return next();
        } else {
            return res.status(401).json({
                error: "Unauthorized A",
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            error: "Unauthorized",
        });
    }
}

module.exports = { auth };