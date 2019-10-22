const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const ml_model = require('./ml_model')

const app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


const router = express.Router();

ml_model.train();

router.get('/', async (req, res) => {
    const phrase = req.body.phrase;
    fake_or_real = ml_model.execute(phrase);
    return res.json({ 'result': fake_or_real });
  });
  
  
app.use('/api', router);
  
// Start the server
app.listen(port);
console.log('server is up ' + port);
  
  
