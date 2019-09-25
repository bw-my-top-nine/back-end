const jwt = require("jsonwebtoken")

module.exports = function generateToken(user) {
  const payload = {
    email: user.email
  }
  const options = {
    expiresIn: "1d"
  }
  return jwt.sign(payload, "secret", options)
}
