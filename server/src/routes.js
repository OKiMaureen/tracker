// require authenticationController module
const authenticationController = require ('./controllers/authenticationController')

// require authenticationControllerPolicy module
const authenticationControllerPolicy = require ('./policies/authenticationControllerPolicy')


// declaring register route that points to register endpoint controller after validation
module.exports = (app)=>{
    app.post('/register',authenticationControllerPolicy.register, authenticationController.register)
}