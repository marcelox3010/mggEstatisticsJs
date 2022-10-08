/*
 *  LIBRARY OF STATISTICS MARCELO GOMES GADELHA
 */

const aux = require("./mggAuxFunctions");

function mggMean(array){

	if(!aux.mggOnlyNumbers(array)) return NaN;

	return array.reduce((a, b) => a + b, 0) / array.length;

}

function mggMedian(array){

	if(!aux.mggOnlyNumbers(array)) return NaN;

	if(!mggIsArraySorted(array)) throw "Array not Sorted";
	
	mod = array.length % 2;
	i = Math.trunc(array.length / 2);
	j = Math.trunc(i + 1);

	console.log(array.length + "  "+ mod + " " + i + " " + j);

	if(mod === 0) return (array[i-1] + array[j-1]) / 2;
	else return array[i];

}

const arrayTest1 = [1,2,3,5,6,7,8,9,10];
const arrayTest2 = ['1',2,3,4,5,6,7,8,9,10];
const arrayTest3 = [1,2,3,5,6,7,8,9,10,11];
const arrayTest4 = [0,1,2,3,5,6,7,8,9,10,11];

console.log(mggMean(arrayTest1));
console.log(mggMean(arrayTest2));
console.log(mggMedian(arrayTest1));

let median = 0;
try{

	mggMedian(arrayTest4);

}finally{

	console.log("Possivelmente o array não estava ordenado");

}

console.log(mggMedian(arrayTest4));
