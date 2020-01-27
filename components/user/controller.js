const store = require('./store')

function addUser(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      console.error('[User Controller] Falta el usuario')
      reject('Los datos son incorrectos')
      return false
    }
    const user = {
      name
    }
    store.add(user)
    resolve(user)
  })
}

function getUsers(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser))
  })
}

function deleteUser(id){
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id Invalido')
      return false
    }
    store.remove(id)
      .then(() => {
        resolve()
      })
      .catch(e => {
        reject(e)
      })
  })
}

module.exports = {
  addUser, 
  getUsers,
  deleteUser
}