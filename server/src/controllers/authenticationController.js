const { User } = require('../models')
const jwt = require('jsonwebtoken') // used for authentication
const config = require ('../config/config')

//helper function to asign a user object using the jwt library to return a jwt token
//it sends back a jwt token when the user signs in
    let jwtSignUser =(user)=>{
    const ONE_WEEK = 60 * 60 *24 *7
    return jwt.sign(user, config.authentication.jwtSecret,{
        expiresIn : ONE_WEEK
    })

}


//declaring register endpoints
module.exports = {
    async  register(req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user:userJson,
                token:jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use'
            })
        }

    },
    
    //login method which grabs the email and password from the body and finds user using the email given to find email in databse
    async  login(req, res) {
        try {
            const {email,password} = req.body
            const user = await User.findOne({where:{
                email:email
            }})
            // check if not same email was returned from user model in database and return error
            if(!user){
               return res.status(403).send({
                    error:'The login information was incorrect'
                })
            }
            // check if password given does not match user password in database and return error
            const isPasswordValid = user.comparePassword(password)
            if(!isPasswordValid){
                return res.status(403).send({
                    error:'The login information was incorrect'
                })
            }
            //if email and password match return a jwt token with the user information
            const userJson = user.toJSON()
            res.send({
                user:userJson,
                token:jwtSignUser(userJson)
            })
            
        } catch (err) { 
            res.status(500).send({
                error: 'An error occured while trying to login'
            })
        }

    }
}
