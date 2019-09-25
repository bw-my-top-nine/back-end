// DEPENDENCIES
const express = require('express')
const router = express.Router()

// MODEL IMPORTS
const categoriesModel = require('./categoriesModel.js')

//ROUTES

// GET CATEGORIES (R(EAD))
router.get('/', (request, response) => {
  categoriesModel.find()
    .then(categories => {
      response.status(200).json(categories)
    })
    .catch(error => {
      response.status(500).json(error)
    })
})

//GET CATEGORIES BY USER ID (R(EAD))
router.get('/:id/categories', (request, response) => {
  const { id } = request.params

  categoriesModel.findCategoriesByUserId(id)
    .then(categories => {
      if (categories) {
        response.json(categories)
      }
      else {
        response.status(404).json({ message: 'could not find category with given id'})
        console.log(id)
      }
    })
    .catch(error => {
      response.status(500).json(error)
    })
})

// POST CATEGORY BY USER ID (C(REATE))
router.post('/:id/categories', (request, response) => {
  const categoryData = request.body
  const { id } = request.params

  categoriesModel.findUsersById(id)
    .then(user => {
      console.log(user)
      if (user) {
        return categoriesModel.add(categoryData, id)
          .then(newData => {
            response.status(201).json(newData)
          })
      }
      else {
         response.status(404).json({ message: 'could not find user with given id'})
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

  categoriesModel.findCategoriesById(id)
    .then(category => {
      if (category) {
        categoriesModel.update(changes, id)
        .then(updatedCategory => {
          response.json(updatedCategory)
        })
      }
      else {
        response.status(404).json({ message: 'Could not find category with given id' })
      }
    })
    .catch(error => {
      response.status(500).json({ message: 'Failed to update category' })
      console.log(error)
    })
})

// DELETE Category ((D)ELETE)
router.delete("/:id", (request, response) => {
  const { id } = request.params

  categoriesModel.remove(id)
  .then(deleted => {
    if (deleted) {
      response.json(deleted)
    }
    else {
      response.status(404).json({ message: 'Could not delete category with  given id' })
    }
  })
  .catch(error => {
    response.status(500).json(error)
    console.log(error)
  })
})

module.exports = router