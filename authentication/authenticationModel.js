const database = require('../database/databaseConfiguration')

module.exports = {
  add,
  find,
  findBy,
  remove
}

function add(userData) {
  return database('users')
    .insert(userData)
}

function find() {
  return database('users')
    .select('id', 'email')
}

function findBy(username) {
  return database('users')
    .where(username)
}

function remove(id) {
  return database('users')
    .where({ id })
    .delete()
}