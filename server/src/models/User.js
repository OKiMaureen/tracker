//requiring promise library(bluebird)
const Promise = require('bluebird')
//requiring bycypt module(used for encypting, hashing and salting poassword)
//adds salt hash to password used to check if the password sent by the user is same as is in the database
//promisfy bcrypt package (promisfyAll takes any typical function that has a callback function and wrqps it to allow the use of the promise format)
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

//method to hash user password
let hashPassword =(user,options)=>{
    const SALT_FACTOR = 8
    if(!user.changed('password')){
        return;
    }
    //call bcypt
    return bcrypt
    //generate using the salt factor
    .genSaltAsync(SALT_FACTOR)
    //then take salt and bcypt using user's password(take plain text password and salt it )
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    //returns hash
    .then(hash=>{
        //update users password value with hash
        user.setDataValue('password',hash)
    })

}


//creating sequelize model for User account
module.exports =( sequelize, DataTypes)=>{
//define name of model as User
    const User= sequelize.define('User',{   //attributes attached to a model(table)
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    password: DataTypes.STRING
    },
    //use hooks to hash password before object "User" is created,updated and saved
    {
        hooks:{
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })
    //method to comparePassword user sends in against the model's password(method can be called on any user model)
    User.prototype.comparePassword = (password)=>{
    return bcrypt.compareAsync(password, this.password)
    }
    return User
    }