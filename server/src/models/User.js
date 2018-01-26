//creating sequelize model for User account
module.exports =( sequelize, DataTypes)=>
//define name of model as User
sequelize.define('User',{   //attributes attached to a model(table)
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    password: DataTypes.STRING
    })