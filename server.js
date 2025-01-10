const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const morgan = require('morgan')
const express = require('express');

// Initialize the app
const app = express();

// Port the server will listen on
const PORT = process.env.PORT || 4000;


// Middleware for all routes
app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler());
app.use(morgan('dev'));

//Start the server
app.listen(PORT, ()=> {
    console.log(`Server listening on port : ${PORT}`)
})


//Export express app
module.exports = app;

