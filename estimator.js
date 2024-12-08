const brain = require('brain.js');
const data = [
    { input: { subject1: 85, subject2: 90, subject3: 75, subject4: 99, subject5: 91, subject6: 88, subject7: 85 }, output: [9.5] },
    { input: { subject1: 70, subject2: 78, subject3: 82, subject4: 99, subject5: 91, subject6: 88, subject7: 85 }, output: [8.0] },
    { input: { subject1: 92, subject2: 88, subject3: 94, subject4: 99, subject5: 91, subject6: 88, subject7: 85 }, output: [10.0] },
];
const net = new brain.NeuralNetwork({
    hiddenLayers: [7],
});
net.train(data, {
    iterations: 2000,
    errorThresh: 0.005,
    log: true,
    logPeriod: 100,
    learningRate: 0.3,
});
const input = { subject1: 80, subject2: 85, subject3: 78, subject4: 95, subject5: 90, subject6: 88, subject7: 85 };
const predictedGPA = net.run(input);
console.log(`Predicted GPA: ${predictedGPA}`);