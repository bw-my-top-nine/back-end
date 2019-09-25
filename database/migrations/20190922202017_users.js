exports.up = function(knex) {

  return knex.schema

   .createTable('users', users => {

    users.increments()

    users.string('email', 128)
      .notNullable()
      .unique()

    users.string('password', 128)
      .notNullable()

  })

  .createTable('categories', categories => {

    categories.increments()

    categories.string('name', 128)
      .notNullable()
      .unique()

    categories.string('description', 255)

    categories.string('thumbnail', 255)
      .default("http://blog.journalistics.com/wp-content/uploads/2009/12/9-posts-2009.jpg?w=640")

    categories.integer('user_id')
      .unsigned()
      // .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  
  })

  .createTable('items', items => {

    items.increments()

    items.string('name', 128)
      .notNullable()
      .unique()

    items.string('thumbnail', 255)
      .default("http://www.unit9.com/wp-content/uploads/UNIT9_Logo_profile@2.png")

    items.integer('category_id')
      .unsigned()
      // .notNullable()
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  
  })
};

exports.down = function(knex) {
  
  return knex.schema
    .dropTableIfExists('items')
    .dropTableIfExists('categories')
    .dropTableIfExists('users')

};