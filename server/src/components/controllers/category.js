const Category = require('../models/Category')

exports.addCategory = async (req, res) => {
    try {
        const newCat = new Category(req.body)
        await newCat.save()
        res.json(newCat)
    } catch (err) {
        console.error(err)
    }
}

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category)
    } catch (err) {
        console.error(err)
    }
}
