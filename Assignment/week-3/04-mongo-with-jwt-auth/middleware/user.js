const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');



function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];
    const decoded_value = jwt.verify(jwtToken,JWT_SECRET);

    if(decoded_value.username ){
        req.username = decoded_value.username;
        next();
    }else{
        res.status(401).json({
            mes:"InValid Token"
        })
    }
}

module.exports = userMiddleware;