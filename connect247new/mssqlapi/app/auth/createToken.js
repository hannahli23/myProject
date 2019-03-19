var jwt = require('jwt-simple')
const moment = require('moment');
var logger = require('winston');
const tokenTimeout = require('../config').tokenTimeout;

const jwtSecret = require('../config').jwtSecret

module.exports = function(user, req){

    const expires = moment().add(tokenTimeout, 'minutes').valueOf();

    var payload = {
        iss: req.hostname,
        exp: expires / 1000,
        username: user.username,
        adLogin: user.adLogin,
        displayName: user.displayName,
        mail: user.email,
        roles: user.roles
    }
    var expireDate = new Date(parseInt(expires));
    logger.info(`Created token for ${user.displayName}.`, {
        createdFrom: req.hostname,
        expires: expireDate,
        mail: user.email
    });
    return jwt.encode(payload, jwtSecret);


}