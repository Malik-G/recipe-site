'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const serverless = require('serverless-http');
const path = require('path');

const campbellsRouter = require('./routes/campbells.router.js');
const edamamRouter = require('./routes/edamam.router.js');
const spoonacularRouter = require('./routes/spoon.router.js');

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'));

//ROUTES
app.use('/.netlify/functions/server/api/campbells-recipes', campbellsRouter);
app.use('/.netlify/functions/server/api/edamam-recipes', edamamRouter);
app.use('/.netlify/functions/server/api/spoon-recipes', spoonacularRouter);


module.exports = app;
module.exports.handler = serverless(app);

//SERVER SETUP
// const port = process.env.PORT || 5000;
// app.listen(port, function () {
// 	console.log('Listening on port: ', port);
// });

/*
'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
*/