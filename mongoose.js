const mongoose = require('mongoose')

const connectDB = () => {
  return mongoose.connect(
    'mongodb+srv://admin:root@learning.rmbnn.mongodb.net/ShortUrl'
  )
}

module.exports = connectDB
