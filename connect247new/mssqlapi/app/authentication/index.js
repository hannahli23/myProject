const ActiveDirectory = require('activedirectory');
var logger = require('winston');

const config = require('../config').ad;

module.exports = function(username, password){

    var ad = new ActiveDirectory(config);

    logger.info('Ad Config: ', config);
    logger.info(`Username: ${username}`);

    ad.authenticate(username, password, function(err, auth) {
        if (err) {
            logger.error('ERROR: '+JSON.stringify(err));
            return;
        }
        
        if (auth) {
            logger.info('Authenticated!');
        }
        else {
            logger.warn('Authentication failed!');
        }
    });

};