const mongoose = require('mongoose')
const URLSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('shortUrl', URLSchema)
