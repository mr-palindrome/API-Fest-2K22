const express = require('express')
const bodyParser = require('body-parser')
const app=express();

require('./models/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// listen to post
app.listen(3000, () => console.log('You are listening to post 3000'));