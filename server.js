const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const apiRouter = require('./api/api');

const app = express();

// Port the server will listen on
const PORT = process.env.PORT || 4000;

// Middleware for all routes
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api', apiRouter);

// Error handling middleware should be the last middleware
app.use(errorHandler());

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

// Export express app
module.exports = app;
