/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'david', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { username: 'sara', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { username: 'debra', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' }
      ]);
    });
};
