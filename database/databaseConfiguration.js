const knex = require('knex')

const knexConfiguration = require('../knexfile.js')

module.exports = knex(knexConfiguration.development)