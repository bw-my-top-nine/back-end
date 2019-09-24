const knex = require('knex')

const knexConfiguration = require('../knexfile.js')

const dbENV = process.env.DB_ENV || 'development'

module.exports = knex(knexConfiguration.development)