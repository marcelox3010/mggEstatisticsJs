/*
 *  Statistics Module: Marcelo Gomes Gadelha (MGG)
 */

const mggAux = require("./mggAuxFunctions");

function mggMean(array){

	if(!mggAux.mggEmptyArray(array)) return NaN;
	if(!mggAux.mggOnlyNumbers(array)) return NaN;

	return mggAux.mggSumArray(array) / array.length;

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

	let maxQtd = 0;
	let mapReturn = new Map;
	let tableData = mggAux.mggTableCount(array);
	console.log(tableData);

	tableData.forEach((v,k)=>{

		if(v === maxQtd){

			mapReturn.set(k, v);

		}else if(v > maxQtd){

			mapReturn.clear();
			mapReturn.set(k, v);
			maxQtd = v;

		}

	});

	return Array.from(mapReturn.keys());

}

function mggLinearRegressionAB(arrayX, arrayY){

	if(mggAux.mggEmptyArray(arrayX)) return NaN;
	if(!mggAux.mggOnlyNumbers(arrayX)) return NaN;
	if(mggAux.mggEmptyArray(arrayY)) return NaN;
	if(!mggAux.mggOnlyNumbers(arrayY)) return NaN;
	if(arrayY.length !== arrayX.length) return NaN;

	let sumArrayX = mggAux.mggSumArray(arrayX);
	let sumArrayX2 = mggAux.mggSumArray(arrayX.map((v) => {return Math.pow(v,2)}));
	let sumArrayY = mggAux.mggSumArray(arrayY);
	let arrayXY = arrayX.map((v, i) => { return v * arrayY[i] });
	let sumArrayXY = mggAux.mggSumArray(arrayXY);
	let n = arrayX.length;

	let b = ( (n * sumArrayXY) - (sumArrayX * sumArrayY) )
			/ ( (n * sumArrayX2) - Math.pow(sumArrayX, 2) );

	let a = (sumArrayY - (b * sumArrayX)) / n ;

	let rAB = new Map();
	rAB.set("a", a)
	rAB.set("b", b)

	return rAB;

}

module.exports = {mggMean, mggMedian, mggMode, mggLinearRegressionAB};