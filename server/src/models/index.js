// sequelize file for connecting to the database 
//requiring modules
const fs = require('fs')
const path = require('path')
const Sequelize = require ('sequelize')
const config = require('../config/config')
const db = {}

//instantiate sequelize (sequelize constructor)
const sequelize = new Sequelize(
    //loads configurations
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

//read all files in models folder that is not equal to index.js
fs 
.readdirSync(__dirname)
.filter((file)=>file != 'index.js')
//loads files not equal to index.js to sequelize
.forEach((file)=>{
    const model = sequelize.import(path.join(__dirname,file))
    db[model.name] = model
})
//return sequelize
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db