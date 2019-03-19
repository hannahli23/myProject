const sqlInstanceRepo = require('../../repo/sqlInstance');
var logger = require('winston');

module.exports = function(req, res, next){
    // console.log(res);
        // get query parameters from request
        sqlInstanceRepo.get()
            .then(response =>{
               console.log('got data response')
                  
                res.status(200).send(response)   
            }).catch(err => {
                console.log('GET request failed here')
                res.status(500).send(err)
            });
       
    }