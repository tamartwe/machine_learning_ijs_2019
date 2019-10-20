const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const ml_model = require('./tensor_model')

const app = express();

app.use(cors());
app.options('*', cors());


// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


const router = express.Router();

ml_model.init()

router.get('/classify', async (req, res) => {
    const image_name = req.query.image_name;
    preidction = await ml_model.classify(image_name);
    return res.json({ 'result': preidction });
  });
  
  
app.use('/api', router);
  
// Start the server
app.listen(port);
console.log('server is up ' + port);
  
  
