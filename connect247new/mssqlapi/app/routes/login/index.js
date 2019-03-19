const express = require('express');

var loginPost = require('./post');

module.exports = (function(){

    var api = express.Router();

    api.route('/')
    
        .post(loginPost);
    

    return api;

})();