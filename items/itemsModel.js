const database = require('../database/databaseConfiguration')

module.exports = {
  find,
  findItemsByCategoryId,
  findCategoriesById,
  add,
  findItemsById,
  update,
  remove
}

function find() {
  return database('items')
    .select('*')
}

function findItemsByCategoryId(id) {
  return database('items')
    .join('categories', 'categories.id', 'items.category_id')
    .select(
      'items.id',
      'items.name', 
      'items.thumbnail',
      'items.category_id'
      )
    .where({ 'categories.id': id })
}

function findCategoriesById(id) {
  console.log(id)
  return database('categories')
    .where({ 'categories.id': id }).first()
}

function add(item, id) {
  console.log(item)
  return database('items')
    .insert(item)
}

function findItemsById(id) {
  return database("items")
    .where({ id }).first()
}

function update(changes, id) {
  return database('items')
    .where({ "id": id })
    .update(changes)
  }


function remove(id) {
  return database("items")
  .where({id})
  .delete()
}