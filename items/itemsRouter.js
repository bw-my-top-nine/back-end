// DEPENDENCIES
const express = require('express')
const router = express.Router()

// MODEL IMPORTS
const itemsModel = require('./itemsModel.js')

//ROUTES

// GET ITEMS (R(EAD))
router.get('/', (request, response) => {
  itemsModel.find()
    .then(items => {
      response.status(200).json(items)
    })
    .catch(error => {
      response.status(500).json(error)
    })
})

//GET CATEGORIES BY USER ID (R(EAD))
router.get('/:id/items', (request, response) => {
  const { id } = request.params

  itemsModel.findItemsByCategoryId(id)
    .then(items => {
      if (items) {
        response.json(items)
      }
      else {
        response.status(404).json({ message: 'could not find item with given id'})
        console.log(id)
      }
    })
    .catch(error => {
      response.status(500).json(error)
      console.log(error)
    })
})

module.exports = router