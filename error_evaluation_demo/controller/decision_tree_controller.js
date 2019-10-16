const decisionTreeModel = require('../model/decision_tree');


exports.predict = async (req, res) => {
    
    const color = req.query.color;
    const shape = req.query.shape;
  
    const prediction = decisionTreeModel.predict(color, shape);
    return res.json({ prediction });
  };

  exports.evaluate = async (req, res) => {
    
    const test_data = req.body.test_data;
  
    const error = decisionTreeModel.evaluate(test_data);
    return res.json({ error });
  };