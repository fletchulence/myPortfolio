const db = require('../data/db-config')

async function insertPlant(plant) {
   // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
   // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
   const [newPlantObject] = await db('plants').insert(plant, ['plant_id', 'plant_name', 'water_now', 'plant_picture', 'genus_id'])
   return newPlantObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

function getAllPlants(){
   return db('plants')
}

async function getUsersPlants(user_id){
   const rows = await db('users_plants as up')
      .leftJoin('plants as p', 'p.plant_id', 'up.plant_id')
      .where('up.user_id', user_id )
      .select('up.user_id', 'p.plant_name', 'p.plant_nickname', 'up.users_plants_nickname', 'water_now')
      .orderBy('up.user_id')

   // const result = rows.forEach(el => {
   //    return el
   // });

   return rows
}

module.exports ={
   insertPlant,
   getAllPlants,
   getUsersPlants
}