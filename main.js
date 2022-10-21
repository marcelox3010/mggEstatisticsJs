/*
 * Auxiliar Functions
 */

const mggS = require("./mggStatistics.js");
const {mggArraySort} = require("./mggAuxFunctions");

const arrayTest1 = [1,2,3,5,6,7,8,9,10];
const arrayTest2 = ['1',2,3,4,5,6,7,8,9,10];
const arrayTest3 = [12,1,2,3,5,6,7,8,9,10,11];
const arrayTest4 = [110,1,2,3,5,6,7,8,9,10,11];

console.log("Test 1 --->");
console.log(arrayTest1);
console.log("Mean: " + mggS.mggMean(arrayTest1));

console.log("Test 2 --->");
console.log(arrayTest2);
console.log("Mean: " + mggS.mggMean(arrayTest2));

console.log("Test 3 --->");
console.log(arrayTest1);
console.log("Median: " + mggS.mggMedian(arrayTest1));

console.log("Test 4 --->");
try{

    console.log(arrayTest3);
    console.log(mggS.mggMedian(arrayTest3));

}
catch(e){

    mggS.mggMedian(mggArraySort(arrayTest3));

}

console.log("Test 5 --->");
console.log(arrayTest4);
mggS.mggMedian(arrayTest4);

console.log("Test 6 --->");
console.log(arrayTest4);
console.log(mggS.mggMedian(arrayTest4));

console.log("Test 7 --->");
console.log(arrayTest4);
console.log(mggS.mggMedian(arrayTest4, true));

console.log("Test 8 ---> MODA");
let a = [];
console.log(a)
console.log(mggS.mggMode(a));
let b = ['1',2,3,3,3,1,2,2,1,1,1,1,1,3,3,3,3,3,3,3];
console.log(b)
console.log(mggS.mggMode(b));

let c = [1,1,1,2,2,2,3,4];
console.log(c)
console.log(mggS.mggMode(c));
console.log("Fim");

console.log("Test 9 ---> REGRASSÃO LINEAR");


let ax = [164,166,169,169,171,173,173,176,178]

let ay = [166,166,171,166,171,171,178,173,178]

console.log(ax)
console.log(ay)

console.log(mggS.mggLinearRegressionAB(ax, ay))

console.log("Test 10 ---> desvio padrão");

const turmaA = [4, 5, 5, 6, 6, 7, 7, 8];
const turmaB = [1, 2, 4, 6, 6, 9, 10, 10];
const turmaC = [0, 6, 7, 7, 7, 7.5, 7.5];
console.log("Turma A: " + mggS.mggStandardDeviation(turmaA, true))
console.log("Turma B: " + mggS.mggStandardDeviation(turmaB, true))
console.log("Turma C: " + mggS.mggStandardDeviation(turmaC, true))

console.log("Test 10 ---> pearson");
arrayX = [2,3,4,5,5,6,7,8]
arrayY = [4,7,9,10,11,11,13,15]
console.log(mggS.mggPearsonCorrelationCoefficient(arrayX, arrayY))

console.log("Test 11 ---> REGRESSÃO LINEAR MODELO DE PREDIÇÃO");


ax = [164,166,169,169,171,173,173,176,178]
ay = [166,166,171,166,171,171,178,173,178]

console.log(ax)
console.log(ay)

console.log(mggS.mggLinearRegressionPredictModel(mggS.mggLinearRegressionAB(ax, ay), ax))


console.log("Test 12 ---> Classes");

ax = [164,166,169,169,171,173,173,176,178]

let qtdClasses = mggS.mggStandardClassNumber(ax)
console.log("Quantidade de Classes: " + qtdClasses)

console.log("Test 13 ---> amplitude range");

let amplitude = mggS.mggRange(ax)
console.log("Amplitude: " + amplitude)
