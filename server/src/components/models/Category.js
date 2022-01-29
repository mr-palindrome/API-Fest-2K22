const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "This field is required.",
    },
  },
    { versionKey: false }
);


const Category = mongoose.model('Categories', categorySchema)

module.exports = Category