const rp = require('request-promise');


const getPrediction = async (image_name) => {
    const options = {
        uri: 'http://localhost:3000/api/classify',
        qs: {
            image_name
        },
        headers: {
            'Content-Type': 'application/json'
        },
        json: true 
    };

    const prediction = await rp(options);
    const logLine = `for image ${image_name} prediction is ${prediction.result}`;
    console.log(logLine);
} 

const showPredictions = async () => {
    return await Promise.all(['panda.jpg', 'rabbit.jpg'].map(item => getPrediction(item)));
}

const runFlow = async () => {
    await showPredictions();
}

runFlow();
  