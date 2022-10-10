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
