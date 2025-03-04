const db = require('../src/db');

async function addInfo(dish_id, country, place, category, image_path = 'No image', abstract = 'No abstract', connection) {
    const check_dish_exist = async (dish_id) => {
        const query = `SELECT * FROM dish WHERE dish_id = ${dish_id}`;
        const [results] = await connection.query(query);
        return results;
    }

    const dishExists = await check_dish_exist(dish_id);
    if(dishExists === 0) {
        throw new Error('Dish does not exist');
    }

    const query = `INSERT INTO infomation (dish_id, country, place, category, image_path, abstract) VALUES (${dish_id}, '${country}', '${place}', '${category}', '${image_path}', '${abstract}')`;
    const [results] = await connection.query(query);
    return results;
   
}

module.exports = { addInfo };

