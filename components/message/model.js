const mongoose = require('mongoose')
const schema = mongoose.Schema
const mySchema = new schema({
  user: String,
  message: {
    type: String,
    required: true
  },
  date: Date
})

