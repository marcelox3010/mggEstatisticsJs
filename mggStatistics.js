/*
 *  Statistics Module: Marcelo Gomes Gadelha (MGG)
 */

const mggAux = require("./mggAuxFunctions");

module.exports = {

	  mggMean
	, mggMedian
	, mggMode
	, mggStandardDeviation
	, mggPearsonCorrelationCoefficient
	, mggLinearRegressionAB
	, mggLinearRegressionPredictModel
	, mggStandardClassNumber

	, mggQuartiles



};

function mggMean(array){

	if(mggAux.mggEmptyArray(array)) return NaN
	if(!mggAux.mggOnlyNumbers(array)) return NaN

	return mggAux.mggSumArray(array) / array.length

}


function mggMedian(array, toSort = false){

	if(mggAux.mggEmptyArray(array)) return NaN;
	if(!mggAux.mggOnlyNumbers(array)) return NaN;
	if(!mggAux.mggIsArraySorted(array)) {

		if(toSort){

			array = mggAux.mggArraySort(array)

		}else return NaN;

	}

	let mod = array.length % 2
	let i = Math.trunc(array.length / 2)
	let j = Math.trunc(i + 1)

	if(mod === 0) return (array[i-1] + array[j-1]) / 2
	else return array[i]

}

function mggMode(array){

	if(mggAux.mggEmptyArray(array)) return NaN
	if(!mggAux.mggOnlyNumbers(array)) return NaN

	let maxQtd = 0
	let mapReturn = new Map
	let tableData = mggAux.mggTableCount(array)
	console.log(tableData)

	tableData.forEach((v,k)=>{

		if(v === maxQtd){

			mapReturn.set(k, v)

		}else if(v > maxQtd){

			mapReturn.clear()
			mapReturn.set(k, v)
			maxQtd = v

		}

	});

	return Array.from(mapReturn.keys())

}

function mggStandardDeviation(array, sample=false){

	if(mggAux.mggEmptyArray(array)) return NaN;
	if(!mggAux.mggOnlyNumbers(array)) return NaN;

	const n = array.length
	const meanArray = mggMean(array)
	const deviations = array.map((v) => {return v - meanArray})
	const deviationsPow2 = deviations.map((v) => {return Math.pow(v,2)})
	let sampleMinus = 0
	if(sample === true) sampleMinus = 1;
	let variance = mggAux.mggSumArray(deviationsPow2) / (n-sampleMinus)

	return Math.sqrt(variance)

}

function mggPearsonCorrelationCoefficient(arrayX, arrayY){

	if(mggAux.mggEmptyArray(arrayX)) return NaN
	if(!mggAux.mggOnlyNumbers(arrayX)) return NaN
	if(mggAux.mggEmptyArray(arrayY)) return NaN
	if(!mggAux.mggOnlyNumbers(arrayY)) return NaN
	if(arrayY.length !== arrayX.length) return NaN

	let n = arrayX.length

	let sumArrayX = mggAux.mggSumArray(arrayX)
	let arrayX2 = arrayX.map((v) => {return Math.pow(v,2)})
	let sumArrayX2 = mggAux.mggSumArray(arrayX2)

	let sumArrayY = mggAux.mggSumArray(arrayY)
	let arrayY2 = arrayY.map((v) => {return Math.pow(v,2)})
	let sumArrayY2 = mggAux.mggSumArray(arrayY2)

	let arrayXY = arrayX.map((v,i)=>{return v * arrayY[i]})
	let sumArrayXY = mggAux.mggSumArray(arrayXY)

	return	((n * sumArrayXY) - (sumArrayX * sumArrayY)) / (Math.sqrt( (n*sumArrayX2) - Math.pow(sumArrayX,2)) * (Math.sqrt( (n*sumArrayY2) - Math.pow(sumArrayY,2))))

}

function mggLinearRegressionAB(arrayX, arrayY){

	if(mggAux.mggEmptyArray(arrayX)) return NaN
	if(!mggAux.mggOnlyNumbers(arrayX)) return NaN
	if(mggAux.mggEmptyArray(arrayY)) return NaN
	if(!mggAux.mggOnlyNumbers(arrayY)) return NaN
	if(arrayY.length !== arrayX.length) return NaN

	let sumArrayX = mggAux.mggSumArray(arrayX)
	let sumArrayX2 = mggAux.mggSumArray(arrayX.map((v) => {return Math.pow(v,2)}));
	let sumArrayY = mggAux.mggSumArray(arrayY)
	let arrayXY = arrayX.map((v, i) => { return v * arrayY[i] })
	let sumArrayXY = mggAux.mggSumArray(arrayXY)
	let n = arrayX.length

	let b = ( (n * sumArrayXY) - (sumArrayX * sumArrayY) )
			/ ( (n * sumArrayX2) - Math.pow(sumArrayX, 2) )

	let a = (sumArrayY - (b * sumArrayX)) / n

	let rAB = new Map();
	rAB.set("a", a)
	rAB.set("b", b)
	rAB.set("A", a)
	rAB.set("B", b)
	rAB.set("α", a)
	rAB.set("β", b)

	return rAB;

}

function mggLinearRegressionPredictModel(mapAB, array){

	if(mggAux.mggEmptyArray(array)) return NaN
	if(!mggAux.mggOnlyNumbers(array)) return NaN

	let a = mapAB.get("a")
	let b = mapAB.get("b")

	if(a == null || isNaN(a)) return NaN
	if(b == null || isNaN(b)) return NaN

	return array.map((x)=> a + (b * x))

}

function mggStandardClassNumber(array){

	return Math.ceil(Math.sqrt(dados.length))

}

function mggIntervalRange(array, ClassNumber){

	return amplitude / (numeroClasses - 1)

}

function mggQuartiles(array){

	if(mggAux.mggEmptyArray(array)) 	return NaN
	if(!mggAux.mggOnlyNumbers(array)) 	return NaN
	if(!mggAux.mggIsArraySorted(array)) array = mggAux.mggArraySort(array)
	
	let n = array.length
	let median = mggMedian(array)
	let arrayImpar = ((array.length % 2) != 0)? true : false;

	let r = new Map();
	r.set("n", n)
	r.set("median", median)
	r.set("mean", mggMean(array))

	let i = 0
	if(arrayImpar){
		
		r.set("min",array[0])

		let arrayQ1 = array.slice(0, Math.trunc(n/2)+1)
		r.set("q1", mggMedian(arrayQ1))
		
		r.set("q2",median)

		let arrayQ2 = array.slice(Math.trunc(n/2)+1, n-1)
		r.set("q3", mggMedian(arrayQ2))
		
		r.set("max", array[n-1])
		
	}else{
		
		r.set("min",array[0])

		let arrayQ1 = array.slice(0, Math.trunc(n/2))
		r.set("q1", mggMedian(arrayQ1))

		r.set("q2",median)

		let arrayQ2 = array.slice(Math.trunc(n/2), n)
		r.set("q3", mggMedian(arrayQ2))
		
		r.set("max", array[n-1])

	}

	r.set("dQ",r.get("q3") - r.get("q1"))

	return r

}
