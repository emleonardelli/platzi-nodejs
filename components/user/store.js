const Model = require('./model')

function addUser(user){
  //list.push(message)
  const myUser = new Model(user)
  return myUser.save()
}

async function getUser(filterUser){
  let filter = {}
  if (filterUser !== null) {
    filter = {name: filterUser}
  } 
  const users = await Model.find(filter)
  return users
}

function removeUser(id){
  return Model.deleteOne({_id: id})
}

module.exports = {
  add: addUser,
  list: getUser,
  remove: removeUser
}