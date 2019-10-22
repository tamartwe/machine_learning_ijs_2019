const csv = require('csvtojson');

const DecisionTree = require('decision-tree');

let dt;

const init = async () => {
    const csvFilePath = __dirname + '/../Melbourne_housing.csv';
    const parsingOptions = {
        colParser:{
            "Price":"number",
            "Rooms":"number",
            "Distance": "number"
        },
        checkType:true
    };
    const dataset = await csv(parsingOptions).fromFile(csvFilePath);
    const filtered_dataset = dataset.filter(item => item.Price !== "");
    const class_name = "Price";
    const features = ["Rooms", "Distance", "Type"];
    dt = new DecisionTree(filtered_dataset, class_name, features);
}

init();

exports.predict = (distance, rooms, type) =>{
    const predicted_price = dt.predict({
        Rooms: rooms,
        Distance: distance,
        Type: type
    });
    return predicted_price;
}
