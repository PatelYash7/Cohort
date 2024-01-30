const jwt = require('jsonwebtoken');


function adminMiddleware(req, res, next) {
    
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];
    

}

module.exports = adminMiddleware;