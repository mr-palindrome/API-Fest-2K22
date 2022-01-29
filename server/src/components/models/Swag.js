const mongoose = require('mongoose')

const swagSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
}, { versionKey: false })

const Swag = mongoose.model('Swag', swagSchema)

module.exports = Swag