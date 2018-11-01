require('dotenv').config({ path: '../variables.env' })

const createServer = require('./createServer')

const server = createServer()

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is in port ${deets.port}`)
  }
)
