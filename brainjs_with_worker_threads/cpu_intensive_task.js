const { Worker, isMainThread, parentPort } = require('worker_threads');
  
const worker = new Worker(__dirname + '/worker.js', { workerData: "When you're waiting for the waiter, aren't you the waiter?" });
  
worker.on('message', (msg) => { console.log(msg) });
worker.on('error', console.error);
worker.on('exit', code => console.log('Worker exit: ', code));


