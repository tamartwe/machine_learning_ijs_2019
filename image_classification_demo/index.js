const tf = require('@tensorflow/tfjs')
const tf_node = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');

const fs = require('fs');
const jpeg = require('jpeg-js');

const loadModel = async () => {
  const mn = await mobilenet.load();
  return mn;
}

const classify = async (path) => {
  const image_buf = fs.readFileSync(path);
  const input = tf_node.node.decodeJpeg(image_buf);
  const  mn_model = await loadModel();
  const predictions = await mn_model.classify(input)

  console.log('classification results:', predictions[0].className)
}

const runFlow = async() => {
  const panda_image = '/Users/tamarstern/Documents/ijs_munich_2019/machine_learning/image_classification_demo/panda.jpg'
  await classify(panda_image);
  const rabbit_image = '/Users/tamarstern/Documents/ijs_munich_2019/machine_learning/image_classification_demo/rabbit.jpg'
  await classify(rabbit_image);
}

runFlow();