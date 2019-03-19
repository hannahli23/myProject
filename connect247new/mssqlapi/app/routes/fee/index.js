const express = require('express');
const getFee = require('./getFee');
const putFee = require('./putFee');



module.exports = (function(){

     var api = express.Router();
     api.route('/')
        .get(getFee)

     api.route('/')
        .put(putFee)   

      return api;  
    
})();

// app.route('/api/cats/:name').get((req, res) => {
//   const requestedCatName = req.params['name'];
//   res.send({ name: requestedCatName });
// });

// // app.route('/api/cats/:name').get(getFee)


// app.use(bodyParser.json());
// app.route('/api/cats').post((req, res) => {
//   res.send(201, req.body);
// });

// app.route('/api/cats/:name').delete((req, res) => {
//   res.sendStatus(204);
// });

// app.route('/api/cats/:name').put((req, res) => {
//   res.send(200, req.body);
// });

