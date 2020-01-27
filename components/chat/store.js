const Model = require('./model')

function addChat(users){
  const myChat = new Model(users)
  return myChat.save()
}

async function getChat(userId){
  return new Promise((resolve, reject) => {
    let filter= {}
    if (userId) {
      filter = {
        users: userId
      }
    }
    const chats = Model.find(filter)
      .populate('users')
      .exec((err, populated) => {
        if (err) {
          reject(err)
          return false
        }
        resolve(populated)
      })
  })
}

module.exports = {
  add: addChat,
  list: getChat,
}