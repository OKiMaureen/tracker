//require authenticationController module
const authenticationController = require ('./controllers/authenticationController')

//declaring register route that points to register endpoint controller
module.exports =(app)=>{
    app.post('/register',authenticationController.register)
}