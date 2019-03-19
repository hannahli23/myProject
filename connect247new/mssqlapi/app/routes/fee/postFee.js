var Promise = require('promise');

const adminRole = require('../../config').role.licenseAdmin;
const feeRepo = require('../../repo/fee');

module.exports = function(req, res, next){
        // get query parameters from request
        var body = req.body;
        // var user = req.user;
        var user = 'testuser';

        // if(!body.p_fee_cd || !body.p_recurring || !body.p_fee_desc || !body.p_fee_amt || !body.p_per_unit || !body.p_license_fee || !body.p_license_fee) {
        //     res.status(400).send('Missing required information');
        //     return;
        // }

        modelObj = {
            p_fee_cd: body.FEE_CD,
            p_recurring: (body.RECURRING == true).toString(),
            p_fee_desc: body.FEE_DESC,
            p_fee_amt: body.FEE_AMT,
            p_active: (body.ACTIVE == true).toString(),
            p_per_unit: (body.PER_UNIT == true).toString(),
            p_license_fee: (body.LICENSE_FEE == true).toString(),
            //p_created_by: user.displayName
            p_created_by: user
        }

        console.log(modelObj);

        // if(user.roles.includes(adminRole)){
            feeRepo.post(modelObj).then(response =>{
                res.status(200).send(response)   
            }).catch(err => {
                res.status(500).send(err)
            });
            
        // } else {
        //     res.send(401).send("unauthorized");
        // }
       
    }