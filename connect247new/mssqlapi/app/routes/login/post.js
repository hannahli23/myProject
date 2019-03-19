const express = require('express');
const passport = require('passport');
var logger = require('winston');

const config = require('../../config');
const auth = require('../../auth')

module.exports = function(req, res, next){

        console.log('Inside loging post....')
        
        passport.authenticate('ad-login', function(err, user, info){
            if(err){
                logger.error('Error from passport trying to authenticate', JSON.stringify(err));
                return res.status(500).send(err);
            }
            if(!user){
                logger.warn(`Unable to authenticate User using passport`, JSON.stringify(user));
                //logger.info('Body: ', req.body);
                return res.status(401).send(info);
            } else {

                
                // Create a JWT and send it back
                logger.debug(`Creating token for ${user.username}`);

                var token = auth.createToken(user, req);

                delete user['password'];
                res.status(200).send({user: user, token: token});
            }

        })(req, res, next);

    }