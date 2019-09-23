const jwt = require("jsonwebtoken")
const secret = require("./secrets.js")

module.exports = (request, response, next) => {
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
