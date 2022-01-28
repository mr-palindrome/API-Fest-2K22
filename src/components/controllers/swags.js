const Swag = require('../models/Swag')


//get all swags
exports.getSwags = async (req, res) => {
    try {
        const swags = await Swag.find();
        res.json(swags)
    } catch (err) {
        console.error(err)
    }
}

//add new swag
exports.createSwag = async (req, res) => {
    try {
        const newSwag = new Swag(req.body)
        await newSwag.save()
        res.json(newSwag)
    } catch (err) {
        console.error(err)
    }
}

//get swag by id
exports.getSwag = async (req, res) => {
    try {
        const swag = await Swag.findById(req.params.id);
        res.json(swag)
    } catch (err) {
        console.error(err)
    }
}

//update swag by id
exports.updateSwag = async (req, res) => {
    try {
        const update = req.body
        const updatedSwag = await Swag.findByIdAndUpdate(req.params.id, update, {new: true})
        res.json(updatedSwag)
    } catch (err) {
        console.error(err)
    }
}

//delete swag by id
exports.deleteSwag = async (req, res) => {
    try {
        await Swag.findByIdAndDelete(req.params.id)
        res.json('Swag deleted successfully!')
    } catch (err) {
        console.error(err)
    }
}

// get swags by owner id
exports.getUserSwags = async (req, res) => {
    try {
        // console.log(req.params.id);
        const swag = await Swag.find({ owner: req.params.id});
        res.json(swag)
    } catch (err) {
        console.error(err)
    }
};


// get swags by category id
exports.getCategorySwags = async (req, res) => {
    try {
        // console.log(req.params.id);
        const swag = await Swag.find({ category: req.params.id });
        res.json(swag)
    } catch (err) {
        console.error(err)
    }
};