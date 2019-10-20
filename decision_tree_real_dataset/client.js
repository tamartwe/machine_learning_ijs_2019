const rp = require('request-promise');

const test_data = [
    {"type":"h", "distance": 2.5, "rooms": 4},
    {"type":"h", "distance": 2.5, "rooms": 2},
    {"type":"t", "distance": 2.5, "rooms": 3}
];

getPrediction = async (distance, rooms, type) => {
    const options = {
        uri: 'http://localhost:3000/predict',
        qs: {
            distance,
            rooms,
            type
        },
        headers: {
            'Content-Type': 'application/json'
        },
        json: true 
    };

    const prediction = await rp(options);
    const logLine = `for rooms ${rooms}, type ${type} and distance ${distance}, prediction is ${JSON.stringify(prediction.prediction)}`;
    console.log(logLine);
} 

const showPredictions = async () => {
    return await Promise.all(test_data.map(item => getPrediction(item.distance, item.rooms, item.type)));
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
  