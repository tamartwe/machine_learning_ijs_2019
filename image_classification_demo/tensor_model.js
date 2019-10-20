const tf = require('@tensorflow/tfjs')
const tf_node = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');

const fs = require('fs');
const jpeg = require('jpeg-js');

let mn;

exports.init = async () => {
  mn = await mobilenet.load();
}

exports.classify = async (image_name) => {
  const path = `${__dirname}/images/${image_name}`;
  const image_buf = fs.readFileSync(path);
  const input = tf_node.node.decodeJpeg(image_buf);
  const predictions = await mn.classify(input)
  return predictions[0].className;
}