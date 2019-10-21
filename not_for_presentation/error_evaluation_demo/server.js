const express = require('express');
const bodyParser = require('body-parser');
const decisionTreeController = require('./controller/decision_tree_controller');


// Create our Express application
const app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Create our Express router
const router = express.Router();

// Create endpoint handlers for /predict
router.route('/predict')
  .get(decisionTreeController.predict);


// Create endpoint handlers for /evaluate
router.route('/evaluate')
  .get(decisionTreeController.evaluate);


// Register all our routes with /api
app.use('/', router);

// Start the server
app.listen(3000);
