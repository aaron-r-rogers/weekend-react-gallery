const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('req.params are:', req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM gallery ORDER BY id ASC;`
    pool.query(sqlQuery)
        .then((res) => {
            console.log('successful db GET', res);
            res.send(res.rows);
        })
        .catch((err) => {
            console.log(`Error making database query ${sqlQuery}`, err);
            res.sendStatus(500);
        })

    
}); // END GET Route

module.exports = router;