const ml_model = require('./ml_model');

const { workerData, parentPort } = require('worker_threads');
const result = ml_model.execute(workerData)

parentPort.postMessage(result);