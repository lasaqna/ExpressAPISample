const express = require('express');
const router = express.Router();
const db = require('../src/db');

/* 料理に関するすべての情報を取得. */
router.get('/all-dish', function(req, res, next) {
    const query = 'SELECT * FROM dish join info on dish.dish_id = info.dish_id join recipe on dish.dish_id = recipe.dish_id';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
    res.send('respond with a resource');
});

module.exports = router;