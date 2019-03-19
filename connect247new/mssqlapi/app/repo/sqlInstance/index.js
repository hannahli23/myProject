const getDBbyInstance = require('./getDBbyInstance')
const putDBbyInstance = require('./putDBbyInstance')
const postDBbyInstance = require('./postDBbyInstance')
// const postFee = require('./postFee')
// const putFee = require('./putFee')

module.exports = {
    get: getDBbyInstance,
    post: postDBbyInstance,
    put: postDBbyInstance
}