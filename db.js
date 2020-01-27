const db = require('mongoose')

const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env

const mongoUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
db.Promise = global.Promise

async function connect(){
  await db.connect(mongoUrl, {
    useNewUrlParser: true
  })
  console.log('[DB] Conectada con exito')

}

module.exports = connect 