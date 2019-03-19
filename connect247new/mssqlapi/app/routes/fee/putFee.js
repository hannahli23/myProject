// const adminRole = require('../../config').role.licenseAdmin;
// const feeRepo = require('../../repo/fee');

// module.exports = function(req, res, next){
//         // get query parameters from request
//         var body = req.body;
//         var user = req.user;
//         var id = req.params.id

//         console.log(id);

//         modelObj = {
//             p_fee_seq_num: id,
//             p_fee_cd: body.FEE_CD,
//             p_recurring: (body.RECURRING == true).toString(),
//             p_fee_desc: body.FEE_DESC,
//             p_fee_amt: body.FEE_AMT,
//             p_active: (body.ACTIVE == true).toString(),
//             p_per_unit: (body.PER_UNIT == true).toString(),
//             p_license_fee: (body.LICENSE_FEE == true).toString(),
//             p_updated_by: user.adLogin
//         }

//         if(user.roles.includes(adminRole)){
//             feeRepo.put(modelObj).then(response =>{
//                 res.status(200).send(response)   
//             }).catch(err => {
//                 res.status(500).send(err)
//             });
//         } else {
//             res.send(401).send("unauthorized");
//         }
       
//     }

// const adminRole = require('../../config').role.licenseAdmin;
const feeRepo = require('../../repo/fee');

module.exports = function(req, res, next){
        // get query parameters from request
        var body = req.body;
        var user = req.user;
        var id = req.params.id

        console.log(id);

        modelObj = {
            p_fee_seq_num: id,
            p_fee_cd: body.FEE_CD,
            p_recurring: (body.RECURRING == true).toString(),
            p_fee_desc: body.FEE_DESC,
            p_fee_amt: body.FEE_AMT,
            p_active: (body.ACTIVE == true).toString(),
            p_per_unit: (body.PER_UNIT == true).toString(),
            p_license_fee: (body.LICENSE_FEE == true).toString(),
            p_updated_by: body.FEE_CD
        }

       
            feeRepo.put(modelObj).then(response =>{
                res.status(200).send(response)   
            }).catch(err => {
                res.status(500).send(err)
            });
        
       
    }