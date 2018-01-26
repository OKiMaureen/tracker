//requiring modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require ('./models');
const config = require ('./config/config');

//instantiating express app
const app = express();
//set up morgan
app.use(morgan('combined'));
//set up body parser
app.use(bodyParser.json());
//set up cors
app.use(cors());
        
//requiring routes
require('./routes')(app)

//connect(synchronize) sequelize to database it is configured for
sequelize.sync().then(()=>{
    app.listen(config.port)
    console.log(`server started at port ${config.PORT}`)
})
//listening to server on port 8081
app.listen(process.env.PORT || 8081);