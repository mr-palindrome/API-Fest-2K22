const express = require('express')
const bodyParser = require('body-parser')
const app=express();

require('./models/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const routes = require("./controllers/routes");
routes(app);


// listen to post
app.listen(process.env.PORT  || 3000, () => console.log('You are listening to port 3000'));