const DecisionTree = require('decision-tree');

const training_data = [
    {"color":"blue", "shape":"square", "liked":false},
    {"color":"red", "shape":"square", "liked":false},
    {"color":"blue", "shape":"circle", "liked":true},
    {"color":"red", "shape":"circle", "liked":true},
    {"color":"blue", "shape":"hexagon", "liked":false},
    {"color":"red", "shape":"hexagon", "liked":false},
    {"color":"yellow", "shape":"hexagon", "liked":true},
    {"color":"yellow", "shape":"circle", "liked":true}
];

const class_name = "liked";

const features = ["color", "shape"];

const dt = new DecisionTree(training_data, class_name, features);

exports.predict = (color, shape) => {
    return dt.predict({
        color: color,
        shape: shape
    });
}

exports.evaluate = (test_data) => {
    return dt.evaluate(test_data);
}