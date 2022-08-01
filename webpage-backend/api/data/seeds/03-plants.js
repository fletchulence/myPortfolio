/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        { plant_name: 'cactus', plant_nickname: 'gary', genus_id: 1 },
        { plant_name: 'orchid', plant_nickname: 'susan', genus_id: 2 },
        { plant_name: 'monstera', plant_nickname: 'paul', genus_id: 3 },
      ]);
    });
};
