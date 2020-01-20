const express = require('express')
const router = express.Router()

var app = express()

app.use(router)

router.get('/', (req, res) => {
  res.send('Hola desde GET')
})

router.post('/', (req, res) => {
  res.send('Hola desde POST')
})

app.listen(3000)

console.log('La APP esta escuchando en http://localhost:3000')