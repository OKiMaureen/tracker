// create express middle wear to validate that certain requirement or data constraint pass or fail
//require joi module
const joi = require('joi')
module.exports = {
    register (req, res, next){
        const schema = {
            email: joi.string().email(),
            password: joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}'))
        }
        const {error, value} = joi.validate(req.body,schema)
        if (error){
            switch (error.details[0].context.key){
                case 'email' : res.status(400).send({error:'you must provide a valid email address'})
                break
                case 'password' : res.status(400).send({error:`
                password provided failed to match the following rules:
                <br>
                1. it must contain ONLY lowercase ,upper case, numerics
                <br:
                2. it must between 8 and 32 characters in length`})
                break
                default:res.status(400).send({error: 'invalid registration information'})
            }
        }
        else{
            next()
        }
       
    }
}