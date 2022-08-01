const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const plantsRouter = require('./plants/plants-router')
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter )
server.use('/api/plants', plantsRouter )
// server.use('/api/fish', fishRouter)
// server.use('/api/calendar', calendarRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
     message: err.message,
     stack: err.stack,
  });
});

module.exports = server
