const mongoose = require('mongoose')
const schema = mongoose.Schema
const mySchema = new schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    required: true
  },
  date: Date
})

const model = mongoose.model('Message', mySchema)
module.exports = model

