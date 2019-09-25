const database = require('../database/databaseConfiguration')

module.exports = {
  find,
  findItemsByCategoryId
}

function find() {
  return database('items')
    .select('name', 'thumbnail')
}

function findItemsByCategoryId(id) {
  return database('items')
    .join('categories', 'categories.id', 'items.category_id')
    .select(
      'items.name', 
      'items.thumbnail'
      )
    .where({ 'categories.id': id })
}