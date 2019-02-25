function palindromeRearranging(inputString) {
    var c = null;
    var d = '$';
    var count;
    var cUsed = false;

    for (let i = 0; i < inputString.length; i++) {
        c = inputString[i];
        count = 0;
        for (let j = 0; j < inputString.length; j++) {
            if (inputString[j] == c) count++;
        }

        if (count % 2 == 1) {
            if (cUsed && d != c) {
                return false;
            } else {
                d = c;
                cUsed = true;
            }
        }
    }

    return true;
}