const express = require('express');
const artistsRouter = require('./artists');



//Router handling all /api sub-routes
const apiRouter = express.Router();


// Router for /api/artists
apiRouter.use('/artists', artistsRouter)







//Export apiRouter
module.exports = apiRouter;