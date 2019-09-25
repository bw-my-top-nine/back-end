// DEPENDENCIES
const express = require('express')
const server = express()

// 3RD-PARTY MIDDLEWARE
const helmet = require('helmet')
const cors = require('cors')

// ROUTER IMPORTS
const authenticationRouter = require('../authentication/authenticationRouter.js');
const categoriesRouter = require('../categories/categoriesRouter.js')
const itemsRouter = require('../items/itemsRouter.js')

// SERVER USAGE
server.use(helmet())
server.use(cors())
server.use(express.json()) // POST & Update will use JSON 

// SERVER ROUTING
server.use('/api/authentication', authenticationRouter)
server.use('/api/categories', categoriesRouter)
server.use('/api/items', itemsRouter)

// GET TEST FOR "/"
server.get("/", (request, response) => {
  response.status(200).json("GET TEST SUCCESSFUL!")
})

module.exports = server