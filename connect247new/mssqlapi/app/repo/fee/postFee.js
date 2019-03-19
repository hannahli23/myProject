var Promise = require('promise');
const express = require('express')
var logger = require('winston');
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OBJECT; // set option to return column names with the data

var storedProcedure = "APP_CLASS.LICENSEAPI.PostFee"; // Full name of stored procedure

module.exports = function(newFee){

        var bindvars = { p_fee_seq_num: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
                        p_fee_cd: newFee.p_fee_cd,
                        p_fee_desc: newFee.p_fee_desc,
                        p_fee_amt: newFee.p_fee_amt,
                        p_recurring: newFee.p_recurring,
                        p_created_by: newFee.p_created_by,
                        p_active: newFee.p_active,
                        p_per_unit: newFee.p_per_unit,
                        p_license_fee: newFee.p_license_fee };

        console.log(bindvars);

        var oracleStmt = `BEGIN ${storedProcedure}(:p_fee_seq_num, :p_fee_cd, :p_fee_desc, :p_fee_amt, :p_recurring, :p_created_by, :p_active, :p_per_unit, :p_license_fee); END;`;

        return new Promise(function (resolve, reject){
            console.log('repo/fee/postFee.js Called')

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
                            if(result.outBinds.p_fee_seq_num){
                                newFee.p_fee_seq_num = result.outBinds.p_fee_seq_num;
                                doRelease(conn);
                                resolve(newFee)
                            } else {
                                doRelease(conn);
                                reject({message: "Error inserting the record.", code: 3})
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