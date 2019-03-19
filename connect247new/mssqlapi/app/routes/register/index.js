const express = require('express');
const register = require('./register');



module.exports = (function(){
    console.log('post register');
     var api = express.Router();
   

  api.route('/')
        .post(register)  
        
     

      return api;  
    
})();