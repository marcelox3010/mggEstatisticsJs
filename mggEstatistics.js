/*
 *  LIBRARY OF STATISTICS MARCELO GOMES GADELHA
 */

function mggOnlyNumbers(array){

	return array.every(element => {return typeof element === 'number';});

}

function mggMean(array){

	if(!mggOnlyNumbers(array)) return NaN;

	return array.reduce((a, b) => a + b, 0) / array.length;

}



console.log(mggMean([-1,2.0,3]));
