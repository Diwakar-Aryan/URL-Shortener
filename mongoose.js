const mongoose = require('mongoose')

const connectDB = () => {
  return mongoose.connect(
    'Some URL Please use .env files'
  )
}

module.exports = connectDB
