// DEPENDENCIES
const express = require('express')
const server = express()

// 3RD-PARTY MIDDLEWARE
const helmet = require('helmet')
const cors = require('cors')

// ROUTER IMPORTS
const authenticationRouter = require('../authentication/authenticationRouter.js');

// SERVER USAGE
server.use(helmet())
server.use(cors())
server.use(express.json()) // POST & Update will use JSON 

// SERVER ROUTING
server.use('/api/authentication', authenticationRouter)

// GET TEST FOR "/"
server.get("/", (request, response) => {
  response.status(200).json("GET TEST SUCCESSFUL!")
})

module.exports = server