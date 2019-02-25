function arrayChange(inputArray) {
    var result = 0;
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i - 1] >= inputArray[i]) {
            var diff = inputArray[i - 1] - inputArray[i] + 1;
            inputArray[i] += diff;
            result += diff;
        }
    }

    return result;
}