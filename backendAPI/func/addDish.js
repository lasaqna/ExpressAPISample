const db = require('../src/db');

async function addDish(dish_name, connection) {
    const query = `INSERT INTO dish (dish_name) VALUES ('${dish_name}')`;
    const [results] = await connection.query(query, [dish_name]);
    return results.insertId;
   
}

module.exports = { addDish };