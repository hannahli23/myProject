var Promise = require('promise');
const express = require('express')
var logger = require('winston');
const mssql = require('mssql');
const config = require('../../config');
let dbconfig = config.dbconfig;

var storedProcedure = "dbo.COC_updateCOCDB"; // Full name of stored procedure

module.exports = function(req, res, next) {
         logger.debug('dbo.COC_updateCOCDB is starting');

            var reqBody = req.body;
            var reqParams = req.params;

        return new Promise(function (resolve, reject){
             console.log('C:\tech\myAPI\mssqlapi\app\routes\msdbbyinstance\putCOCDBbyID.js Called')
            //  console.log('get req body is '+ reqBody.instanceName)
            //  console.log('get req para is '+ reqParams.dbName)

       mssql.connect(dbconfig).then(pool => {
            console.log('get req body is 2 '+ reqBody.COCDBID)
             console.log('get req para is 2 '+ reqBody.dbName)

             return pool.request()
                 .input('COCDBID', mssql.VarChar, reqBody.COCDBID)
                //   .input('dbName', mssql.VarChar, reqBody.dbName)
                //  .input('instanceName', mssql.VarChar, "NewInstance15")
                 .input('dbName', mssql.VarChar, reqBody.dbName)
                //  .input('instanceName', mssql.VarChar, "insName1")
                //  .input('dbName', mssql.VarChar, "dbNameTEST1")
                      // .output('output_parameter', sql.VarChar(50))
                  .execute(storedProcedure)
                   
                    }).then(result => {
                        console.log("result impacted" + result.rowsAffected);
                        // console.log("result impacted" + result.rowsAffected);
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

