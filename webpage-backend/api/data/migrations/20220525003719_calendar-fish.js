exports.up = async (knex) => {
   await knex.schema
     .createTable('calendar_days', (tbl) => {
       tbl.increments('calendar_days_id')
       tbl.integer('cal_day_date')
       tbl.string('cal_day_of_week')
       tbl.boolean('all_fish_fed').notNullable()
      //  tbl.timestamp('created_at').defaultTo(knex.fn.now()))
     })
 
     .createTable('fish_tank', tbl => {
       tbl.increments('fish_tank_id')
       tbl.boolean('fish_tank_fed').defaultTo(false)

     })
 }
 
 exports.down = async (knex) => {
   // await knex.schema.dropTableIfExists('plants')
   await knex.schema.dropTableIfExists('fish_tank')
   await knex.schema.dropTableIfExists('calendar_days')
 }
 