
function mggEmptyArray(array){

    if(array.length == 0) return true;

    return false;

}

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

function mggTableCount(array){

    let map = new Map();
    let arrayRepetidos = [];

    for(let n of array){

        if(arrayRepetidos.filter(f => {return f === n}) > 0) continue;
        else arrayRepetidos.push(n);
        let qtd = array.filter(f => {return f === n}).length;
        map.set("valor "+ n, qtd);

    }

    return map;

}

module.exports = {mggEmptyArray, mggOnlyNumbers , mggIsArraySorted, mggArraySort, mggTableCount};
