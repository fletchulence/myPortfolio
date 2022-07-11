/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('calendar_days').del()
    .then(function () {
      // Inserts seed entries
      return knex('calendar_days').insert([
        {
          cal_day_date: 10,
          cal_day_of_week: 'Sunday', 
          all_fish_fed: false
        },
        {
          cal_day_date: 11,
          cal_day_of_week: 'Monday', 
          all_fish_fed: true
        },
        {
          cal_day_date: 12,
          cal_day_of_week: 'Tuesday', 
          all_fish_fed: false
        },
        {
          cal_day_date: 13,
          cal_day_of_week: 'Wednesday', 
          all_fish_fed: true
        },
        {
          cal_day_date: 14,
          cal_day_of_week: 'Thursday', 
          all_fish_fed: true
        },
        {
          cal_day_date: 15,
          cal_day_of_week: 'Friday', 
          all_fish_fed: true
        },
        {
          cal_day_date: 16,
          cal_day_of_week: 'Saturday', 
          all_fish_fed: true
        }

      ]);
    });
};

