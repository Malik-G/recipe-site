require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;
const campbellsRouter = require('./routes/campbells.router');
const edamamRouter = require('./routes/edamam.router');
const spoonacularRouter = require('./routes/spoon.router');

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'));

//ROUTES
app.use('/api/campbells-recipes', campbellsRouter);
app.use('/api/edamam-recipes', edamamRouter);
app.use('/api/spoon-recipes', spoonacularRouter);

//Server Setup
app.listen(port, function () {
	console.log('Listening on port: ', port);
});