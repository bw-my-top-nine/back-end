// DEPENDENCIES
const express = require('express')
const router = express.Router()

// WEB TOKEN DEPENDENCIES
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');

// MODEL IMPORTS
const authenticationModel = require('./authenticationModel')

// MIDDLEWARE IMPORTS
// const authenticateMiddleware = require('./authenticateMiddleware')

// WEB TOKEN FILE IMPORTS
const secret = require('./secrets.js')
const generateToken = require('./generateToken.js')

//ROUTES

// POST USER - REGISTER ((C)REATE)
router.post('/register', (request, response) => {
  const user = request.body;
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash

  authenticationModel.add(user)
    .then(userData => {
      response.status(201).json(userData)
    })
    .catch(error => {
      response.status(500).json(error)
    })
})

// POST USER - LOGIN ((C)REATE)
router.post('/login', (request, response) => {
  const { username, password } = request.body

  authenticationModel.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        response.status(200).json({ message: `Welcome ${user.username}`, token })
      }
      else {
        response.status(401).json({ message: `Invalid Credentials` })
      }
    })
    .catch(error => {
      response.status(500).json(error)
    })
})

// GET ALL USERS ((R)EAD)
router.get('/users', authenticateMiddleware, (request, response) => {
  authenticationModel.find()
    .then(users => {
      response.json(users)
    })
    .catch(error => {
      response.status(500).json(error)
    })
})

// DELETE USER ((D)ELETE)
router.delete('/users/:id', (request, response) => {
  authenticationModel.remove(request.params.id)
    .then(user => {
      response.status(200).json({ message: `deleted ${user}`})
    })
    .catch(error => {
      response.status(500).json(error)
    })
})

function authenticateMiddleware(request, response, next) {
  const token = request.headers.authorization

  if (token) {
    jwt.verify(token, secret.jwtSecret, (error, decodedToken) => {
      if (error) {
        response.status(401).json({ message: 'Invalid Credentials' });
      }
      else {
        request.user = { username: decodedToken.username }
        next()
      }
    })
  }
  else {
    response.status(400).json({ message: "No Credentials Provided" })
  }
}

module.exports = router