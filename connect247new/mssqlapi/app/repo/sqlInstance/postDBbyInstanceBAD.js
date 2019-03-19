var Promise = require('promise');
const express = require('express')
var logger = require('winston');
const mssql = require('mssql');
const config = require('../../config');
let dbconfig = config.dbconfig;

var storedProcedure = "dbo.COC_Postcocdbinfo"; // Full name of stored procedure

module.exports = function(updatedFee){
        console.log(dbconfig);
        //  var reqParams = req.params;
       

        return new Promise(function (resolve, reject){
             console.log('C:\tech\mssqlapi\app\repo\sqlInstance\postDBbyInstance.js Called')


       mssql.connect(dbconfig).then(pool => {
             return pool.request()
                 .input('instanceName', mssql.VarChar, "insNamepostiNSERT6")
                //  .input('dbName', mssql.VarChar, reqParams)
                 .input('dbName', mssql.VarChar, "db1")
                      // .output('output_parameter', sql.VarChar(50))
                  .execute(storedProcedure)
                   
                    }).then(result => {
                        console.log(result.rowsAffected);
                   
                    }).catch(err => {
                        console.log(err);
                        reject(Error(err.message));
                    // ... error checks
                        })

                    mssql.on('error', err => {
                        reject(Error(err.message));
                    // ... error handler
                    })
   
  });
}