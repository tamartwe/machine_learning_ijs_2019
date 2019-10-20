const decisionTreeModel = require('../models/model');

exports.predict = async (req, res) => {
    
    const rooms = Number(req.query.rooms);
    const type = req.query.type;
    const distance = Number(req.query.distance);
  
    const prediction = decisionTreeModel.predict(distance,rooms, type);
    return res.json({ prediction });
  };

exports.evaluate = async (req, res) => {
    
    const test_data = req.body.test_data;
    const error = decisionTreeModel.evaluate(test_data);
    return res.json({ error });
};
