const knex = require('knex')

const knexConfiguration = require('../knexfile.js')

const dbEnv = process.env.DB_ENV || 'development'

module.exports = knex(knexConfiguration[dbEnv])