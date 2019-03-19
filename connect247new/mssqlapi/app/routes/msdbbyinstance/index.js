const express = require('express');
const getMSdbbyinstance = require('./getMSdbbyinstance');
const putInstance = require('./putInstance');
const postInstance = require('./postInstance');
const deleteDBinfo = require('./deleteDBinfo');

const putCOCDBbyID = require('./putCOCDBbyID');
const postCOCDBdata = require('./postCOCDBdata');
// const putFee = require('./putFee');



module.exports = (function(){
    console.log('got MSDB Route');
     var api = express.Router();
     api.route('/')
        .get(getMSdbbyinstance)

      
    // api.route('/:dbName')
    //     .put(putInstance)   

    api.route('/')
       .put(putCOCDBbyID) 

    // api.route('/')
    //     .put(putInstance)  

    // api.route('/')
    //     .post(postInstance)  

  api.route('/')
        .post(postCOCDBdata)  
        

    api.route('/:db_pk')
        .delete(deleteDBinfo)       

      return api;  
    
})();
