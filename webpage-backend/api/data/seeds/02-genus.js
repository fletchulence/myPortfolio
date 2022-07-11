/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('genus').del()
    .then(function () {
      // Inserts seed entries
      return knex('genus').insert([
        { genus_name: 'Succulent',/*  genus_habitat: 'dry, hot, desert', */ genus_water_frequency: 00001234 },
        { genus_name: 'Orchidaceae', /* genus_habitat: 'rainforest', */ genus_water_frequency: 12345 },
        { genus_name: 'Evergreen', /* genus_habitat: 'tropical, warm, humid environment, and gentle sunlight', */ genus_water_frequency: 34567 },
      ]);
    });
};
