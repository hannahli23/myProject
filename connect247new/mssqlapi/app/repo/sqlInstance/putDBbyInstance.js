var Promise = require('promise');
const express = require('express')
var logger = require('winston');
const mssql = require('mssql');
const config = require('../../config');
let dbconfig = config.dbconfig;

var storedProcedure = "dbo.COC_Putcocdbinfo"; // Full name of stored procedure

module.exports = function(updatedInstance){
        console.log(updatedInstance);

       

        return new Promise(function (resolve, reject){
             console.log('C:\tech\mssqlapi\app\repo\sqlInstance\putDBbyInstance.js Called')


       mssql.connect(dbconfig).then(pool => {
             return pool.request()
                 .input('instanceName', mssql.VarChar, "NewInstance16")
                 .input('dbName', mssql.VarChar, updatedInstance.p_dbName)
                 
                //  .input('instanceName', mssql.VarChar, "insName1")
                //  .input('dbName', mssql.VarChar, "dbNameTEST1")
                      // .output('output_parameter', sql.VarChar(50))
                  .execute(storedProcedure)
                   
                    }).then(result => {
                        console.log(result.rowsAffected);
                        res.send(result.rowsAffected);
                    }).catch(err => {
                        console.log(err);
                        res.status(500).send(err);
                        reject(Error(err.message));
                    // ... error checks
                        })

                    mssql.on('error', err => {
                        reject(Error(err.message));
                    // ... error handler
                    })
   
  });
}