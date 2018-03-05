// require authenticationController module
const authenticationController = require ('./controllers/authenticationController')

// require authenticationControllerPolicy module
const authenticationControllerPolicy = require ('./policies/authenticationControllerPolicy')

// require songsController module
const songsController = require ('./controllers/songsController')

// require bookmarksController module
const bookmarksController = require ('./controllers/bookmarksController')

const historiesController = require('./controllers/historiesController')

const isAuthenticated = require('./policies/isAuthenticated')


module.exports = (app)=>{
    // declaring register route that points to 'register endpoint' controller after validation (to post)
    app.post('/register',authenticationControllerPolicy.register, authenticationController.register)
    // login endpoint which calls authenticationController login method (to post)
    app.post('/login',authenticationController.login)
    // songs endpoint which calls songController index method (to get)
    app.get('/songs',songsController.index)
    // songs endpoint which calls songController show method (to get)
    app.get('/songs/:songId',songsController.show)
    // songs endpoint which calls songController put method (to put)
    app.put('/songs/:songId',songsController.put)
     // songs endpoint which calls songController post method (to post)
    app.post('/songs',songsController.post)
    
    // bookmarks endpoint which calls bookmarkController index  method (to get)
    app.get('/bookmarks', isAuthenticated,bookmarksController.index)
    // bookmarks endpoint which calls bookmarkController post  method (to post)
    app.post('/bookmarks', isAuthenticated,bookmarksController.post)
     // bookmarks endpoint which calls bookmarkController delete  method (to delete)
    app.delete('/bookmarks/:bookmarkId', isAuthenticated, bookmarksController.remove)
    
    app.get('/histories', isAuthenticated, historiesController.index)
    app.post('/histories', isAuthenticated, historiesController.post)
     
    } 