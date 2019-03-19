var Promise = require('promise');
const express = require('express')
var logger = require('winston');
const mysql = require('mysql');

const config = require('../../config');
let dbconfig = config.dbconfig;

var sql = "call postNewUser(?,?)";// Full name of stored procedure

module.exports = function(req, res, next) {
         logger.debug('register is starting');

            var reqBody = req.body;
            // var reqParams = req.params;
            console.log('get req post body is '+ reqBody.p_email);
            console.log('get req post body is '+ reqBody.p_password);

            var pool  = mysql.createPool({
            connectionLimit : 10,
            host            : 'localhost',
            user            : 'root',
            password        : 'test',
            database        : 'world'
        });

   return new Promise(function (resolve, reject){ 
            // var pool  = mysql.createPool(dbconfig);
             console.log('get req post body is ');
             
          pool.getConnection(function(err, connection) {
              
		        	if (err) {
                         console.log(err);
                        res.status(500).send(err);
                        reject(Error(err.message));
                        connection.release();
				        return reject(err);
			    }
		

			connection.query(sql,[reqBody.p_email,reqBody.p_password], function(err, results, fields) {
				if (err) {
					return reject(err);
				}
                 console.log('changed ' + results.changedRows + ' rows');
                 console.log(results.insertId);
                 res.send(results.changedRows + '   '+results.insertId);
              
		
                  //Return the connection to the pool
                  connection.release();
                  
                  resolve();
		      	});
          });        

      });  
}
 
       





// var Promise = require('promise');
// const express = require('express')
// var logger = require('winston');
// const mssql = require('mssql');
//  const mongoose = require('mongoose')

// const config = require('../../config');
// let dbconfig = config.dbconfig;

// var storedProcedure = "COC_postDBdata"; // Full name of stored procedure

// module.exports = function(req, res, next) {
//          logger.debug('register is starting');

//             var reqBody = req.body;
//             var reqParams = req.params;
//             console.log(reqBody.email);
//             res.sendStatus(200);

//    mongoose.connect('mongodb://test:test11@ds259820.mlab.com:59820/pssocial',(err) => {
//       if(!err)
//         console.log('connected to mongo')

//    })        
       

