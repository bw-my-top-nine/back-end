const express = require('express');
const server = express()
const port = 5678
server.listen(port, () => {
  console.log(`API Running on port ${port}`)
})