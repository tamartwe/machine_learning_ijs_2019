const express = require('express');
const bodyParser = require('body-parser');
const melbornDataSetController = require('./controllers/controller');


// Create our Express application
const app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Create our Express router
const router = express.Router();

// Create endpoint handlers for /
router.route('/predict')
  .get(melbornDataSetController.predict);



// Register all our routes with /api
app.use('/', router);

// Start the server
app.listen(3000);
