var Promise = require('promise');
const express = require('express')
var logger = require('winston');
const mssql = require('mssql');
const config = require('../../config');
let dbconfig = config.dbconfig;

var storedProcedure = "COC_postDBdata"; // Full name of stored procedure

module.exports = function(req, res, next) {
         logger.debug('COC_postDBdata is starting');

            var reqBody = req.body;
            var reqParams = req.params;

        return new Promise(function (resolve, reject){
             console.log('C:\tech\myAPI\mssqlapi\app\routes\msdbbyinstance\postCOCDBdata.js Called')
            //  console.log('get req body is '+ reqBody.instanceName)
            //  console.log('get req para is '+ reqParams.dbName)

       mssql.connect(dbconfig).then(pool => {
            console.log('get req post body is '+ reqBody.instanceName)
             console.log('get req para is  '+  reqBody.dbName)

             return pool.request()
                //  .input('MachineName', mssql.VarChar, reqBody.MachineName)
                 .input('instanceName', mssql.VarChar, reqBody.instanceName)
                 .input('dbName', mssql.VarChar, reqBody.dbName)
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
