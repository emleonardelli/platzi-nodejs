const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
  const filterUsers = req.query.name || null
  controller.getUsers(filterUsers)
    .then((userList) => {
      response.success(req, res, userList, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected error', 500, 'e')
    })
})

router.post('/', (req, res) => {
  controller.addUser(req.body.name)
    .then((user) => {
      response.success(req, res, user, 201)
    })
    .catch(e => {
      response.error(req, res, 'Informacion invalida', 400, e)
    })
})

router.delete('/:id', (req, res) => {
  controller.deleteUser(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
      response.error(req, res, 'Error interno', 500, e)
    })
})

module.exports = router 