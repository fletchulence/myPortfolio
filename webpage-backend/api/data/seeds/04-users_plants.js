/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_plants').insert([
        { user_id: 1, plant_id: 1, users_plants_nickname: 'bob'},
        { user_id: 1, plant_id: 2, users_plants_nickname: 'foo'},
        { user_id: 1, plant_id: 3, users_plants_nickname: 'bar'},
        { user_id: 2, plant_id: 1, users_plants_nickname: 'baz'},
        { user_id: 2, plant_id: 2, users_plants_nickname: 'billy'},
        { user_id: 2, plant_id: 3, users_plants_nickname: 'bono'},
        { user_id: 3, plant_id: 1, users_plants_nickname: 'jill'},
        { user_id: 3, plant_id: 2, users_plants_nickname: 'brazen'},
        { user_id: 3, plant_id: 3, users_plants_nickname: 'bryan'},
      ]);
    });
};
