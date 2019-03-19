var Promise = require('promise');
const express = require('express')
var logger = require('winston');

const mssql = require('mssql');
const config = require('../../config');

let dbconfig = config.dbconfig;

// var
var storedProcedure = "dbo.COC_getCOCDB"; // Full name of stored procedure

module.exports = function(req, res, next) {
    console.log(dbconfig);

    return new Promise(function (resolve, reject){
        console.log('C:\tech\mssqlapi\app\repo\sqlInstance\COC_getCOCDB Called')

        mssql.connect(dbconfig).then(pool => {
        return pool.request()
        // .input('instanceName', mssql.VarChar, "ins222")
        // .output('output_parameter', sql.VarChar(50))
        .execute(storedProcedure)
        // .execute('dbo.COC_Getcocdbinfo')
        // .query('select * from dbo.databaselist2')
         }).then(result => {
             resolve(result.recordsets[0]);
            //  res.send(result.recordsets[0]);
           
             mssql.close();
        //  console.log(result.recordsets[0]);
        //  res.send(result.recordsets[0]);
        // res.send(result.recordset[0]);
        // result.recordset.forEach((element, index, array) => {
        //     console.log(element.MachineName);
        // });
         }).catch(err => {
             console.log(err);
             reject(err);
             mssql.close();
        // ... error checks
             })

         mssql.on('error', err => {

             reject(err);
             mssql.close();
            //  pool.close();
        // ... error handler
         })
   
  });
}