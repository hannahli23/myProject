module.exports = {
    port: process.env.port || 8000,
    ad: {
        //url: 'ldap://ci.chandler.az.us',
        url: 'ldap://10.10.3.231',
        baseDN: 'DC=ci,DC=chandler,DC=az,DC=us',
        username: 'radldap@ci.chandler.az.us',
        password: 'PassWord12345',
        domain: 'ci.chandler.az.us'
        },
    opts: {
        timeLimit: 100
    },
    jwtSecret: process.env.JWTSECRET || 'secret',
    tokenTimeout: 1440, //in Minutes
    role: {
        licenseAdmin: "admin",
        user: "user",
        auditUser: "auditUser",
        auditAdmin: "auditAdmin"
    },
    dbconfig: {
         user: 'testSEC',
         password: 'testsec', //process.env.mspass
         server: 'vws12c10\\itinfrastructure', 
         database: 'cocdbmgmtDEV'
     },

       dbconfig2: {
            connectionLimit : 10,
            host            : 'localhost',
            user            : 'root',
            password        : 'test',
            database        : 'world'
     },
    dbconfigm: {
    connectionLimit : 10,
      host            : 'localhost',
      user            : 'root',
      password        : 'test',
      database        : 'world'
}

}