var Promise = require('promise');
const express = require('express')
var logger = require('winston');
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OBJECT; // set option to return column names with the data

var storedProcedure = "APP_CLASS.LICENSEAPI.PutFee"; // Full name of stored procedure

module.exports = function(updatedFee){
        console.log(updatedFee)

        var bindvars = { p_result: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
                        p_fee_seq_num: Number(updatedFee.p_fee_seq_num),
                        p_fee_cd: updatedFee.p_fee_cd,
                        p_fee_desc: updatedFee.p_fee_desc,
                        p_fee_amt: updatedFee.p_fee_amt,
                        p_recurring: updatedFee.p_recurring,
                        p_updated_by: updatedFee.p_updated_by,
                        p_active: updatedFee.p_active,
                        p_per_unit: updatedFee.p_per_unit,
                        p_license_fee: updatedFee.p_license_fee };
            
        console.log(bindvars);

        var oracleStmt = `BEGIN ${storedProcedure}(:p_result, :p_fee_seq_num, :p_fee_cd, :p_fee_desc, :p_fee_amt, :p_recurring, :p_updated_by, :p_active, :p_per_unit, :p_license_fee); END;`;

        return new Promise(function (resolve, reject){
            console.log('repo/fee/putFee.js Called')

            oracledb.getConnection('CLASS', (err, conn) => {
                if (err) {
                    logger.error(err.message);
                    reject({message: "Unable to connect to DB", code: 1, dbmessage: err.message})
                } else {
                    logger.debug(`Executing statement: ${oracleStmt}`)
                    conn.execute(oracleStmt, bindvars, (err, result) => {
                        if (err) {
                            logger.error(err.message);
                            doRelease(conn);
                            reject({message: "Error executing procedure", code: 2, dbmessage: err.message})
                        } else {
                            logger.debug(result.outBinds);
                            if(result.outBinds.p_result){
                                doRelease(conn);
                                resolve(updatedFee)
                            } else {
                                doRelease(conn);
                                reject({message: "Error updating the record.", code: 3})
                            }
                        }
                    });
                }
            });

            function doRelease(connection) {
                connection.close( function(err) {
                    if (err) {
                        logger.error(err.message);
                    }
                });
            }
        })


}