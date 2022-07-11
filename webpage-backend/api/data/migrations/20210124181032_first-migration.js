exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (tbl) => {
      tbl.increments('user_id')
      tbl.string('username', 200).notNullable().unique()
      tbl.string('password', 200).notNullable()
      tbl.timestamps(false, true)
    })

    .createTable('genus', tbl => {
      tbl.increments('genus_id')
      tbl.string('genus_name').notNullable().unique()
      // tbl.string('genus_habitat').notNullable()
      tbl.float('genus_water_frequency').notNullable()
    })

    .createTable('plants', (tbl) => {
      tbl.increments('plant_id')
      tbl.string('plant_name').notNullable().unique()
      tbl.string('plant_nickname').notNullable().unique()
      // tbl.integer('plant_water_frequency')
      tbl.boolean('water_now').defaultTo(false)
      tbl.float('plant_picture')
      tbl.integer('genus_id')
        .unsigned()
        .notNullable()
        .references('genus_id').inTable('genus')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

    .createTable('users_plants', tbl => {
      tbl.increments('users_plants_id')
      tbl.string('users_plants_nickname').defaultTo( 'New Plant' + `${Math.round(Math.random() * 10)}` )
      tbl.integer('plant_id')
        .unsigned()
        .notNullable()
        .references('plant_id').inTable('plants')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id').inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users_plants')
  await knex.schema.dropTableIfExists('plants')
  await knex.schema.dropTableIfExists('genus')
  await knex.schema.dropTableIfExists('users')
}
