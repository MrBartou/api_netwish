const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

module.exports = (req, res, next) => {
    const authHeader = req.get['Authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({message: "Invalid request, token is missing hi!"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({message: "Invalid token"});
        }
        req.user = user;
        next();
    })
}
