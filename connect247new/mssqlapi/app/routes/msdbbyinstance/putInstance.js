// const sqlInstanceRepo = require('../../repo/sqlInstance');

// module.exports = function(req, res, next){
//         // get query parameters from request
//         var body = req.body;
//         // var user = req.user;
//         var dbName = req.params.dbName

//         // console.log(id);

//         modelObj = {
//             p_instanceName: body.instanceName,
//             p_dbName: dbName
           
//         }

       
//             sqlInstanceRepo.put(modelObj).then(response =>{
//                 console.log('PUT request succeed here');
//                 res.status(200).send(response)   
//             }).catch(err => {
//                 console.log('PUT request failed here');
//                 res.status(500).send(err)
//             });
        
       
//     }

var Promise = require('promise');
const express = require('express')
var logger = require('winston');
const mssql = require('mssql');
const config = require('../../config');
let dbconfig = config.dbconfig;

var storedProcedure = "dbo.COC_Putcocdbinfo"; // Full name of stored procedure

module.exports = function(req, res, next) {
         logger.debug('putInstance is starting');

            var reqBody = req.body;
            var reqParams = req.params;

        return new Promise(function (resolve, reject){
             console.log('C:\tech\mssqlapi\app\repo\sqlInstance\putDBbyInstance.js Called')
            //  console.log('get req body is '+ reqBody.instanceName)
            //  console.log('get req para is '+ reqParams.dbName)

       mssql.connect(dbconfig).then(pool => {
            console.log('get req body is 2 '+ reqBody.instanceName)
             console.log('get req para is 2 '+ reqParams.dbName)

             return pool.request()
                 .input('instanceName', mssql.VarChar, reqBody.instanceName)
                //   .input('dbName', mssql.VarChar, reqBody.dbName)
                //  .input('instanceName', mssql.VarChar, "NewInstance15")
                 .input('dbName', mssql.VarChar, reqParams.dbName)
                //  .input('instanceName', mssql.VarChar, "insName1")
                //  .input('dbName', mssql.VarChar, "dbNameTEST1")
                      // .output('output_parameter', sql.VarChar(50))
                  .execute(storedProcedure)
                   
                    }).then(result => {
                        console.log("result impacted" + result.rowsAffected);
                        res.send(result.rowsAffected);
                        mssql.close();
                    }).catch(err => {
                        console.log(err);
                        res.status(500).send(err);
                        reject(Error(err.message));
                        mssql.close();
                    // ... error checks
                        })

                    mssql.on('error', err => {
                        reject(Error(err.message));
                        mssql.close();
                        
                    // ... error handler
                    })
   
  });
}

