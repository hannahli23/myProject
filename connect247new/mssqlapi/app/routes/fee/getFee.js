const feeRepo = require('../../repo/fee');

module.exports = function(req, res, next){
        // get query parameters from request
        feeRepo.get()
            .then(response =>{
                response.forEach(fee => {
                    fee.RECURRING = (fee.RECURRING == 'true');
                    fee.ACTIVE = (fee.ACTIVE == 'true');
                    fee.PER_UNIT = (fee.PER_UNIT == 'true')
                    fee.LICENSE_FEE = (fee.LICENSE_FEE == 'true')
                })
                res.status(200).send(response)   
            }).catch(err => {
                res.status(500).send(err)
            });
       
    }