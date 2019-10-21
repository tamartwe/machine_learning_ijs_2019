const decisionTreeModel = require('../models/model');

exports.predict = async (req, res) => {
    
    const rooms = Number(req.query.rooms);
    const type = req.query.type;
    const distance = Number(req.query.distance);
  
    const prediction = decisionTreeModel.predict(distance,rooms, type);
    return res.json({ prediction });
  };
