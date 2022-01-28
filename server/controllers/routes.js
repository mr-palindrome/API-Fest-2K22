const swagController = require("./swagController");
const userController = require("./userController");
const categoryController = require("./categoryController");


module.exports = function(app){
	/* swag urls */
		// get all swags
		app.get('/swags', swagController.getAllSwags);

		// get all swags of a user
		app.get('/swags/user/:id', swagController.getUserSwags);

		// get all swags of a particular category
		app.get('/swags/category/:id', swagController.getCategorySwags);

		// get swag by id
		app.get('/swags/:id', swagController.getSwag);

		//add swags
		app.post('/swags/:id', swagController.addSwag);

		//delete swags
		app.delete('/swags/:id', swagController.deleteSwag);
	/* swag urls end */
};