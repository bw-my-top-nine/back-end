const jwt = require("jsonwebtoken")
// const secret = require('./secrets.js')

module.exports = function generateToken(user) {
  const payload = {
    username: user.username
  }
  const options = {
    expiresIn: "1d"
  }
  return jwt.sign(payload, "keep it secret", options)
}
