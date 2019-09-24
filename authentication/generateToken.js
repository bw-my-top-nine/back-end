const jwt = require("jsonwebtoken")

module.exports = function generateToken(user) {
  const payload = {
    username: user.username
  }
  const options = {
    expiresIn: "1d"
  }
  return jwt.sign(payload, "secret", options)
}
