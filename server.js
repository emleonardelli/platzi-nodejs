require('dotenv').config()
const express = require('express')
const app = express()
const server = require('http').Server(app)

const bodyParser = require('body-parser')
const db = require('./db')
db()
const router = require('./network/routes')
const socket = require('./socket')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

socket.connect(server)

router(app)

app.use('/app', express.static('public'))

server.listen(3000, () => {
  console.log('La APP esta escuchando en http://localhost:3000')
})
