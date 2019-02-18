// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

function adjacentElementsProduct(inputArray) {
    var result = -Infinity;
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] * inputArray[i+1] > result)    result = inputArray[i] * inputArray[i+1];
    }
    
    return result;
}