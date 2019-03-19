var Promise = require('promise');
const express = require('express')
var logger = require('winston');
const mssql = require('mssql');
const config = require('../../config');
let dbconfig = config.dbconfig;

var storedProcedure = "COC_DeletCOCdbinfo"; // Full name of stored procedure

module.exports = function(req, res, next) {
         logger.debug('DeletCOCdbinfo is starting');

            var reqBody = req.body;
            var reqParams = req.params;

        return new Promise(function (resolve, reject){
             console.log('C:\tech\mssqlapi\app\routes\msdbbyinstance\deleteDBinfo.js Called')
            //  console.log('get req body is '+ reqBody.instanceName)
            //  console.log('get req para is '+ reqParams.dbName)

       mssql.connect(dbconfig).then(pool => {
            
             console.log('get req para is 2 '+ reqParams.db_pk)

             return pool.request()
                 .input('db_pk', mssql.VarChar, reqParams.db_pk)
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

