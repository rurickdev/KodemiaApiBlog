
const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  response.json({
    message: 'Hola Mundo'
  })
})

module.exports = app
