var Promise = require('promise');
const express = require('express')
var logger = require('winston');
const mysql = require('promise-mysql');
const config = require('../../config');
// let dbconfig = config.dbconfig;
let dbconfig = config.dbconfig2;

// var sql = 'SELECT * FROM city';
var sql ="CALL GetQuestionPkg()"; // Full name of stored procedure

module.exports = function(req, res, next) {
         logger.debug('CALL GetQuestionPkg is starting');
         var reqBody = req.body;
         var reqParams = req.params;

          var pool  = mysql.createPool({
            connectionLimit : 10,
            host            : 'localhost',
            user            : 'root',
            password        : 'test',
            database        : 'fpp'
        });

      //  var pool  = mysql.createPool(dbconfig);

          
 return new Promise(function (resolve, reject){ 
            // var pool  = mysql.createPool(dbconfig);
      pool.getConnection(function(err, connection) {
         console.log('get req AMS post body is ');
			if (err) {
				return reject(err);
			}
			
			connection.query(sql, function(err, results, fields) {
        
				if (err) {
					return reject(err);
				}
				console.log('result from stored procedure is ',results[0][1]); 
                  //     
                     res.send(results[0]);
                        // res.send(fields);
                        //  resolve(result.recordsets[0]);
                        //  res.send(result.recordsets[0]);
				
 
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
// const mysql = require('mysql');
// const config = require('../../config');
// let dbconfig = config.dbconfig;

// var storedProcedure = "CALL getAllcity()"; // Full name of stored procedure

// module.exports = function(req, res, next) {
//          logger.debug('CALL getAllcity is starting');

//             var reqBody = req.body;
//             var reqParams = req.params;
//             // var pool  = mysql.createPool(dbconfig);
//             var pool  = mysql.createPool({
//             connectionLimit : 10,
//             host            : 'localhost',
//             user            : 'root',
//             password        : 'test',
//             database        : 'world'
//         });


//     pool.getConnection(function(err, connection) { 
//         // Use the connection
//         var sql = 'CALL getAllcity()'; 
//         connection.query(sql, function (error, results, fields) {
//             // And done with the connection.
//             console.log('connected as id ' + connection.threadId);
//             connection.release();
        
//             // Handle error after the release.
//             if (error) throw error;
//             console.log('result from stored procedure is ',results[0][1]); 
//             res.send(results[0]);
//             // Don't use the connection here, it has been returned to the pool.
//         });
//         });
// }


