const rp = require('request-promise');

const test_data = [
    {"color":"blue", "shape":"hexagon", "liked":false},
    {"color":"red", "shape":"hexagon", "liked":false},
    {"color":"yellow", "shape":"hexagon", "liked":true},
    {"color":"yellow", "shape":"circle", "liked":true}
];

getPrediction = async (shape, color) => {
    const options = {
        uri: 'http://localhost:3000/predict',
        qs: {
            shape,
            color
        },
        headers: {
            'Content-Type': 'application/json'
        },
        json: true 
    };

    const prediction = await rp(options);
    const logLine = `for shape ${shape} and color ${color}, prediction is ${prediction.prediction}`;
    console.log(logLine);
} 

const showPredictions = async () => {
    return await Promise.all(test_data.map(item => getPrediction(item.shape, item.color)));
}

const showError = async () => {
    const options = {
        uri: 'http://localhost:3000/evaluate',
        body: {
            test_data
        },
        headers: {
            'Content-Type': 'application/json'
        },
        json: true 
    };
    const errorEvaluation = await rp(options);
    const logLine = `error evaluation for test data is ${errorEvaluation.error}`;
    console.log(logLine);
}

runErrorFlow = async () => {
    await showPredictions();
    await showError();
}

runErrorFlow();
  