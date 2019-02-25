function arrayMaximalAdjacentDifference(inputArray) {
    var max = 0;
    for (let i = 1; i < inputArray.length; i++) {
        var abs = Math.abs(inputArray[i] - inputArray[i - 1]);
        max = max <= abs ? abs : max;
    }

    return max;
}