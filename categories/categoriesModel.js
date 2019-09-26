const database = require('../database/databaseConfiguration')

module.exports = {
  find,
  findCategoriesByUserId,
  findUsersById,
  add,
  update,
  findCategoriesById,
  remove
}

function find() {
  return database('categories')
    .select('*')
}

function findCategoriesByUserId(id) {
  return database('categories')
    .join('users', 'users.id', 'categories.user_id')
    .select(
      'categories.id',
      'categories.name', 
      'categories.description', 
      'categories.thumbnail',
      'categories.user_id'
      )
    .where({ 'users.id': id })
}

function findUsersById(id) {
  
  return database('users')
    .where({ 'users.id': id }).first()
}

function add(category, id) {
 
  return database('categories')
    .insert(category)
}

function findCategoriesById(id) {
  return database("categories")
    .where({ id }).first()
}

function update(changes, id) {
  return database('categories')
    .where({ "id": id })
    .update(changes)
  }

function remove(id) {
  return database("categories")
  .where({id})
  .delete()
}