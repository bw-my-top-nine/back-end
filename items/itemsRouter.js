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

// UPDATE Category ((U)PDATE)
router.put('/:id', (request, response) => {
  const { id } = request.params
  const changes = request.body

  itemsModel.findItemsById(id)
    .then(item => {
      if (item) {
        itemsModel.update(changes, id)
        .then(updatedItem => {
          response.json(updatedItem)
        })
      }
      else {
        response.status(404).json({ message: 'Could not find item with given id' })
      }
    })
    .catch(error => {
      response.status(500).json({ message: 'Failed to update item' })
      console.log(error)
    })
})

router.delete("/:id", (request, response) => {
  const { id } = request.params

  itemsModel.remove(id)
  .then(deleted => {
    if (deleted) {
      response.json(deleted)
    }
    else {
      response.status(404).json({ message: 'Could not delete item with  given id' })
    }
  })
  .catch(error => {
    response.status(500).json(error)
    console.log(error)
  })
})

module.exports = router