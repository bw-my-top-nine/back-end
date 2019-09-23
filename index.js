const server = require('./api/server.js');

const port = 5678

server.listen(port, () => {
  console.log(`API Running on port ${port}`)
})