const knex = require('knex')

const knexConfiguration = require('../knexfile.js')

const environment = process.env.DB_ENV || 'development'

module.exports = knex(knexConfiguration[environment])