//configuration file
const path = require('path')

module.exports = {
PORT :process.env.PORT || 8081,
db:{
    database: process.env.DB_NAME || 'tracker',
    user: process.env.DB_USER || 'tracker',
    password: process.env.DB_PASS || 'tracker',
    options:{
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: path.resolve(__dirname,'../../tracker.sqlite')
    }

},
//signing the jwt token by pssing it a secret string(secret only known by server and used to determine if the jwt token is valid or not)
authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
}
}