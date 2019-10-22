const brain = require('brain.js');

let trainedNet;

const trainingData = [
    {
        input: "If I Had A Nickel For Every Time I've Cried In The Back Of An Uber, I Would Have Another Pair Of Yeezy's.",
        output: { officialtrump: 1 }
    },{
        input: "That Moment When Peeing Feels So Good You Start Crying.",
        output: { officialtrump: 1 }
    },{
        input: "I Am Not A Human And I Don't Speak English",
        output: { officialtrump: 1 }
    },{
        input: "If I drop soap on the ground, is the ground cleansed or is the soap dirty?",
        output: { faketrump: 1 }
    },{
        input: "You bake cookies not cook them, why aren't they called bakeies?",
        output: { faketrump: 1 }
    },{
        input: "If you try to fail, and succeed, which have you done?",
        output: { faketrump: 1 }
    }
 ]


function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

const processTrainingData = (data) => {
   return data.map(d => {
       return {
           input: encode(d.input),
           output: d.output
       }
   })
}

exports.train = () => {
   let net = new brain.NeuralNetwork();
   net.train(processTrainingData(trainingData));
   trainedNet = net.toFunction();
   console.log('Finished training...');
};

exports.execute = (input) => {
   let results = trainedNet(encode(input));
   let output;
   results.officialtrump > results.faketrump ? output = 'OfficialTrump' : output = 'FakeTrump';
   return output;
}


 // train(trainingData);

 // console.log(execute("When you're waiting for the waiter, aren't you the waiter?"));