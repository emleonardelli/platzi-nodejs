const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/:user_id', (req, res) => {
  controller.listChats(req.params.user_id)
    .then((users) => {
      response.success(req, res, users, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected error', 500, e)
    })
})

router.post('/', (req, res) => {
  controller.addChat(req.body.chat)
    .then((chats) => {
      response.success(req, res, chats, 201)
    })
    .catch(e => {
      response.error(req, res, 'Informacion invalida', 400, e)
    })
})

module.exports = router 