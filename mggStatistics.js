/*
 *  LIBRARY OF STATISTICS MARCELO GOMES GADELHA
 */

const mggAux = require("./mggAuxFunctions");

function mggMean(array){

	if(!mggAux.mggOnlyNumbers(array)) return NaN;

	return array.reduce((a, b) => a + b, 0) / array.length;

}

function mggMedian(array){

	if(!mggAux.mggOnlyNumbers(array)) return NaN;

	if(!mggAux.mggIsArraySorted(array)) throw "Array not Sorted";
	
	mod = array.length % 2;
	i = Math.trunc(array.length / 2);
	j = Math.trunc(i + 1);

	console.log(array.length + "  "+ mod + " " + i + " " + j);

	if(mod === 0) return (array[i-1] + array[j-1]) / 2;
	else return array[i];

}

module.exports = {mggMean , mggMedian};