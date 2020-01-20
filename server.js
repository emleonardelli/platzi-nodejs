const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/', (req, res) => {
  res.send('Hola desde GET nuevo')
})

router.post('/', (req, res) => {
  console.log(req.query)
  //?orderBy=id&age=25
  console.log(req.body)
  res.send('Hola desde POST')
})

app.listen(3000)

console.log('La APP esta escuchando en http://localhost:3000')