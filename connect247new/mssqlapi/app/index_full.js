// Set UV_THREADPOOL_SIZE to match number of max connections in pool
process.env.UV_THREADPOOL_SIZE=100

// When process is terminated, close down connection pool gracefull
process.on('SIGINT', function() {
    process.exit(0);
})

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
var colors = require('colors');
// const oracledb = require('oracledb');
const mssqldb = require('mssql');
//oracledb.stmtCacheSize = 0;

// logging import - setup winston server and import strategy to write logs to it
var logger = require('./Strategies/logging');


//custom modules
const config = require('./config');
// const LocalStrategy = require('passport-local').Strategy;
// var adStrategy = require('./Strategies/ad-login');
// const jwtStrategy = require('./Strategies/jwt');


// const dbconfig = {
//     user: 'testSEC',
//     password: 'testsec', //process.env.mspass
//     server: 'vws12c10\\itinfrastructure', 
//     database: 'cocdbmgmt'
// };



// initialize Express
const app = express()

// app.get('/', (req, res) => {
//     mssqldb.connect(dbconfig).then(pool => {
//         return pool.request()
//         // .in
//         .input('instanceName', mssqldb.VarChar, "dbmgmt")
//         // .output('output_parameter', sql.VarChar(50))
//         .execute('dbo.COC_Getcocdbinfo')
//         // .query('select * from dbo.databaselist2')
//     }).then(result => {
//         // console.log(result.recordset[0]);
//          res.send(result.recordset[0]);
//         // res.send(result.recordset[0]);
//         // result.recordset.forEach((element, index, array) => {
//         //     console.log(element.MachineName);
//         // });
//     }).catch(err => {
//         console.log(err);
//         // ... error checks
//     })

//     mssqldb.on('error', err => {
//         // ... error handler
//     })
// })

app.use(bodyParser.urlencoded({limit: '1mb', extended:true}));
app.use(bodyParser.json({limit: '1mb'}));

// Init Passport
// app.use(passport.initialize())

// passport.serializeUser(function(user, done){
//     done(null, user);
// });

// passport.deserializeUser(function(){
//     done(null, user);
// });


// passport.use('ad-login', new adStrategy());
// passport.use('jwt', new jwtStrategy());


app.use(function(req, res, next){
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Cache-Control', 'no-cache');


    next();
});




app.listen(8000, () => {
    console.log('Listening on port 8000');
    require('./routes')(app);
})
