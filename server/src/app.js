console.log('Hello');
//requiring modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//instantiating express app
const app = express();
//set up morgan
app.use(morgan('combined'));
//set up body parser
app.use(bodyParser.json());
//set up cors
app.use(cors());

app.post('/register', (req, res) => {
    res.send({ message: `Hello ${req.body.email}, Your user was registered!` })
})
//listening to server on port 8081
app.listen(process.env.PORT || 8081);