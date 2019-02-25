// https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

function reverseInParentheses(inputString) {
    while (inputString.indexOf(")", 0) != -1) {
        var e = inputString.indexOf(")", 0);
        var s = inputString.lastIndexOf("(", e);

        var word = inputString.slice(s + 1, e);
        var reverseWord = word.split("").reverse().join("");

        inputString = inputString.slice(0, s) + reverseWord + inputString.slice(e + 1);
    }

    return inputString;
}