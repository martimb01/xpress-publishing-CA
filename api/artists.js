const express = require('express');
const sqlite3 = require('sqlite3');


const artistsRouter = express.Router();

//Opening and instance of the Data Base
const db = new sqlite3.Database(process.env.TEST_DATABASE ||'./database.sqlite')

artistsRouter.get('/', (req,res,next) => {
    db.all(`SELECT * FROM Artist 
            WHERE is_currently_employed = 1;`, (err,artists) => {
                if (err) {
                    next(err)
                } else {
                    res.status(200).json({artists: artists})
                }
            })

})

artistsRouter.param('artistId', (req, res, next, artistId) => {

    db.get(`SELECT * FROM Artist WHERE id = $ph1`, 
        {
            $ph1: artistId
        }, (err,row) => {
            if (err) {
                next(err)
            } else if (row) {
                req.artist = row;
                next();
            } else {
                res.status(404).send();
            }
        })
})

artistsRouter.get('/:artistId', (req,res,next) => {
    res.status(200).json({artist: req.artist});
});





//Exporting artistsRouter
module.exports = artistsRouter;