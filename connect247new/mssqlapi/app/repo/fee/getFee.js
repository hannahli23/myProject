var Promise = require('promise');
const express = require('express')
var logger = require('winston');
 const oracledb = require('oracledb');

// const mssql = require('mssql');
oracledb.outFormat = oracledb.OBJECT; // set option to return column names with the data

var storedProcedure = "APP_CLASS.LICENSEAPI.GetFees"; // Full name of stored procedure

module.exports = function() {

    var bindvars = { cursor: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT} };
    var oracleStmt = `BEGIN ${storedProcedure}(:cursor); END;`;
    var jsonTemplate = [];

    return new Promise(function (resolve, reject){
        console.log('repo/fee/getFee.js Called')
        oracledb.getConnection('CLASS', (err, conn) => {
            if (err) {
                logger.error(err.message);
                reject({message: "Unable to connect to DB", code: 1, dbmessage: err.message})
            }

            logger.debug(`getFee: Executing statement: BEGIN ${storedProcedure}(:cursor); END;`)
            conn.execute( oracleStmt, bindvars, (err, result) => {
                    if (err) {
                        logger.error(err.message);
                        doRelease(conn);
                        reject({message: "Error executing procedure", code: 2, dbmessage: err.message});
                    } else {
                        logger.debug(result.outBinds.metaData);
                        fetchOneRowFromRS(conn, result.outBinds.cursor);
                    }
                });
            });

        function fetchOneRowFromRS(connection, resultSet) {
            try {
                resultSet.getRow((err, row) => {
                    if (err) {
                        logger.debug(err.message);
                        doClose(connection, resultSet);
                        reject({message: "Error retrieving the record.", code: 3, dbmessage:err.message })
                    } else if ( row ) {
                        jsonTemplate.push(row);
                        fetchOneRowFromRS(connection, resultSet);
                    } else if (!row) {
                        doClose(connection, resultSet);
                        resolve(jsonTemplate);
                    }
                });
            }
            catch(err) {
                logger.debug(err.message);
                doRelease(connection);
                reject({message: "Error retrieving the record.", code: 3, dbmessage:err.message })
            }
        }

    });

    function doRelease(connection) {
        connection.close((err) => {
            if (err) {
                logger.error(err.message);
            } else {
                logger.debug("getMatchedLocation: DB Connection Closed");
            }
        });
    }

    function doClose(connection, resultSet) {
        resultSet.close((err) => {
            if (err) {
                logger.error(err.message);
            } else {
                logger.debug("getMatchedLocation: Resultset Closed");
            }
            doRelease(connection);
        });
    }
}