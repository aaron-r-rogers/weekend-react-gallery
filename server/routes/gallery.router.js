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

// POST route
router.post('/', (req, res) => {
	let newItem = req.body;
	console.log(`Adding item`, newItem);

	let sqlQuery = `
        INSERT INTO "gallery" 
            ("id", "title", "description", "path", "likes") 
        VALUES
            (DEFAULT, $1, $2, $3, DEFAULT);`;

    const queryParams = [
        newItem.title,          // $1
        newItem.description,    // $2
        newItem.path            // $3
    ];

	pool.query(sqlQuery, queryParams)
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.log(`Error adding new item`, err);
			res.sendStatus(500);
		});
});

router.delete('/:id', (req, res) => {
	const queryText = `DELETE FROM gallery WHERE id = $1 `;
	let queryParams = [ req.params.id ];
	pool
		.query(queryText, queryParams)
		.then((dbRes) => {
			res.sendStatus(204);
		})
		.catch((err) => {
			console.log('DELETE failed:', err);
		});
});

module.exports = router;