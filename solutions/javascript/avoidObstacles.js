function avoidObstacles(inputArray) {
    for (let i = 2;; i++) {
        var bool = true;
        for (let j = 0; j < inputArray.length; j++) {
            bool = bool && inputArray[j] % i != 0;
        }

        if (bool) return i;
    }
}