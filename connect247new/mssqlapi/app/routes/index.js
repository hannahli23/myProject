

const express = require('express');
var logger = require('winston');
var login = require('./login');

var fee = require('./fee');
var msdbbyinstance = require('./msdbbyinstance');
var lct = require('./lct');
var pkgQu = require('./pkgQuestion');
//   var pkgQu = require('./lct');
//  var pkgQu = require('./pkgQuestion');
var register = require('./register');

logger.info('Routes initialized');

module.exports = function(app){
    console.log('Got Routes');
    app.use('/mssqlapi/msdbbyinstance', msdbbyinstance);
    app.use('/mssqlapi/lct', lct);
    app.use('/mssqlapi/register', register);
    app.use('/mssqlapi/lct/login', login);
    //  app.use('/api/pkgQu', pkgQu);
      app.use('/api/pkgQu', pkgQu);
  
     return app;
}



