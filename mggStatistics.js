/*
 *  Statistics Module: Marcelo Gomes Gadelha (MGG)
 */

const mggAux = require("./mggAuxFunctions");

function mggMean(array){

	if(!mggAux.mggEmptyArray(array)) return NaN;
	if(!mggAux.mggOnlyNumbers(array)) return NaN;

	return array.reduce((a, b) => a + b, 0) / array.length;

}

function mggMedian(array, toSort = false){

	if(!mggAux.mggEmptyArray(array)) return NaN;
	if(!mggAux.mggOnlyNumbers(array)) return NaN;
	if(!mggAux.mggIsArraySorted(array)) {

		if(toSort){

			array = mggAux.mggArraySort(array);

		}else return NaN;

	}

	let mod = array.length % 2;
	let i = Math.trunc(array.length / 2);
	let j = Math.trunc(i + 1);

	if(mod === 0) return (array[i-1] + array[j-1]) / 2;
	else return array[i];

}

function mggMode(array){

	if(mggAux.mggEmptyArray(array)) return NaN;
	if(!mggAux.mggOnlyNumbers(array)) return NaN;

	let arrayRepetidos = [];
	let mode;
	let maxQtd = 0;
	let arrayReturn = [];

	for(let n of array){

		if(arrayRepetidos.filter(f => {return f === n}) > 0) continue;
		else arrayRepetidos.push(n);

		let qtd = array.filter(f => {return f === n}).length;

		if(mode == null){
			mode = n;
			maxQtd = qtd;
			continue;
		}

		console.log(n +  " " + qtd + " " + mode);

		if(qtd > maxQtd){
			mode = n;
			maxQtd = qtd;
		}
	}

	return mode;

}

module.exports = {mggMean, mggMedian, mggMode};