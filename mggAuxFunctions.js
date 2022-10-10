

function mggOnlyNumbers(array){

        return array.every(element => {return typeof element === 'number';});

}

function mggIsArraySorted(array){

        let sorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                sorted = false;
                break;
            }
        }

        return sorted;

}

function mggArraySort(array){

    return array.sort(function(a, b){return a-b});

}

module.exports = {mggOnlyNumbers , mggIsArraySorted, mggArraySort};
