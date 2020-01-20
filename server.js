const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/message', (req, res) => {
  console.log(req.headers)
  res.header({
    'custom-header' : 'Nuestro valor personalizado'
  })
  res.send('Hola desde GET nuevo')
})

router.post('/message', (req, res) => {
  console.log(req.query)
  //?orderBy=id&age=25
  console.log(req.body)
  res.status(201).send({
    error: '', body: 'Creado correctamente'
  })
})

app.listen(3000)

console.log('La APP esta escuchando en http://localhost:3000')