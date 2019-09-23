require('dotenv').config()

const server = require('./api/server.js');

const PORT = process.env.port || 5678

server.listen(PORT, () => {
  console.log(`API Running on port ${PORT}`)
})