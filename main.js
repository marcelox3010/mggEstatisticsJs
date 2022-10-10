/*
 * Teste
 */

const mggS = require("./mggStatistics.js");

const arrayTest1 = [1,2,3,5,6,7,8,9,10];
const arrayTest2 = ['1',2,3,4,5,6,7,8,9,10];
//const arrayTest3 = [1,2,3,5,6,7,8,9,10,11];
const arrayTest4 = [0,1,2,3,5,6,7,8,9,10,11];

console.log(mggS.mggMean(arrayTest1));
console.log(mggS.mggMean(arrayTest2));
console.log(mggS.mggMedian(arrayTest1));

try{

    mggS.mggMedian(arrayTest4);

}finally{

    console.log("Possivelmente o array não estava ordenado");

}

console.log(mggS.mggMedian(arrayTest4));
