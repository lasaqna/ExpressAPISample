var express = require('express');
var router = express.Router();
var db = require('../src/db');
const { addDish } = require('../func/addDish');
const { addInfo } = require('../func/addInfo');
const { addRecipe } = require('../func/addRecipe');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', async function(req, res, next) {
    const { dish_name, image_path, country, place, category, abstruct, recipe_info } = req.body;

    let connection;
    try {
        connection = await db.getConnection();
        await connection.beginTransaction();

        const dish_id = await addDish(dish_name, connection);
        console.log("addDish success");
        await addInfo(dish_id, country, place, category, image_path, abstruct, connection);
        console.log("addinfo success");
        await addRecipe(dish_id, recipe_info, connection);
        console.log("addRecipe success");

        await connection.commit();
        res.json({ message: 'Success' });
    } catch (error) {
        if (connection) {
            await connection.rollback();
            connection.release();
        }
        console.error('Error during transaction:', error);
        res.status(500).json({ error: error.message });
    } finally {
        if (connection) connection.release();
    }
});

module.exports = router;
