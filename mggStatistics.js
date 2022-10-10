/*
 *  Statistics Module: Marcelo Gomes Gadelha (MGG)
 */

const mggAux = require("./mggAuxFunctions");
const {mggArraySort} = require("./mggAuxFunctions");

function mggMean(array){

	if(!mggAux.mggOnlyNumbers(array)) return NaN;

	return array.reduce((a, b) => a + b, 0) / array.length;

}

function mggMedian(array, toSort = false){

	if(!mggAux.mggOnlyNumbers(array)) return NaN;

	if(!mggAux.mggIsArraySorted(array)) {

		if(toSort){

			array = mggArraySort(array);

		}else return NaN;

	}

	let mod = array.length % 2;
	let i = Math.trunc(array.length / 2);
	let j = Math.trunc(i + 1);

	if(mod === 0) return (array[i-1] + array[j-1]) / 2;
	else return array[i];

}



module.exports = {mggMean , mggMedian};