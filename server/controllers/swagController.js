const mongoose = require('mongoose')
const Swags = mongoose.model('Swags');
const ObjectId = require('mongodb').ObjectId;



exports.getAllSwags = (req, res) => {
	res.send('<h1>get all swags<h1>');
};

exports.getUserSwags = (req, res) => {
	res.send('<h1>get getUserSwags<h1>');
};
exports.getCategorySwags = (req, res) => {
	res.send('<h1>get getCategorySwags<h1>');
};
exports.getSwag = (req, res) => {
	res.send('<h1>get getSwag<h1>');
};

exports.addSwag = (req, res) => {
	res.send('<h1>addSwag<h1>');
};

exports.deleteSwag =(req, res) => {
	res.send('<h1>delete swag</h1>');
}