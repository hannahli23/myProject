const express = require('express');


module.exports = (function(){

    var api = express.Router();

    api.route('/')
        .get(passport.authenticate('jwt', {session: false}), getFee)

    api.route('/')
        .post(passport.authenticate('jwt', {session: false}), postFee)

    api.route('/:id')
        .put(passport.authenticate('jwt', {session: false}), putFee)

    return api;    

})();