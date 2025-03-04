const db = require('../src/db');

async function addRecipe(dish_id, recipe_info, connection) {
    const check_dish_exist = async (dish_id) => {
        const query = `SELECT * FROM dish WHERE dish_id = ${dish_id}`;
        const [results] = await connection.query(query);
        return results;
    }

    const dishExists = await check_dish_exist(dish_id);
    if(dishExists === 0) {
        throw new Error('Dish does not exist');
    }
    
    const query = `INSERT INTO recipe (dish_id, recipe_info) VALUES (${dish_id}, '${JSON.stringify(recipe_info)}')`;
    const [results] = await connection.query(query);
    return results;
   
}

module.exports = { addRecipe };