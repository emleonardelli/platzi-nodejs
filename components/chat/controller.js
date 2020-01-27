const store = require('./store')

function addChat(users) {
  if (!users || !Array.isArray(users)) {
    console.error('[Chat Controller] Falta el usuario')
    reject('Los datos son incorrectos')
    return false
  }
  const chat = {
    users: users
  }
  return store.add(chat)
}

function listChats(userId) {
  return store.list(userId)
}

module.exports = {
  addChat, 
  listChats,
}