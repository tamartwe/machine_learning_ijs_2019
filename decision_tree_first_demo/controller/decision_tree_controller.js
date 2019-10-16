const decisionTreeModel = require('../model/decision_tree');


exports.predict = async (req, res) => {
    
    const color = req.body.color;
    const shape = req.body.shape;
  
    const prediction = decisionTreeModel.predict(color, shape);
    return res.json({ prediction });
  };