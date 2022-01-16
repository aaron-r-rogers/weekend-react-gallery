const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT Route
router.put('/like/:id', (req, res) => {
    const sqlQuery = `
        UPDATE gallery
        SET "likes" = $1
        WHERE "id" = $2;`;
    const queryParams = [
        req.body.likes, // $1
        req.params.id   // $2
    ];

    pool.query(sqlQuery, queryParams)
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
			console.log('PUT /gallery failed!', err);
			res.sendStatus(500);
		});
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlQuery = `
        SELECT * FROM gallery 
        ORDER BY id ASC;`;
    pool.query(sqlQuery)
        .then((result) => {
            console.log('successful db GET', result);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log(`Error making database query ${sqlQuery}`, err);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;