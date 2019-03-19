var Promise = require('promise');
const express = require('express')
var logger = require('winston');
//  const oracledb = require('oracledb');

const mssql = require('mssql');
const config = require('../../config');

let dbconfig = config.dbconfig;

// const dbconfig = {
//     user: 'testSEC',
//     password: 'testsec', //process.env.mspass
//     server: 'vws12c10\\itinfrastructure', 
//     database: 'cocdbmgmt'
// };

// oracledb.outFormat = oracledb.OBJECT; // set option to return column names with the data

var storedProcedure = "dbo.COC_Getcocdbinfo"; // Full name of stored procedure

module.exports = function() {
    console.log(dbconfig);
    // var bindvars = { cursor: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT} };
    // var oracleStmt = `BEGIN ${storedProcedure}(:cursor); END;`;
    // var jsonTemplate = [];

    return new Promise(function (resolve, reject){
        console.log('C:\tech\mssqlapi\app\repo\sqlInstance\getDBbyInstance.js Called')

        mssql.connect(dbconfig).then(pool => {
        return pool.request()
        // .in
        .input('instanceName', mssql.VarChar, "dbmgmt")
        // .output('output_parameter', sql.VarChar(50))
        .execute('dbo.COC_Getcocdbinfo')
        // .query('select * from dbo.databaselist2')
         }).then(result => {
             resolve(result);
        // console.log(result.recordset[0]);
         //res.send(result.recordset[0]);
        // res.send(result.recordset[0]);
        // result.recordset.forEach((element, index, array) => {
        //     console.log(element.MachineName);
        // });
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